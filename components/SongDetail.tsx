import Link from "next/link";
import { type Song, getInstrument, levelLabels } from "@/data/songs";
import LoomEmbed from "./LoomEmbed";
import ChordChart from "./ChordChart";
import VideoAccordion from "./VideoAccordion";

export default function SongDetail({ song }: { song: Song }) {
  const info = getInstrument(song.instrument)!;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href={`/${song.instrument}`}
        className="text-sm text-muted transition-colors hover:text-gold"
      >
        ← {info.emoji} {info.name} の一覧に戻る
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold sm:text-4xl">{song.title}</h1>
        <p className="mt-1 text-lg text-muted">{song.artist}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-edge bg-card px-3 py-1 font-mono">
            <span className="text-muted">Key</span> {song.key}
          </span>
          <span className="rounded-full border border-edge bg-card px-3 py-1 font-mono">
            <span className="text-muted">BPM</span> {song.bpm}
          </span>
          <span className="rounded-full border border-edge bg-card px-3 py-1">
            {song.genre}
          </span>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-gold">
            {levelLabels[song.level]}
          </span>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gold">📖 この曲について</h2>
        <p className="mt-3 leading-relaxed text-neutral-300">
          {song.background}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-xl font-semibold text-gold">🎬 演奏動画</h2>
        {song.loomVideos && song.loomVideos.length > 0 ? (
          <VideoAccordion videos={song.loomVideos} defaultOpenIndex={0} />
        ) : (
          <LoomEmbed loomId={song.loomId} title={song.title} />
        )}
      </section>

      {song.chordChart ? (
        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold text-gold">🎼 コード譜</h2>
          <ChordChart chart={song.chordChart} />
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gold">💡 ポイント</h2>
        <p className="mt-3 leading-relaxed text-neutral-300">{song.tips}</p>
      </section>

      {song.studentVideos && song.studentVideos.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold text-gold">🎬 生徒演奏</h2>
          <VideoAccordion videos={song.studentVideos} />
        </section>
      ) : null}

      <div className="mt-12 border-t border-edge pt-6">
        <Link
          href={`/${song.instrument}`}
          className="text-sm text-muted transition-colors hover:text-gold"
        >
          ← {info.emoji} {info.name} の一覧に戻る
        </Link>
      </div>
    </main>
  );
}
