import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SongDetail from "@/components/SongDetail";
import { getSong, getSongsByInstrument } from "@/data/songs";

const INSTRUMENT = "electric-guitar" as const;

export function generateStaticParams() {
  return getSongsByInstrument(INSTRUMENT).map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(INSTRUMENT, slug);
  return {
    title: song ? `${song.title} | Song Master` : "Song Master",
  };
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const song = getSong(INSTRUMENT, slug);
  if (!song) notFound();
  return <SongDetail song={song} />;
}
