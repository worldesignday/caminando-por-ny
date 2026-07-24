/**
 * Coordenadas de las paradas, por día y por TÍTULO exacto. Formato [lng, lat].
 * Día 1: valores reales del script scripts/directions/compute.py.
 * Día 2: estimadas (~1 manzana) en el clúster WTC + Civic Center.
 * Nota: "Estatua de la Libertad" usa el mirador de Battery Park (punto peatonal);
 * "Ellis Island" no tiene punto a pie, por eso no lleva coordenada (no se marca).
 */
export const coordinates: Record<string, Record<string, [number, number]>> = {
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
    "Brooklyn (DUMBO)": [-73.9903, 40.7025],
  },
  "dia-2": {
    "Fulton Center": [-74.0089, 40.7099],
    "St. Paul's Chapel": [-74.0092, 40.7113],
    "The Oculus": [-74.0113, 40.7115],
    "Century 21": [-74.0107, 40.7101],
    Eataly: [-74.0113, 40.7098],
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
};

export function coordFor(slug: string, title: string): [number, number] | undefined {
  return coordinates[slug]?.[title];
}
