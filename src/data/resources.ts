import type { Resource } from "@/types/itinerary";

const W = "https://es.wikipedia.org/wiki/";

/**
 * Enlaces a contenido informativo en español, por día y por TÍTULO de parada.
 * Fuente base: Wikipedia en español (informativo, estable) + algún vídeo.
 * Solo se incluyen paradas con contenido fiable verificado; el resto no muestra CTA.
 * Para añadir/mejorar: agrega una entrada con el título exacto de la parada.
 */
export const resources: Record<string, Record<string, Resource>> = {
  "dia-1": {
    "Staten Island Ferry": { url: W + "Ferry_de_Staten_Island", kind: "wiki" },
    "Museo de los Indios Americanos": {
      url: W + "Museo_Nacional_de_los_Indios_Americanos",
      kind: "wiki",
    },
    "Toro de Wall Street": { url: W + "Toro_de_Wall_Street", kind: "wiki" },
    "Trinity Church": { url: W + "Iglesia_de_la_Trinidad_(Manhattan)", kind: "wiki" },
    "Bolsa de Nueva York (NYSE)": { url: W + "Bolsa_de_Nueva_York", kind: "wiki" },
    "Federal Hall": {
      url: W + "Primera_investidura_presidencial_de_George_Washington",
      kind: "wiki",
    },
    "Estatua de la Libertad": {
      url: "https://www.youtube.com/watch?v=2UeytXlOE1A",
      kind: "video",
    },
    "Ellis Island": {
      url: W + "Monumento_nacional_de_la_Estatua_de_la_Libertad,_Isla_Ellis_e_Isla_de_la_Libertad",
      kind: "wiki",
    },
    "Stone Street": { url: W + "Distrito_histórico_de_la_Calle_Stone", kind: "wiki" },
    "South Street Seaport": {
      url: W + "Distrito_histórico_de_South_Street_Seaport",
      kind: "wiki",
    },
    "Puente de Brooklyn": { url: W + "Puente_de_Brooklyn", kind: "wiki" },
  },
  "dia-2": {
    "St. Paul's Chapel": { url: W + "Capilla_de_San_Pablo_(Nueva_York)", kind: "wiki" },
    "The Oculus": { url: W + "World_Trade_Center_(estación_PATH)", kind: "wiki" },
    "Memorial 9/11": { url: W + "World_Trade_Center_Memorial", kind: "wiki" },
    "Museo 9/11": { url: W + "World_Trade_Center_Memorial", kind: "wiki" },
    "One World Trade Center": { url: W + "1_World_Trade_Center", kind: "wiki" },
    "Muro de Berlín": { url: W + "Muro_de_Berlín", kind: "wiki" },
    "City Hall": { url: W + "Ayuntamiento_de_Nueva_York", kind: "wiki" },
    "Cementerio Africano": {
      url: W + "Monumento_nacional_Cementerio_Africano",
      kind: "wiki",
    },
  },
};

export function resourceFor(slug: string, title: string): Resource | undefined {
  return resources[slug]?.[title];
}
