import type { TimelineItem } from "@/types/itinerary";
import { nodeClass, rowClass, nodeInner } from "./nodeStyles";

export function TimelineRow({ item }: { item: TimelineItem }) {
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
      </div>
    </li>
  );
}
