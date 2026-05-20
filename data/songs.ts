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
  {
    slug: "dont-start-now",
    title: "Don't Start Now",
    artist: "Dua Lipa (Snarky Puppy keyboard cover)",
    key: "Bm",
    bpm: 124,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "c82fe5fb3e384842a44e2edb71290b69",
    background:
      "Dua Lipaの大ヒット曲をSnarky Puppyのキーボーディストがカバー。ファンクやジャズの要素を取り入れたグルーヴィーなキーボードアレンジが学べます。",
    tips: "ファンキーなリズムパターンとコードボイシングに注目。シンコペーションの使い方やグルーブの作り方が参考になります。",
  },
  {
    slug: "power",
    title: "Power",
    artist: "Marcus Miller",
    key: "Em",
    bpm: 108,
    genre: "Jazz",
    level: "advanced",
    instrument: "bass",
    loomId: "ed171f571f0e45d78948c451b8bf7ea1",
    background:
      "Marcus Millerの代表曲「Power」のベースTAB譜付きレッスン。スラップベースの真髄が詰まった一曲。ファンク/ジャズフュージョンのグルーブを体感できます。",
    tips: "スラップ＆ポップのテクニックに注目。サムピング、プル、ゴーストノートの組み合わせがMarcus Millerサウンドの核。TAB譜付きで細かいフレーズまで確認できます。",
  },
  {
    slug: "cosmic-girl",
    title: "Cosmic Girl",
    artist: "Jamiroquai",
    key: "Dm",
    bpm: 120,
    genre: "Funk",
    level: "intermediate",
    instrument: "bass",
    loomId: "a5f1caa422dc48048bb6dcee52009444",
    background:
      "Jamiroquaiの代表曲「Cosmic Girl」のベースライン。ディスコ/ファンクのグルーヴィーなベースラインを学べます。Stuart Zenderの名演。",
    tips: "16分音符のファンキーなベースラインに注目。オクターブ奏法とゴーストノートの組み合わせがこの曲のグルーブの核。",
  },
  {
    slug: "oh-darling",
    title: "Oh! Darling",
    artist: "The Beatles",
    key: "A",
    bpm: 58,
    genre: "Rock",
    level: "intermediate",
    instrument: "bass",
    loomId: "a3424b0582fb4c4fba8444ee5ec7d132",
    background:
      "The Beatlesの名曲「Oh! Darling」のベースライン。Paul McCartneyのエモーショナルなボーカルを支えるベースパートを学べます。",
    tips: "シンプルだけど味のあるベースライン。ルート中心の動きの中で、経過音やアプローチノートがどう使われているかに注目。",
  },
  {
    slug: "billie-jean",
    title: "Billie Jean",
    artist: "Michael Jackson",
    key: "F#m",
    bpm: 117,
    genre: "Pop",
    level: "intermediate",
    instrument: "bass",
    loomId: "a936e940f61342849e1d482fbc6644ab",
    background:
      "Michael Jacksonの代表曲「Billie Jean」のベースライン。Louis Johnsonが弾いた世界一有名なベースラインの一つ。シンプルながらグルーブ感抜群。",
    tips: "オクターブを使ったシンプルなベースラインだが、タイミングとダイナミクスが命。ゴーストノートの入れ方でグルーブが大きく変わる。",
  },
  {
    slug: "the-chain",
    title: "The Chain",
    artist: "Fleetwood Mac",
    key: "Em",
    bpm: 152,
    genre: "Rock",
    level: "intermediate",
    instrument: "bass",
    loomId: "849bd5724c994b4ebec4645d7bc63663",
    background:
      "Fleetwood Macの名曲「The Chain」のベースライン。John McVieの象徴的なベースリフは、ロック史上最も有名なベースラインの一つ。F1のテーマとしても知られる。",
    tips: "後半のベースリフが最大の見どころ。シンプルなルートの動きから劇的に展開するベースソロパートに注目。",
  },
  {
    slug: "space-cowboy",
    title: "Space Cowboy",
    artist: "Jamiroquai",
    key: "Em",
    bpm: 112,
    genre: "Funk",
    level: "intermediate",
    instrument: "bass",
    loomId: "bef42dfae6bb4b43afc9cd751d987078",
    background:
      "Jamiroquaiの「Space Cowboy」のベースライン。Stuart Zenderのグルーヴィーなファンクベースが光る一曲。アシッドジャズ/ファンクの代表的なベースライン。",
    tips: "16分音符のファンキーなグルーブとゴーストノートの使い方に注目。Cosmic Girlと合わせてJamiroquaiのベーススタイルを体系的に学べます。",
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
