import Link from "next/link";
import { getSongsByInstrument, instruments } from "@/data/songs";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gold">Song</span> Master
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          楽器を選んで、動画と解説でレパートリーを増やそう。
        </p>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {instruments.map((instrument) => {
          const count = getSongsByInstrument(instrument.slug).length;
          return (
            <Link
              key={instrument.slug}
              href={`/${instrument.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-edge bg-card p-6 transition-colors hover:border-gold/60"
            >
              <span className="text-5xl">{instrument.emoji}</span>
              <span className="flex flex-col">
                <span className="text-xl font-semibold transition-colors group-hover:text-gold">
                  {instrument.name}
                </span>
                <span className="mt-0.5 text-sm text-muted">
                  {count} {count === 1 ? "song" : "songs"}
                </span>
              </span>
              <span className="ml-auto text-2xl text-edge transition-colors group-hover:text-gold">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
