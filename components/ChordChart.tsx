import type { Song } from "@/data/songs";

export default function ChordChart({
  chart,
}: {
  chart: NonNullable<Song["chordChart"]>;
}) {
  return (
    <div className="space-y-4">
      {chart.imageUrl ? (
        <div className="overflow-hidden rounded-xl border border-edge bg-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chart.imageUrl}
            alt="手書きコード譜"
            className="w-full"
          />
        </div>
      ) : null}

      <div className="overflow-x-auto rounded-xl border border-edge bg-card p-5">
        <div className="space-y-4 font-mono text-sm">
          {chart.sections.map((section, i) => (
            <div key={i}>
              <span className="text-gold">[{section.name}]</span>
              <pre className="mt-1 whitespace-pre leading-relaxed text-neutral-300">{section.bars}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
