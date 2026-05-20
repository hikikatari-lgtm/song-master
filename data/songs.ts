export interface Song {
  slug: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  genre: string; // "Jazz", "Pop", "Rock" etc
  level: "beginner" | "intermediate" | "advanced";
  instrument: "piano" | "electric-guitar" | "acoustic-guitar" | "bass";
  loomId: string;
  background: string; // 曲について
  tips: string; // ポイント
}

export type Instrument = Song["instrument"];

export interface InstrumentInfo {
  slug: Instrument;
  name: string;
  emoji: string;
}

export const instruments: InstrumentInfo[] = [
  { slug: "piano", name: "Piano", emoji: "🎹" },
  { slug: "electric-guitar", name: "Electric Guitar", emoji: "🎸" },
  { slug: "acoustic-guitar", name: "Acoustic Guitar", emoji: "🎵" },
  { slug: "bass", name: "Bass", emoji: "🎸" },
];

export const levelLabels: Record<Song["level"], string> = {
  beginner: "初心者",
  intermediate: "中級者",
  advanced: "上級者",
};

export const songs: Song[] = [
  {
    slug: "how-deep-is-your-love",
    title: "How Deep Is Your Love",
    artist: "Bee Gees (Joshua Domfeh arrangement)",
    key: "Gb",
    bpm: 94,
    genre: "Jazz",
    level: "intermediate",
    instrument: "piano",
    loomId: "6d63931a879340108dc28854460ca19e",
    background:
      "Bee Geesの名曲をJoshua Domfehがジャズピアノアレンジ。美しいコードボイシングとメロディの解釈が学べます。",
    tips: "楽譜付き演奏動画。ボイシングの配置とメロディラインの処理に注目。Key=Gbのフラット系キーでの演奏に慣れるのにも良い教材です。",
  },
  {
    slug: "hotel-california",
    title: "Hotel California",
    artist: "Eagles",
    key: "Bm",
    bpm: 75,
    genre: "Rock",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "1c93fba7edfc45f48e403288c50f5caa",
    background:
      "Eaglesの代表曲「Hotel California」のツインギターソロを徹底解説。TAB譜付きでギターソロのフレーズを一つ一つ分解して学べます。ロックギターの教科書的な名演。",
    tips: "ツインギターのハーモニーパートに注目。Bmペンタトニック＋ドリアンスケールを使ったフレージング。ベンド、ビブラート、スライドなどのテクニックも満載。23分の詳細解説。",
  },
  {
    slug: "a-taste-of-honey",
    title: "A Taste Of Honey",
    artist: "The Beatles",
    key: "Fm",
    bpm: 110,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "fd977529856d4439b1fa7051dc619e2d",
    background:
      "The Beatlesの初期の名曲。オリジナルはBobby Scottの作曲で、Beatlesがカバー。アコースティックギターでのフィンガーピッキングやストロークパターンを学べます。",
    tips: "TAB譜付きのギターレッスン動画。デモ演奏から始まり、フレーズを丁寧に解説。6分のコンパクトなレッスン。",
  },
];

export function getSongsByInstrument(instrument: Instrument): Song[] {
  return songs.filter((song) => song.instrument === instrument);
}

export function getSong(instrument: Instrument, slug: string): Song | undefined {
  return songs.find(
    (song) => song.instrument === instrument && song.slug === slug,
  );
}

export function getInstrument(slug: string): InstrumentInfo | undefined {
  return instruments.find((instrument) => instrument.slug === slug);
}
