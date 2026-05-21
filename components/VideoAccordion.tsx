"use client";

import { useState } from "react";
import LoomEmbed from "./LoomEmbed";

interface Video {
  title: string;
  loomId: string;
}

export default function VideoAccordion({
  videos,
  defaultOpenIndex = null,
}: {
  videos: Video[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {videos.map((video, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-edge bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:text-gold"
            >
              <span className="text-xl">▶</span>
              <span className="font-medium">{video.title}</span>
              <span className="ml-auto text-muted">
                {isOpen ? "閉じる −" : "見る +"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-edge p-4">
                <LoomEmbed loomId={video.loomId} title={video.title} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
