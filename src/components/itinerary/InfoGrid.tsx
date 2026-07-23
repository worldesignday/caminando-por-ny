import type { DayMeta } from "@/types/itinerary";

export function InfoGrid({ meta }: { meta: DayMeta }) {
  return (
    <>
      <div className="sectlabel" style={{ marginTop: 30 }}>
        {"Transporte & consejos"}
      </div>
      <div className="info">
        {meta.info.map((b, i) => (
          <div className="box" key={i}>
            <h4>{b.heading}</h4>
            {b.paragraphs.map((p, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        ))}
      </div>
      <footer dangerouslySetInnerHTML={{ __html: meta.footer }} />
    </>
  );
}
