#!/usr/bin/env python3
"""
Analisis de la RUTA 1 - DOWNTOWN DIA 1 (Nueva York) usando Google Directions API.

Calcula, de puerta a puerta:
  - Ida  : 333 York St, Jersey City  ->  Punto 1 (Staten Island Ferry)   [transit]
  - Ruta : 31 puntos del recorrido, tramo a tramo                         [walking]
  - Vuelta: Punto 31 (Puente de Brooklyn) -> 333 York St, Jersey City     [transit]

REQUISITOS
----------
  pip install requests
  Habilitar "Directions API" en Google Cloud (con facturacion activa).
  Exportar la clave:
      export GOOGLE_MAPS_API_KEY="TU_CLAVE_AQUI"

USO
---
  python3 ruta1_google_directions.py
  python3 ruta1_google_directions.py --csv ruta1.csv          # guarda CSV
  python3 ruta1_google_directions.py --salida "2026-07-25 09:00"  # hora de salida (transit)
"""

import os
import sys
import csv
import time
import argparse
from datetime import datetime

try:
    import requests
except ImportError:
    sys.exit("Falta 'requests'. Instala con:  pip install requests")

# La clave se resuelve en este orden:  --key  >  variable de entorno GOOGLE_MAPS_API_KEY
# NUNCA hardcodear la clave aquí: este archivo va en git. Usa .env / variable de entorno.
API_KEY = os.environ.get("GOOGLE_MAPS_API_KEY", "")
DIRECTIONS_URL = "https://maps.googleapis.com/maps/api/directions/json"

# --------------------------------------------------------------------------
# Alojamiento y extremos del recorrido
# --------------------------------------------------------------------------
HOTEL = "333 York St, Jersey City, NJ 07302"

# 31 puntos de la Ruta 1, en orden. (lat, lng) reales aproximadas.
# Puedes sustituir cualquier coordenada por una direccion/nombre de lugar (string).
PUNTOS = [
    ("1. Staten Island Ferry (Whitehall Terminal)", (40.70110, -74.01340)),
    ("2. St. Elizabeth Ann Seton Shrine",            (40.70240, -74.01380)),
    ("3. Carrusel SeaGlass y Battery Playscape",     (40.70360, -74.01660)),
    ("4. East Coast Memorial",                       (40.70450, -74.01590)),
    ("5. Castillo Clinton (Castle Clinton)",         (40.70330, -74.01700)),
    ("6. Estatua de la Libertad (mirador Battery)",  (40.70260, -74.01750)),
    ("7. American Merchant Mariners' Memorial",      (40.70400, -74.01810)),
    ("8. The Battery Urban Farm",                    (40.70380, -74.01550)),
    ("9. Museum Jewish Heritage",                    (40.70610, -74.01870)),
    ("10. Oasis Park (Wagner Park)",                 (40.70480, -74.01820)),
    ("11. Skyscraper Museum",                        (40.70570, -74.01890)),
    ("12. Museo de los Indios Americanos",           (40.70420, -74.01360)),
    ("13. Bowling Green",                            (40.70470, -74.01380)),
    ("14. Toro de Wall Street (Charging Bull)",      (40.70560, -74.01340)),
    ("15. Trinity Church",                           (40.70810, -74.01250)),
    ("16. Bolsa de Nueva York (NYSE)",               (40.70690, -74.01130)),
    ("17. Federal Hall",                             (40.70740, -74.01020)),
    ("18. La Nina sin Miedo (Fearless Girl)",        (40.70700, -74.01150)),
    ("19. Delmonico's",                              (40.70470, -74.01000)),
    ("20. Stone Street",                             (40.70420, -74.01100)),
    ("21. Fraunces Tavern",                          (40.70350, -74.01130)),
    ("22. Battery Maritime Building",                (40.70140, -74.01170)),
    ("23. Helipuerto (Downtown Manhattan Heliport)", (40.70130, -74.00900)),
    ("24. Elevated Acre",                            (40.70270, -74.00880)),
    ("25. Picnic con vistas (East River Esplanade)", (40.70350, -74.00780)),
    ("26. Pier 15",                                  (40.70530, -74.00275)),
    ("27. Pier 16 y 17 (South Street Seaport)",      (40.70630, -74.00250)),
    ("28. Seaport District",                         (40.70690, -74.00330)),
    ("29. Cannon's Walk",                            (40.70680, -74.00380)),
    ("30. Memorial Titanic",                         (40.70660, -74.00440)),
    ("31. Puente de Brooklyn (entrada peatonal)",    (40.71230, -74.00560)),
]


# --------------------------------------------------------------------------
# Bloque de ACTIVIDAD: ferry Estatua de la Libertad + Ellis Island.
# No se calcula con la API (es un ferry con paradas en islas + visitas guiadas).
# Sale de Battery Park, junto a Castle Clinton (Punto 5). Operador: Statue City Cruises.
# Tiempos "moderados"; edita los minutos segun cuanto quieras dedicar a cada isla.
# --------------------------------------------------------------------------
FERRY_ESTATUA = {
    "insertar_tras_punto": 5,  # se inserta al llegar al Punto 5 (Castle Clinton)
    "pasos": [
        ("Seguridad + embarque (Battery Park)",               40),
        ("Ferry Battery Park -> Liberty Island",              15),
        ("Visita Liberty Island (estatua, pedestal, museo)", 100),
        ("Ferry Liberty Island -> Ellis Island",             10),
        ("Visita Ellis Island (Museo de Inmigracion)",       100),
        ("Ferry Ellis Island -> Battery Park",               20),
    ],
}


def as_param(location):
    """Convierte (lat,lng) o string en el formato que espera la API."""
    if isinstance(location, (tuple, list)):
        return f"{location[0]},{location[1]}"
    return str(location)


def directions(origin, destination, mode, departure_ts=None, retries=3):
    """Llama a la Directions API y devuelve (metros, segundos, resumen)."""
    params = {
        "origin": as_param(origin),
        "destination": as_param(destination),
        "mode": mode,
        "language": "es",
        "units": "metric",
        "key": API_KEY,
    }
    if mode == "transit" and departure_ts is not None:
        params["departure_time"] = int(departure_ts)

    for intento in range(1, retries + 1):
        try:
            r = requests.get(DIRECTIONS_URL, params=params, timeout=20)
            data = r.json()
        except requests.RequestException as e:
            if intento == retries:
                raise
            time.sleep(1.5 * intento)
            continue

        status = data.get("status")
        if status == "OK":
            leg = data["routes"][0]["legs"][0]
            dist = leg["distance"]["value"]      # metros
            secs = leg["duration"]["value"]      # segundos
            # Resumen de lineas de transporte (si aplica)
            resumen = ""
            if mode == "transit":
                pasos = []
                for step in leg["steps"]:
                    td = step.get("transit_details")
                    if td:
                        linea = td["line"].get("short_name") or td["line"].get("name", "")
                        pasos.append(linea)
                resumen = " + ".join(pasos) if pasos else "a pie"
            return dist, secs, resumen

        if status in ("OVER_QUERY_LIMIT", "UNKNOWN_ERROR") and intento < retries:
            time.sleep(2.0 * intento)
            continue

        raise RuntimeError(f"Directions API status={status} :: {data.get('error_message','')}")

    raise RuntimeError("Sin respuesta valida de la API")


def fmt_min(secs):
    return secs / 60.0


def parse_salida(texto):
    if not texto:
        return time.time()  # ahora
    dt = datetime.strptime(texto, "%Y-%m-%d %H:%M")
    return dt.timestamp()


def main():
    ap = argparse.ArgumentParser(description="Analisis Ruta 1 con Google Directions API")
    ap.add_argument("--csv", help="Ruta del CSV de salida (opcional)")
    ap.add_argument("--salida", help='Hora de salida para transit, formato "YYYY-MM-DD HH:MM"')
    ap.add_argument("--key", help="Clave de Google Maps (sobrescribe la variable de entorno)")
    ap.add_argument("--sin-ferry", action="store_true",
                    help="Excluir el ferry a la Estatua de la Libertad / Ellis Island")
    args = ap.parse_args()
    incluir_ferry = not args.sin_ferry

    global API_KEY
    API_KEY = args.key or API_KEY
    if not API_KEY:
        sys.exit("Falta la clave. Usa --key o define la variable de entorno GOOGLE_MAPS_API_KEY.")

    dep_ts = parse_salida(args.salida)
    filas = []  # (segmento, modo, metros, segundos, detalle)

    print(f"\n{'SEGMENTO':<50} {'MODO':<8} {'DIST':>8} {'TIEMPO':>8}  DETALLE")
    print("-" * 100)

    # ---- 1) IDA: hotel -> Punto 1 (transit) ----
    d, s, det = directions(HOTEL, PUNTOS[0][1], "transit", dep_ts)
    filas.append(("IDA: 333 York St -> Punto 1", "transit", d, s, det))
    print(f"{'IDA: 333 York St -> Punto 1':<50} {'transit':<8} {d/1000:>6.2f}km {fmt_min(s):>6.1f}m  {det}")

    # ---- 2) RUTA INTERNA: 31 puntos a pie ----
    for i in range(1, len(PUNTOS)):
        o_name, o_loc = PUNTOS[i - 1]
        d_name, d_loc = PUNTOS[i]
        dist, secs, _ = directions(o_loc, d_loc, "walking")
        seg = f"{o_name.split('.')[0]} -> {d_name.split('.')[0]} ({d_name.split('. ',1)[-1][:22]})"
        filas.append((seg, "walking", dist, secs, ""))
        print(f"{seg:<50} {'walking':<8} {dist/1000:>6.2f}km {fmt_min(secs):>6.1f}m")
        time.sleep(0.05)  # cortesia con la API

        # Insertar el ferry al llegar al punto indicado (Castle Clinton = Punto 5)
        if incluir_ferry and (i + 1) == FERRY_ESTATUA["insertar_tras_punto"]:
            print(f"  {'--- FERRY Estatua de la Libertad + Ellis Island (sale de Battery Park) ---':<70}")
            for paso, minutos in FERRY_ESTATUA["pasos"]:
                filas.append((f"FERRY: {paso}", "ferry", 0, minutos * 60, ""))
                print(f"    {paso:<48} {'ferry':<8} {'--':>6}   {minutos:>5.1f}m")

    # ---- 3) VUELTA: Punto 31 -> hotel (transit) ----
    # Para transit de vuelta usamos "ahora + duracion del dia" no es trivial;
    # se calcula con la misma hora de salida (sirve de referencia).
    d, s, det = directions(PUNTOS[-1][1], HOTEL, "transit", dep_ts)
    filas.append(("VUELTA: Punto 31 -> 333 York St", "transit", d, s, det))
    print(f"{'VUELTA: Punto 31 -> 333 York St':<50} {'transit':<8} {d/1000:>6.2f}km {fmt_min(s):>6.1f}m  {det}")

    # ---- Totales ----
    print("-" * 100)
    tot_d = sum(f[2] for f in filas)
    tot_s = sum(f[3] for f in filas)
    walk_d = sum(f[2] for f in filas if f[1] == "walking")
    walk_s = sum(f[3] for f in filas if f[1] == "walking")
    tr_d = sum(f[2] for f in filas if f[1] == "transit")
    tr_s = sum(f[3] for f in filas if f[1] == "transit")
    fe_s = sum(f[3] for f in filas if f[1] == "ferry")

    print(f"\n  A PIE (Puntos 1->31)      : {walk_d/1000:6.2f} km   {walk_s/60:6.1f} min")
    print(f"  TRANSIT (ida+vuelta)      : {tr_d/1000:6.2f} km   {tr_s/60:6.1f} min")
    if fe_s:
        print(f"  FERRY Estatua+Ellis Island:    --      {fe_s/60:6.1f} min  ({int(fe_s//3600)}h {int((fe_s%3600)//60)}min)")
    print(f"  ---------------------------------------------------------")
    print(f"  TOTAL PUERTA A PUERTA     : {tot_d/1000:6.2f} km   "
          f"{int(tot_s//3600)}h {int((tot_s%3600)//60)}min  (desplazamiento + ferry)")

    if args.csv:
        with open(args.csv, "w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh)
            w.writerow(["segmento", "modo", "metros", "km", "segundos", "minutos", "detalle"])
            for seg, modo, m, s, det in filas:
                w.writerow([seg, modo, m, round(m/1000, 3), s, round(s/60, 1), det])
        print(f"\n  CSV guardado en: {args.csv}")


if __name__ == "__main__":
    main()
