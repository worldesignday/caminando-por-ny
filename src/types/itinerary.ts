/**
 * Tipos del dominio de itinerarios.
 * Un `Itinerary` = un día, con una o más `versions` (p. ej. con/sin ferry).
 */

export type NodeKind =
  | "stop"
  | "island"
  | "food"
  | "transit"
  | "ferryseg"
  | "arrive"
  | "end";

export type Category =
  | "cultura"
  | "gastronomia"
  | "vistas"
  | "compras"
  | "historia"
  | "naturaleza"
  | "transporte";

export interface TimelineItem {
  /** Hora de inicio, formato "HH:MM". */
  time: string;
  kind: NodeKind;
  title: string;
  /** Número de parada del folleto original, p. ej. "13" o "27-28". */
  mapNumber?: string;
  subtitle?: string;
  /** Duración legible, p. ej. "20 min". */
  duration?: string;
  /** Duración en minutos (para filtros "según tiempo disponible"). [Fase 3] */
  durationMin?: number;
  /** Categoría para filtros. [Fase 3] */
  category?: Category;
  /** Coordenadas [lng, lat] para el mapa. [Fase 3] */
  coords?: [number, number];
  /** Fila atenuada (tramos de transporte/ferry). */
  light?: boolean;
  /** Hora destacada (fin del día). */
  big?: boolean;
}

export interface TimelineGroup {
  label: string;
  /** Si es true, tras el grupo se muestra la recomendación de comida. */
  food?: boolean;
  items: TimelineItem[];
}

export interface RecItem {
  name: string;
  detail: string;
}

export interface Recommendation {
  title: string;
  intro: string;
  items: RecItem[];
  note?: string;
}

export interface Stat {
  key: string;
  value: string;
  sub?: string;
}

export interface DayVersion {
  /** Identificador estable, p. ej. "con" | "sin". */
  id: string;
  /** Etiqueta del toggle, p. ej. "🗽 Con ferry". */
  label: string;
  stats: Stat[];
  groups: TimelineGroup[];
  /** Números de parada del mapa que se omiten en esta versión. */
  omit: string[];
  /** Texto cuando no se omite ninguna parada. */
  omitEmptyNote?: string;
  recs?: Recommendation;
}

export interface InfoBlock {
  heading: string;
  /** Párrafos; pueden contener HTML mínimo (<b>, <br>). */
  paragraphs: string[];
}

export interface DayMeta {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  /** Fecha legible, p. ej. "Martes 6 oct 2026". */
  date: string;
  /** Fecha ISO, p. ej. "2026-10-06". */
  dateISO: string;
  lodging: string;
  transport: string;
  info: InfoBlock[];
  /** Pie de página; puede contener HTML mínimo (<br>). */
  footer: string;
}

/** Datos para la tarjeta del día en la portada. */
export interface DayCardInfo {
  order: number;
  title: string;
  desc: string;
}

export interface Itinerary {
  slug: string;
  city: string;
  card: DayCardInfo;
  meta: DayMeta;
  defaultVersion: string;
  versions: DayVersion[];
}
