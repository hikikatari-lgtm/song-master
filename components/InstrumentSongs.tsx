"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getInstrument,
  getSongsByInstrument,
  levelLabels,
  type Instrument,
} from "@/data/songs";
import CategoryFilter from "./CategoryFilter";
import SongCard from "./SongCard";

const CATEGORIES = ["All", "Jazz", "Pop", "Rock", "初心者", "中級者", "上級者"];
const GENRES = ["Jazz", "Pop", "Rock"];

export default function InstrumentSongs({
  instrument,
}: {
  instrument: Instrument;
}) {
  const info = getInstrument(instrument)!;
  const songs = useMemo(
    () => getSongsByInstrument(instrument),
    [instrument],
  );
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    if (selected === "All") return songs;
    if (GENRES.includes(selected)) {
      return songs.filter((song) => song.genre === selected);
    }
    return songs.filter((song) => levelLabels[song.level] === selected);
  }, [songs, selected]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-gold"
      >
        ← トップに戻る
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold sm:text-4xl">
          <span className="mr-2">{info.emoji}</span>
          {info.name}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {songs.length} {songs.length === 1 ? "song" : "songs"}
        </p>
      </header>

      <div className="mt-8">
        <CategoryFilter
          categories={CATEGORIES}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 rounded-xl border border-dashed border-edge bg-card px-6 py-12 text-center text-muted">
          {songs.length === 0
            ? "この楽器の曲はまだ登録されていません。"
            : "該当する曲が見つかりませんでした。"}
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((song) => (
            <SongCard key={song.slug} song={song} />
          ))}
        </div>
      )}
    </main>
  );
}
