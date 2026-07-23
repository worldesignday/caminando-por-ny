import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getItinerary } from "@/data";
import { DayHeader } from "@/components/itinerary/DayHeader";
import { VersionedItinerary } from "@/components/itinerary/VersionedItinerary";
import { InfoGrid } from "@/components/itinerary/InfoGrid";

export function generateStaticParams() {
  return getAllSlugs().map((dia) => ({ dia }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dia: string }>;
}): Promise<Metadata> {
  const { dia } = await params;
  const it = getItinerary(dia);
  if (!it) return {};
  const title = `${it.meta.titleTop} · ${it.meta.titleBottom} — Itinerario NY`;
  const description = it.card.desc;
  return { title, description, openGraph: { title, description } };
}

export default async function DiaPage({
  params,
}: {
  params: Promise<{ dia: string }>;
}) {
  const { dia } = await params;
  const it = getItinerary(dia);
  if (!it) notFound();

  return (
    <div className="wrap">
      <DayHeader meta={it.meta} />
      <VersionedItinerary itinerary={it} />
      <InfoGrid meta={it.meta} />
    </div>
  );
}
