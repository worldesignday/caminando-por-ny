import type { Itinerary } from "@/types/itinerary";
import dia1 from "./dia-1";
import dia2 from "./dia-2";
import { resourceFor } from "./resources";
import { coordFor } from "./coordinates";

/** Inyecta enlaces (español) y coordenadas en cada parada por su título. */
function enrich(it: Itinerary): Itinerary {
  return {
    ...it,
    versions: it.versions.map((v) => ({
      ...v,
      groups: v.groups.map((g) => ({
        ...g,
        items: g.items.map((item) => {
          const resource = resourceFor(it.slug, item.title);
          const coords = coordFor(it.slug, item.title);
          return { ...item, ...(resource && { resource }), ...(coords && { coords }) };
        }),
      })),
    })),
  };
}

/** Todos los itinerarios (con recursos inyectados), en orden de la portada. */
export const itineraries: Itinerary[] = [dia1, dia2]
  .map(enrich)
  .sort((a, b) => a.card.order - b.card.order);

export function getAllSlugs(): string[] {
  return itineraries.map((it) => it.slug);
}

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}
