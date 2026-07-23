import type { Itinerary } from "@/types/itinerary";
import dia1 from "./dia-1";
import dia2 from "./dia-2";

/** Todos los itinerarios, en orden de la portada. */
export const itineraries: Itinerary[] = [dia1, dia2].sort(
  (a, b) => a.card.order - b.card.order,
);

export function getAllSlugs(): string[] {
  return itineraries.map((it) => it.slug);
}

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}
