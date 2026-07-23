#!/usr/bin/env python3
"""
Genera src/data/routes.ts con la POLILÍNEA REAL a pie de cada día y versión,
usando Google Directions API. Se ejecuta OFFLINE una sola vez.

Uso:
    export GOOGLE_MAPS_API_KEY="TU_CLAVE_DIRECTIONS"
    python3 scripts/directions/build_routes.py
    # o:  python3 scripts/directions/build_routes.py --key TU_CLAVE

La clave es la de Directions (servidor), NO la del cliente del mapa.
Al terminar, revisa/commitea src/data/routes.ts (el mapa dejará de usar líneas rectas).
"""

import os
import sys
import time
import json
import argparse
import urllib.parse
import urllib.request

DIRECTIONS_URL = "https://maps.googleapis.com/maps/api/directions/json"
OUT = os.path.join(os.path.dirname(__file__), "..", "..", "src", "data", "routes.ts")

# Coordenadas [lng, lat] (deben coincidir con src/data/coordinates.ts)
COORDS = {
    "dia-1": {
        "Staten Island Ferry": [-74.0134, 40.7011],
        "St. Elizabeth Ann Seton Shrine": [-74.0138, 40.7024],
        "Carrusel SeaGlass": [-74.0166, 40.7036],
        "East Coast Memorial": [-74.0159, 40.7045],
        "Castle Clinton": [-74.017, 40.7033],
        "Estatua de la Libertad": [-74.0175, 40.7026],
        "American Merchant Mariners' Memorial": [-74.0181, 40.704],
        "The Battery Urban Farm": [-74.0155, 40.7038],
        "Museum of Jewish Heritage": [-74.0187, 40.7061],
        "Oasis Park": [-74.0182, 40.7048],
        "Skyscraper Museum": [-74.0189, 40.7057],
        "Museo de los Indios Americanos": [-74.0136, 40.7042],
        "Bowling Green": [-74.0138, 40.7047],
        "Toro de Wall Street": [-74.0134, 40.7056],
        "Trinity Church": [-74.0125, 40.7081],
        "Bolsa de Nueva York (NYSE)": [-74.0113, 40.7069],
        "Federal Hall": [-74.0102, 40.7074],
        "La Niña sin Miedo": [-74.0115, 40.707],
        "Delmonico's": [-74.01, 40.7047],
        "Stone Street": [-74.011, 40.7042],
        "Fraunces Tavern": [-74.0113, 40.7035],
        "Battery Maritime Building": [-74.0117, 40.7014],
        "Helipuerto": [-74.009, 40.7013],
        "Elevated Acre": [-74.0088, 40.7027],
        "Picnic con vistas": [-74.0078, 40.7035],
        "Pier 15": [-74.00275, 40.7053],
        "South Street Seaport": [-74.0025, 40.7063],
        "Seaport District": [-74.0033, 40.7069],
        "Cannon's Walk": [-74.0038, 40.7068],
        "Memorial Titanic": [-74.0044, 40.7066],
        "Puente de Brooklyn": [-74.0056, 40.7123],
    },
    "dia-2": {
        "Fulton Center": [-74.0089, 40.7099],
        "St. Paul's Chapel": [-74.0092, 40.7113],
        "The Oculus": [-74.0113, 40.7115],
        "Century 21": [-74.0107, 40.7101],
        "Eataly": [-74.0113, 40.7098],
        "FDNY Ten House": [-74.0122, 40.7099],
        "Liberty Park": [-74.0128, 40.7092],
        "Memorial 9/11": [-74.0134, 40.7115],
        "Museo 9/11": [-74.0134, 40.7115],
        "One World Trade Center": [-74.0134, 40.7127],
        "Brookfield Place": [-74.0152, 40.7145],
        "Muro de Berlín": [-74.0155, 40.716],
        "Irish Hunger Memorial": [-74.0165, 40.7155],
        "City Hall Park": [-74.0059, 40.7124],
        "City Hall": [-74.006, 40.7127],
        "Sugar House Prison Window": [-74.0035, 40.7143],
        "City Store": [-74.004, 40.7124],
        "Cementerio Africano": [-74.0043, 40.7146],
        "Foley Square": [-74.0027, 40.7141],
    },
}

# Orden de paradas por día/versión (mismo orden del itinerario; solo puntos a pie).
ORDER = {
    "dia-1": {
        "con": ["Estatua de la Libertad", "Bowling Green", "Toro de Wall Street",
                "Trinity Church", "Bolsa de Nueva York (NYSE)", "Federal Hall",
                "La Niña sin Miedo", "Stone Street", "Fraunces Tavern",
                "South Street Seaport", "Memorial Titanic", "Puente de Brooklyn"],
        "sin": ["Staten Island Ferry", "St. Elizabeth Ann Seton Shrine", "Carrusel SeaGlass",
                "East Coast Memorial", "Castle Clinton", "Estatua de la Libertad",
                "American Merchant Mariners' Memorial", "The Battery Urban Farm",
                "Museum of Jewish Heritage", "Oasis Park", "Skyscraper Museum",
                "Museo de los Indios Americanos", "Bowling Green", "Toro de Wall Street",
                "Trinity Church", "Bolsa de Nueva York (NYSE)", "Federal Hall",
                "La Niña sin Miedo", "Delmonico's", "Stone Street", "Fraunces Tavern",
                "Battery Maritime Building", "Helipuerto", "Elevated Acre",
                "Picnic con vistas", "Pier 15", "South Street Seaport", "Seaport District",
                "Cannon's Walk", "Memorial Titanic", "Puente de Brooklyn"],
    },
    "dia-2": {
        "con": ["Fulton Center", "St. Paul's Chapel", "The Oculus", "Century 21", "Eataly",
                "FDNY Ten House", "Liberty Park", "Memorial 9/11", "One World Trade Center",
                "Brookfield Place", "Muro de Berlín", "Irish Hunger Memorial", "Museo 9/11",
                "City Hall Park", "City Hall", "Sugar House Prison Window", "City Store",
                "Cementerio Africano", "Foley Square"],
        "sin": ["Fulton Center", "St. Paul's Chapel", "The Oculus", "Century 21", "Eataly",
                "FDNY Ten House", "Liberty Park", "Memorial 9/11", "One World Trade Center",
                "Brookfield Place", "Muro de Berlín", "Irish Hunger Memorial",
                "City Hall Park", "City Hall", "Sugar House Prison Window", "City Store",
                "Cementerio Africano", "Foley Square"],
    },
}


def decode_polyline(s):
    """Decodifica una polilínea de Google → lista de [lng, lat]."""
    points, index, lat, lng = [], 0, 0, 0
    while index < len(s):
        for is_lat in (True, False):
            shift = result = 0
            while True:
                b = ord(s[index]) - 63
                index += 1
                result |= (b & 0x1F) << shift
                shift += 5
                if b < 0x20:
                    break
            d = ~(result >> 1) if (result & 1) else (result >> 1)
            if is_lat:
                lat += d
            else:
                lng += d
        points.append([round(lng / 1e5, 5), round(lat / 1e5, 5)])
    return points


def walk_leg(api_key, a, b):
    """Polilínea a pie entre a=[lng,lat] y b=[lng,lat]."""
    params = {
        "origin": f"{a[1]},{a[0]}",
        "destination": f"{b[1]},{b[0]}",
        "mode": "walking",
        "key": api_key,
    }
    url = DIRECTIONS_URL + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(url, timeout=20) as r:
        data = json.load(r)
    if data.get("status") != "OK":
        raise RuntimeError(f"Directions {data.get('status')}: {data.get('error_message', '')}")
    return decode_polyline(data["routes"][0]["overview_polyline"]["points"])


def build_route(api_key, day, version):
    titles = [t for t in ORDER[day][version] if t in COORDS[day]]
    pts = [COORDS[day][t] for t in titles]
    line = []
    for i in range(len(pts) - 1):
        seg = walk_leg(api_key, pts[i], pts[i + 1])
        # evitar duplicar el punto de unión entre tramos
        line.extend(seg if i == 0 else seg[1:])
        time.sleep(0.05)
    return line


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--key", help="Clave de Directions API (o usa GOOGLE_MAPS_API_KEY)")
    args = ap.parse_args()
    api_key = args.key or os.environ.get("GOOGLE_MAPS_API_KEY", "")
    if not api_key:
        sys.exit("Falta la clave. Usa --key o define GOOGLE_MAPS_API_KEY.")

    out = {}
    for day in ("dia-1", "dia-2"):
        out[day] = {}
        for version in ("con", "sin"):
            print(f"Calculando {day} / {version} …")
            out[day][version] = build_route(api_key, day, version)
            print(f"  {len(out[day][version])} puntos")

    body = json.dumps(out, ensure_ascii=False, separators=(",", ":"))
    ts = (
        "// Generado por scripts/directions/build_routes.py — NO editar a mano.\n"
        "// Polilíneas del recorrido real a pie, por día y versión. Formato [lng, lat][].\n"
        f"export const routes: Record<string, Record<string, [number, number][]>> = {body};\n\n"
        "export function routeFor(\n"
        "  slug: string,\n"
        "  versionId: string,\n"
        "): [number, number][] | undefined {\n"
        "  const r = routes[slug]?.[versionId];\n"
        "  return r && r.length ? r : undefined;\n"
        "}\n"
    )
    path = os.path.abspath(OUT)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(ts)
    print(f"\n✓ Escrito {path}")
    print("Revisa el diff y haz commit; el mapa pasará a la ruta real a pie.")


if __name__ == "__main__":
    main()
