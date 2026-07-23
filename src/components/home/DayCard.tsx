import Link from "next/link";
import type { Itinerary } from "@/types/itinerary";

function kicker(it: Itinerary): string {
  const dateShort = it.meta.date.replace(/\s+\d{4}$/, ""); // quita el año
  return `Día ${it.card.order} · ${dateShort}`;
}

export function DayCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <Link className="daycard" href={`/dias/${itinerary.slug}`}>
      <span className="status on">Listo</span>
      <span className="kicker">{kicker(itinerary)}</span>
      <h2>{itinerary.card.title}</h2>
      <p className="desc">{itinerary.card.desc}</p>
    </Link>
  );
}
