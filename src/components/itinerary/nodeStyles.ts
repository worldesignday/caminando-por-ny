import type { NodeKind, TimelineItem } from "@/types/itinerary";

/** Clase del nodo (punto) según el tipo. */
export function nodeClass(kind: NodeKind): string {
  switch (kind) {
    case "island":
      return "node island";
    case "food":
      return "node food";
    case "transit":
      return "node sm transit";
    case "arrive":
      return "node sm";
    case "end":
      return "node end";
    case "ferryseg":
      return "node ferry";
    default:
      return "node";
  }
}

/** Clase de la fila (define el estilo de la línea/raíl). */
export function rowClass(kind: NodeKind): string {
  if (kind === "transit" || kind === "arrive" || kind === "end") return "row dash";
  if (kind === "ferryseg") return "row ferryseg";
  if (kind === "island") return "row island ferryseg";
  if (kind === "food") return "row food";
  if (kind === "stop") return "row stop";
  return "row";
}

/** Contenido interno del nodo (número de parada o glifo). */
export function nodeInner(item: TimelineItem): string {
  if (item.mapNumber) return item.mapNumber;
  if (item.kind === "island") return "⚓";
  if (item.kind === "ferryseg") return "";
  if (item.kind === "food") return "•";
  if (item.kind === "end") return "★";
  return "";
}
