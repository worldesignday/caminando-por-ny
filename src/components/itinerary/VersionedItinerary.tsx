"use client";

import { useState } from "react";
import type { Itinerary } from "@/types/itinerary";
import { VersionBody } from "./VersionBody";

/** Toggle de versiones (con/sin) + cuerpo de la versión seleccionada. */
export function VersionedItinerary({ itinerary }: { itinerary: Itinerary }) {
  const { versions, defaultVersion } = itinerary;
  const initial =
    versions.find((v) => v.id === defaultVersion)?.id ?? versions[0].id;
  const [current, setCurrent] = useState(initial);
  const version = versions.find((v) => v.id === current) ?? versions[0];
  const single = versions.length < 2;

  return (
    <>
      {!single && (
        <div
          className="toggle"
          role="group"
          aria-label="Elegir versión del día"
        >
          {versions.map((v) => (
            <button
              key={v.id}
              data-mode={v.id}
              aria-pressed={v.id === current}
              onClick={() => setCurrent(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
      <VersionBody version={version} />
    </>
  );
}
