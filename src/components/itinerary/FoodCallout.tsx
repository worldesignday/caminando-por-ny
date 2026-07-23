import type { Recommendation } from "@/types/itinerary";

export function FoodCallout({ rec }: { rec: Recommendation }) {
  return (
    <div className="callout">
      <h3>{rec.title}</h3>
      <p>{rec.intro}</p>
      <ul>
        {rec.items.map((r, i) => (
          <li key={i}>
            <b>{r.name}</b> — <span>{r.detail}</span>
          </li>
        ))}
      </ul>
      {rec.note && <p style={{ margin: "11px 0 0" }}>{rec.note}</p>}
    </div>
  );
}
