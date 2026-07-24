"use client";

import { useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Marker,
  useMap,
} from "@vis.gl/react-google-maps";
import type { TimelineItem } from "@/types/itinerary";
import { routeFor } from "@/data/routes";

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

export type MapStop = TimelineItem & { coords: [number, number] };

function pinColor(kind: TimelineItem["kind"]): string {
  if (kind === "food") return "#5E7C00";
  if (kind === "island") return "#143C34";
  return "#1C4B42";
}

/** Dibuja la ruta (real o líneas rectas) y encaja el mapa a las paradas. */
function RouteLayer({
  stops,
  slug,
  versionId,
}: {
  stops: MapStop[];
  slug: string;
  versionId: string;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || !stops.length) return;

    const bounds = new google.maps.LatLngBounds();
    stops.forEach((s) => bounds.extend({ lng: s.coords[0], lat: s.coords[1] }));
    map.fitBounds(bounds, 48);

    const real = routeFor(slug, versionId); // [lng,lat][] o undefined
    const source = real ?? stops.map((s) => s.coords);
    const path = source.map(([lng, lat]) => ({ lat, lng }));

    const line = new google.maps.Polyline({
      path,
      geodesic: false,
      strokeColor: "#1C4B42",
      strokeOpacity: real ? 0.95 : 0.55,
      strokeWeight: 4,
      map,
    });
    return () => line.setMap(null);
  }, [map, stops, slug, versionId]);

  return null;
}

export function RouteMap({
  stops,
  slug,
  versionId,
}: {
  stops: MapStop[];
  slug: string;
  versionId: string;
}) {
  if (!KEY) {
    return (
      <div className="map-missing">
        <p>
          El mapa necesita la variable <b>NEXT_PUBLIC_GOOGLE_MAPS_KEY</b>{" "}
          configurada en el entorno.
        </p>
      </div>
    );
  }

  const center = stops.length
    ? { lat: stops[0].coords[1], lng: stops[0].coords[0] }
    : { lat: 40.706, lng: -74.011 };

  return (
    <APIProvider apiKey={KEY}>
      <Map
        mapId={MAP_ID}
        defaultCenter={center}
        defaultZoom={14}
        gestureHandling="greedy"
        disableDefaultUI
        zoomControl
        className="map-canvas"
      >
        {stops.map((s, i) =>
          MAP_ID ? (
            <AdvancedMarker
              key={`${s.title}-${i}`}
              position={{ lat: s.coords[1], lng: s.coords[0] }}
              title={`${s.time} · ${s.title}`}
            >
              <div
                className={
                  "map-pin" +
                  (s.kind === "food"
                    ? " food"
                    : s.kind === "island"
                      ? " island"
                      : "")
                }
              >
                {s.mapNumber ?? "•"}
              </div>
            </AdvancedMarker>
          ) : (
            <Marker
              key={`${s.title}-${i}`}
              position={{ lat: s.coords[1], lng: s.coords[0] }}
              title={`${s.time} · ${s.title}`}
              label={{
                text: s.mapNumber ?? "•",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "700",
              }}
              icon={{
                path: 0 as google.maps.SymbolPath, // CIRCLE
                scale: 11,
                fillColor: pinColor(s.kind),
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              }}
            />
          ),
        )}
        <RouteLayer stops={stops} slug={slug} versionId={versionId} />
      </Map>
    </APIProvider>
  );
}
