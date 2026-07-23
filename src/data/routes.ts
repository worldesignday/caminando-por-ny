/**
 * Polilíneas del recorrido REAL a pie, por día y versión. Formato [lng, lat][].
 * Se generan OFFLINE con `scripts/directions/build_routes.py` (Directions API, una vez)
 * y se pegan aquí. Mientras esté vacío, el mapa dibuja líneas rectas entre paradas.
 *
 * Ejemplo tras generarlas:
 *   export const routes = { "dia-1": { con: [[-74.01,40.70], ...], sin: [...] }, ... };
 */
export const routes: Record<string, Record<string, [number, number][]>> = {
  // se rellenará con la salida de build_routes.py
};

export function routeFor(
  slug: string,
  versionId: string,
): [number, number][] | undefined {
  const r = routes[slug]?.[versionId];
  return r && r.length ? r : undefined;
}
