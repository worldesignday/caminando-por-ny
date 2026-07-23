"use client";

import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Itinerary } from "@/types/itinerary";
import type { MapStop } from "@/components/map/RouteMap";
import { VersionBody } from "./VersionBody";
import { MapModal } from "@/components/map/MapModal";

// El SDK de Google Maps solo se carga en cliente y al abrir el modal.
const RouteMap = dynamic(
  () => import("@/components/map/RouteMap").then((m) => m.RouteMap),
  { ssr: false, loading: () => <div className="map-loading">Cargando mapa…</div> },
);

export function VersionedItinerary({ itinerary }: { itinerary: Itinerary }) {
  const { versions, defaultVersion } = itinerary;
  const initial =
    versions.find((v) => v.id === defaultVersion)?.id ?? versions[0].id;
  const [current, setCurrent] = useState(initial);
  const [mapOpen, setMapOpen] = useState(false);
  const version = versions.find((v) => v.id === current) ?? versions[0];
  const single = versions.length < 2;

  const mapStops = useMemo(
    () =>
      version.groups
        .flatMap((g) => g.items)
        .filter((i): i is MapStop => Array.isArray(i.coords)),
    [version],
  );

  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
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
        <div className="toggle" role="group" aria-label="Elegir versión del día">
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

      {mapStops.length > 0 && (
        <div className="viewswitch" role="group" aria-label="Modo de visualización">
          <button aria-pressed={!mapOpen} onClick={() => setMapOpen(false)}>
            Lista
          </button>
          <button aria-pressed={mapOpen} onClick={() => setMapOpen(true)}>
            🗺 Mapa
          </button>
        </div>
      )}

      <div ref={scope}>
        <VersionBody version={version} />
      </div>

      {mapOpen && (
        <MapModal
          title={`Mapa · ${itinerary.meta.titleTop} ${itinerary.meta.titleBottom}`}
          onClose={() => setMapOpen(false)}
        >
          <RouteMap stops={mapStops} slug={itinerary.slug} versionId={current} />
        </MapModal>
      )}
    </>
  );
}
