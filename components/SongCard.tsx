import Link from "next/link";
import { type Song, levelLabels } from "@/data/songs";

const levelStyles: Record<Song["level"], string> = {
  beginner: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  intermediate: "border-gold/40 bg-gold/10 text-gold",
  advanced: "border-rose-500/30 bg-rose-500/10 text-rose-300",
};

export default function SongCard({ song }: { song: Song }) {
  return (
    <Link
      href={`/${song.instrument}/${song.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-edge bg-card p-5 transition-colors hover:border-gold/60"
    >
      <div>
        <h3 className="text-lg font-semibold text-gold transition-colors group-hover:text-gold">
          {song.title}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{song.artist}</p>
      </div>

      <div className="flex gap-4 font-mono text-sm text-neutral-300">
        <span>
          <span className="text-muted">Key</span> {song.key}
        </span>
        <span>
          <span className="text-muted">BPM</span> {song.bpm}
        </span>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        <span className="rounded-full border border-edge bg-neutral-800/60 px-2.5 py-0.5 text-xs text-neutral-300">
          {song.genre}
        </span>
        <span
          className={
            "rounded-full border px-2.5 py-0.5 text-xs " +
            levelStyles[song.level]
          }
        >
          {levelLabels[song.level]}
        </span>
      </div>
    </Link>
  );
}
