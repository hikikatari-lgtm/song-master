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
  {
    slug: "just-the-two-of-us",
    title: "Just The Two Of Us",
    artist: "Grover Washington Jr. / Bill Withers",
    key: "Db",
    bpm: 97,
    genre: "Jazz",
    level: "intermediate",
    instrument: "bass",
    loomId: "d8fa59e8b94348b89119c521812dbc05",
    background:
      "Grover Washington Jr.とBill Withersの名曲「Just The Two Of Us」のベースライン。スムースジャズの定番で、メロディアスなベースラインが特徴。",
    tips: "コードトーンを中心としたメロディアスなベースライン。ルートだけでなく3度や5度へのアプローチに注目。スムースなグルーブ感を意識して。",
  },
  {
    slug: "too-young-to-die",
    title: "Too Young To Die",
    artist: "Jamiroquai",
    key: "Am",
    bpm: 108,
    genre: "Funk",
    level: "intermediate",
    instrument: "bass",
    loomId: "a1277d7fc5144d9bb610885ff59e2d53",
    background:
      "Jamiroquaiの「Too Young To Die」のベースライン。Stuart Zenderのファンキーなベースが際立つ一曲。アシッドジャズの名曲。",
    tips: "Jamiroquaiベースシリーズ3曲目。Cosmic Girl、Space Cowboyと合わせてStuart Zenderのスタイルを体系的に学べます。",
  },
  {
    slug: "september",
    title: "September",
    artist: "Earth, Wind & Fire",
    key: "Ab",
    bpm: 126,
    genre: "Funk",
    level: "intermediate",
    instrument: "bass",
    loomId: "7c8f6ae158fd4b22acbf21d04f2b15d1",
    background:
      "Earth, Wind & Fireの代表曲「September」のベースライン。Verdine Whiteのエネルギッシュなファンクベースが光る世界的大ヒット曲。",
    tips: "オクターブ奏法とシンコペーションの組み合わせに注目。ディスコ/ファンクのグルーブ感を体感できる名ベースライン。",
  },
  {
    slug: "africa",
    title: "Africa",
    artist: "Toto",
    key: "A",
    bpm: 93,
    genre: "Rock",
    level: "intermediate",
    instrument: "bass",
    loomId: "c8182b28278e4bd7b04899e1e0dbf3b3",
    background:
      "Totoの代表曲「Africa」のベースライン。David Hungate/Mike Porcaroのメロディアスなベースラインが曲を支える。80年代ロックの金字塔。",
    tips: "Verse→Chorusでのベースラインの変化に注目。コードチェンジに合わせたスムースなラインの作り方を学べます。",
  },
  {
    slug: "under-the-bridge",
    title: "Under The Bridge",
    artist: "Red Hot Chili Peppers",
    key: "E",
    bpm: 68,
    genre: "Rock",
    level: "intermediate",
    instrument: "electric-guitar",
    loomId: "8e6afbcbdd0340519ad6cc41cfe368cf",
    background:
      "Red Hot Chili Peppersの名バラード。John Fruscianteの美しいクリーンギターが際立つ一曲。",
    tips: "クリーントーンでのアルペジオとコードワークに注目。繊細なタッチコントロールが求められます。",
  },
  {
    slug: "beat-it",
    title: "Beat It",
    artist: "Michael Jackson (Eddie Van Halen guitar solo)",
    key: "Em",
    bpm: 138,
    genre: "Rock",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "7bb5b5da94234beaa4055e0f4511b89d",
    background:
      "Michael Jacksonの「Beat It」。Eddie Van Halenが弾いた伝説のギターソロを徹底解説。ロックとポップの融合を象徴する一曲。",
    tips: "Eddie Van Halenのタッピング、ワーミーバー、高速レガートなどのテクニックが満載。ロックギターの教科書的ソロ。",
  },
  {
    slug: "little-wing",
    title: "Little Wing",
    artist: "Jimi Hendrix",
    key: "Em",
    bpm: 66,
    genre: "Rock",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "43a4331b61a740b19abb38a5e162a553",
    background:
      "Jimi Hendrixの名曲「Little Wing」。コードメロディの極致とも言えるイントロは、ギタリストの必修課題。",
    tips: "コードとメロディを同時に弾くHendrixスタイルのコードワーク。サムで低音弦を押さえながらのフレージングに注目。",
  },
  {
    slug: "whole-lotta-love",
    title: "Whole Lotta Love",
    artist: "Led Zeppelin",
    key: "E",
    bpm: 90,
    genre: "Rock",
    level: "intermediate",
    instrument: "electric-guitar",
    loomId: "e19350eb91ad4d329d63115c0d387035",
    background:
      "Led Zeppelinの代表曲。Jimmy Pageの象徴的なリフは、ロック史上最も有名なギターリフの一つ。",
    tips: "E7のブルージーなリフが核。ベンドやビブラートのニュアンスがこの曲のカッコよさを決める。",
  },
  {
    slug: "all-along-the-watchtower",
    title: "All Along The Watchtower",
    artist: "Jimi Hendrix",
    key: "C#m",
    bpm: 114,
    genre: "Rock",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "c1426d2d66964d37931aa6ff07143253",
    background:
      "Bob Dylanの原曲をJimi Hendrixが大胆にアレンジした伝説のカバー。ギターの表現力の頂点を示す一曲。",
    tips: "スライドギター、ワウペダル、フィードバックなどHendrixのテクニックの集大成。複数のギターパートが重なる構成を理解しよう。",
  },
  {
    slug: "purple-haze",
    title: "Purple Haze",
    artist: "Jimi Hendrix",
    key: "E",
    bpm: 108,
    genre: "Rock",
    level: "intermediate",
    instrument: "electric-guitar",
    loomId: "0564a305b2cb4942bbc459b2076b4e34",
    background:
      "Jimi Hendrixの代表曲「Purple Haze」。E7#9（ヘンドリックスコード）で始まる象徴的なリフはロックギターの金字塔。",
    tips: "E7#9コードのフォームとオクターブ奏法に注目。ファズトーンでのアグレッシブなプレイスタイルを学べます。",
  },
  {
    slug: "eye-of-the-tiger",
    title: "Eye Of The Tiger",
    artist: "Survivor",
    key: "Cm",
    bpm: 109,
    genre: "Rock",
    level: "beginner",
    instrument: "electric-guitar",
    loomId: "344d17f36f9b4d879ed9d0dd6d0313be",
    background:
      "映画「ロッキーIII」のテーマ曲。シンプルながら力強いギターリフは、ロックギター入門に最適。",
    tips: "パワーコードとミュートを使ったリフワーク。リズムの正確さとパームミュートのコントロールが鍵。初心者でも挑戦しやすい。",
  },
  {
    slug: "crossroads",
    title: "Crossroads",
    artist: "Eric Clapton / Cream",
    key: "A",
    bpm: 130,
    genre: "Blues",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "b0b4ea5685a6450e9f3a11de078b24e3",
    background:
      "Robert Johnsonの原曲をCreamがロックアレンジした伝説のライブバージョン。Eric Claptonのブルースギターの真髄。",
    tips: "Aマイナーペンタトニック＋メジャーペンタトニックの切り替えがClaptonスタイルの核。高速シャッフルでのピッキングコントロールに注目。",
  },
  {
    slug: "black-dog",
    title: "Black Dog",
    artist: "Led Zeppelin",
    key: "A",
    bpm: 80,
    genre: "Rock",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "245d2abb19274d36b01251693d5365fc",
    background:
      "Led Zeppelinの「Black Dog」。変拍子的なギターリフとコール&レスポンスの構成が特徴。Jimmy Pageのリフワークの真骨頂。",
    tips: "リズムが複雑に聞こえるが、基本は4/4拍子の上でのシンコペーション。リフのアクセント位置を正確に掴むことが鍵。",
  },
  {
    slug: "voodoo-child-slight-return",
    title: "Voodoo Child (Slight Return)",
    artist: "Stevie Ray Vaughan",
    key: "E",
    bpm: 88,
    genre: "Blues",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "240bba3cdb994e299af647a36a5a97ad",
    background:
      "Jimi Hendrix原曲をStevie Ray Vaughanがカバー。SRVの圧倒的なテクニックとブルースフィーリングが炸裂する名演。",
    tips: "ワウペダルを使ったファンキーなリフとアグレッシブなブルースソロ。SRV特有の太いトーンとベンドの表現力に注目。",
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
