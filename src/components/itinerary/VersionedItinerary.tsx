"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return; // sin animación si el usuario lo pide
      }
      const targets = scope.current?.querySelectorAll(
        ".stat, .sectlabel, .row, .callout, .chips, .note",
      );
      if (!targets?.length) return;
      gsap.from(targets, {
        opacity: 0,
        y: 10,
        duration: 0.34,
        ease: "power2.out",
        stagger: 0.02,
      });
    },
    { scope, dependencies: [current] },
  );

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
      <div ref={scope}>
        <VersionBody version={version} />
      </div>
    </>
  );
}
