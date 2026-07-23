import Link from "next/link";
import type { DayMeta } from "@/types/itinerary";

export function DayHeader({ meta }: { meta: DayMeta }) {
  return (
    <header>
      <Link className="topnav" href="/">
        ← Todos los días
      </Link>
      <p className="eyebrow">{meta.eyebrow}</p>
      <h1>
        {meta.titleTop}
        <br />
        <span className="liberty">{meta.titleBottom}</span>
      </h1>
      <div className="datebar">
        <span>
          <strong>{meta.date}</strong>
        </span>
        <span>
          Alojamiento: <strong>{meta.lodging}</strong>
        </span>
        <span>{meta.transport}</span>
      </div>
    </header>
  );
}
