import type { Resource, TimelineItem } from "@/types/itinerary";
import { nodeClass, rowClass, nodeInner } from "./nodeStyles";

function ctaLabel(r: Resource): { ico: string; text: string } {
  if (r.label) return { ico: r.kind === "video" ? "▶" : "↗", text: r.label };
  if (r.kind === "video") return { ico: "▶", text: "Ver vídeo" };
  if (r.kind === "blog") return { ico: "↗", text: "Leer más" };
  return { ico: "↗", text: "Saber más" };
}

export function TimelineRow({ item }: { item: TimelineItem }) {
  const cta = item.resource ? ctaLabel(item.resource) : null;
  return (
    <li className={rowClass(item.kind)}>
      <div className={item.big ? "time big" : "time"}>{item.time}</div>
      <div className="rail">
        <div className={nodeClass(item.kind)}>{nodeInner(item)}</div>
      </div>
      <div className={item.light ? "card light" : "card"}>
        <div className="ttl">
          {item.title}
          {item.mapNumber && <span className="mapn">#{item.mapNumber}</span>}
        </div>
        {item.subtitle && <div className="sub">{item.subtitle}</div>}
        {item.duration && <div className="dur">{item.duration}</div>}
        {item.resource && cta && (
          <a
            className="cta"
            href={item.resource.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico" aria-hidden>
              {cta.ico}
            </span>
            {cta.text} en español
          </a>
        )}
      </div>
    </li>
  );
}
