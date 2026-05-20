interface LoomEmbedProps {
  loomId: string;
  title?: string;
}

export default function LoomEmbed({ loomId, title }: LoomEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-edge bg-card">
      <iframe
        src={`https://www.loom.com/embed/${loomId}`}
        title={title ?? "Loom video"}
        className="h-full w-full"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}
