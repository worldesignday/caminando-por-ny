import type { Itinerary } from "@/types/itinerary";
import dia1 from "./dia-1";
import dia2 from "./dia-2";
import { resourceFor } from "./resources";

/** Inyecta los enlaces de recursos (español) en cada parada por su título. */
function enrich(it: Itinerary): Itinerary {
  return {
    ...it,
    versions: it.versions.map((v) => ({
      ...v,
      groups: v.groups.map((g) => ({
        ...g,
        items: g.items.map((item) => {
          const r = resourceFor(it.slug, item.title);
          return r ? { ...item, resource: r } : item;
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
