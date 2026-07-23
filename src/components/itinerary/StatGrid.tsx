import type { Stat } from "@/types/itinerary";

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="k">{s.key}</div>
          <div className="v">
            {s.value}
            {s.sub && <small>↓ {s.sub}</small>}
          </div>
        </div>
      ))}
    </div>
  );
}
