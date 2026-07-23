import { Fragment } from "react";
import type { DayVersion } from "@/types/itinerary";
import { StatGrid } from "./StatGrid";
import { TimelineRow } from "./TimelineRow";
import { FoodCallout } from "./FoodCallout";
import { OmitNote } from "./OmitNote";

/** Cuerpo de una versión del día: estadísticas + timeline + omitidos. */
export function VersionBody({ version }: { version: DayVersion }) {
  return (
    <>
      <StatGrid stats={version.stats} />
      {version.groups.map((g, gi) => (
        <Fragment key={gi}>
          <div className="sectlabel">{g.label}</div>
          <ul className="tl">
            {g.items.map((it, ii) => (
              <TimelineRow key={ii} item={it} />
            ))}
          </ul>
          {g.food && version.recs && <FoodCallout rec={version.recs} />}
        </Fragment>
      ))}
      <OmitNote omit={version.omit} emptyNote={version.omitEmptyNote} />
    </>
  );
}
