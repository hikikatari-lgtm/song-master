export interface Song {
  slug: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  genre: string; // "Jazz", "Pop", "Rock" etc
  level: "beginner" | "intermediate" | "advanced";
  instrument: "piano" | "electric-guitar" | "acoustic-guitar" | "bass" | "drums";
  loomId: string;
  loomVideos?: {
    title: string;
    loomId: string;
  }[];
  background: string; // 曲について
  artistVideoId?: string; // 「この曲について」内に表示する本人映像のLoom ID
  tips: string; // ポイント
  chordChart?: {
    imageUrl?: string; // 手書きコード譜の画像URL
    sections: {
      name: string; // セクション名（"Intro", "A", "Chorus" etc）
      bars: string; // コード進行テキスト
    }[];
  };
  studentVideos?: {
    title: string; // 例: "生徒演奏"
    loomId: string;
  }[];
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
  { slug: "drums", name: "Drums", emoji: "🥁" },
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
    studentVideos: [
      { title: "生徒演奏", loomId: "fcf9ab9eeac94cb096918623faf79043" },
    ],
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
    studentVideos: [
      { title: "生徒演奏", loomId: "ea4c6f2b2484417eb981cd2a89960d7f" },
    ],
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
  {
    slug: "wish-you-were-here",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    key: "G",
    bpm: 60,
    genre: "Rock",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "43ed034a85c5427aafd17e18dd6c0e95",
    background:
      "Pink Floydの名曲。David Gilmourの美しいアコースティックギターイントロはロック史上最も感動的なギターパートの一つ。",
    tips: "12弦ギターのようなサウンドを6弦で再現するテクニック。コードチェンジ時のハンマリング・プリングに注目。",
  },
  {
    slug: "tears-in-heaven",
    title: "Tears In Heaven",
    artist: "Eric Clapton",
    key: "A",
    bpm: 80,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "1dde394e700f48fcad4d1605247d9e5e",
    background:
      "Eric Claptonが息子の死を悼んで書いた名バラード。フィンガーピッキングの美しさが際立つ一曲。グラミー賞3部門受賞。",
    tips: "フィンガーピッキングでのメロディとベースの同時演奏。右手のアルペジオパターンとコードフォームの正確さが鍵。",
  },
  {
    slug: "blackbird",
    title: "Blackbird",
    artist: "The Beatles",
    key: "G",
    bpm: 92,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "34d0f0fd2f3d4b8c9096e1d45af7093a",
    background:
      "Paul McCartneyの名曲。独特のフィンガーピッキングパターンとクロマチックなベースラインが特徴。アコギの教科書的な一曲。",
    tips: "2本の弦を同時に弾くフィンガーピッキングスタイル。ベースラインのクロマチック進行を正確に追うことが重要。",
  },
  {
    slug: "shallow",
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    key: "G",
    bpm: 96,
    genre: "Pop",
    level: "beginner",
    instrument: "acoustic-guitar",
    loomId: "29138cdede15407daeab2f96b9e6dbcc",
    background:
      "映画「アリー/スター誕生」の主題歌。シンプルなコード進行ながらドラマチックな展開が魅力。アコギ弾き語りの定番曲。",
    tips: "基本的なオープンコードで弾ける初心者向けの曲。ストロークパターンとダイナミクスの変化に注目。",
  },
  {
    slug: "more-than-words",
    title: "More Than Words",
    artist: "Extreme",
    key: "G",
    bpm: 96,
    genre: "Rock",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "bed0da78c6364c70afe111f7ef1991dd",
    background:
      "Extremeのアコースティックバラード。Nuno Bettencourtの繊細なフィンガーピッキングとハーモニクスが光る名曲。",
    tips: "パーカッシブなフィンガーピッキングスタイル。右手のスラップとハーモニクスの組み合わせがこの曲のサウンドを作る。",
  },
  {
    slug: "kiss-me",
    title: "Kiss Me",
    artist: "Sixpence None The Richer",
    key: "Eb",
    bpm: 108,
    genre: "Pop",
    level: "beginner",
    instrument: "acoustic-guitar",
    loomId: "51bbe7ab3c5347f885c84be9af91219e",
    background:
      "90年代のポップクラシック。シンプルなコード進行とキャッチーなメロディで、アコギ弾き語りの入門曲として最適。",
    tips: "基本的なオープンコードとストロークパターン。カポを使ったキー変更のテクニックも学べます。",
  },
  {
    slug: "shape-of-you",
    title: "Shape Of You",
    artist: "Ed Sheeran",
    key: "C#m",
    bpm: 96,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "2d3e6b758f3a44dd97e7973172bc91e2",
    background:
      "Ed Sheeranの世界的大ヒット曲。ループペダルを使ったパフォーマンスでも有名。パーカッシブなギタースタイルが特徴。",
    tips: "ボディヒットを交えたパーカッシブなストロークパターン。ミュートとアクセントのコントロールがグルーブの鍵。",
  },
  {
    slug: "wildflower",
    title: "Wildflower",
    artist: "Billie Eilish",
    key: "A",
    bpm: 110,
    genre: "Pop",
    level: "beginner",
    instrument: "acoustic-guitar",
    loomId: "632e978672934f9e95af3207d523238c",
    background:
      "Billie Eilishの「Wildflower」。シンプルながら感情的な表現が求められる一曲。現代ポップのアコギアレンジを学べます。",
    tips: "シンプルなコードフォームでも、ダイナミクスとストロークの強弱で表現力を出すことがポイント。",
  },
  {
    slug: "fake-plastic-trees",
    title: "Fake Plastic Trees",
    artist: "Radiohead",
    key: "A",
    bpm: 75,
    genre: "Alternative",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "fbc1bf89c9944eac9ec2528f9efd98c4",
    background:
      "Radioheadの名バラード。Thom Yorkeの繊細なアコースティックギターとボーカルが胸を打つ。アルバム「The Bends」収録。",
    tips: "アルペジオとストロークの切り替え。静から動への展開におけるダイナミクスの付け方に注目。",
  },
  {
    slug: "wonderwall",
    title: "Wonderwall",
    artist: "Oasis",
    key: "F#m",
    bpm: 87,
    genre: "Rock",
    level: "beginner",
    instrument: "acoustic-guitar",
    loomId: "47d8f45096fe435a82b6325237b5e86f",
    background:
      "Oasisの代表曲でアコギの定番中の定番。世界中のギター初心者が最初に覚える曲の一つ。Noel Gallagher作。",
    tips: "カポ2でのオープンコード。サスペンデッドコード（sus4, sus2）の響きがこの曲のサウンドの核。ストロークパターンが重要。",
  },
  {
    slug: "the-a-team",
    title: "The A Team",
    artist: "Ed Sheeran",
    key: "A",
    bpm: 85,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "0102e1dda12c407fad3feabf42cf2ae1",
    background:
      "Ed Sheeranのデビュー曲。フィンガーピッキングとパーカッシブなギターが融合したEd Sheeranスタイルの原点。",
    tips: "Shape Of Youと合わせてEd Sheeranのギタースタイルを体系的に学べます。フィンガーピッキングのパターンに注目。",
  },
  {
    slug: "in-my-life",
    title: "In My Life",
    artist: "The Beatles",
    key: "A",
    bpm: 103,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "246ad93f930a43ccae11ad55b4f534d3",
    background:
      "The Beatlesの名曲。George Martinが弾いたバロック調のピアノソロが印象的。シンプルながら深い感情が込められた一曲。",
    tips: "バロック調のピアノソロパートに注目。右手のメロディラインと左手のベースの絡みを丁寧に練習しよう。",
  },
  {
    slug: "rocket-man",
    title: "Rocket Man",
    artist: "Elton John",
    key: "Bb",
    bpm: 68,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "3fe4143ed7f744539bd9886b2d2fbb88",
    background:
      "Elton Johnの代表曲。壮大なバラードでピアノの美しいアルペジオが曲全体を支える。1972年リリース。",
    tips: "左手のアルペジオパターンと右手のコードボイシングの組み合わせ。Elton Johnらしいダイナミックな展開を学べます。",
  },
  {
    slug: "so-far-away",
    title: "So Far Away",
    artist: "Carole King",
    key: "D",
    bpm: 78,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "99329eea6a4b4d7c866440446d4ed923",
    background:
      "Carole Kingの名盤「Tapestry」収録曲。シンガーソングライターのピアノスタイルの教科書的な一曲。",
    tips: "シンプルなコード進行の中でのピアノアレンジの作り方。弾き語りスタイルのピアノワークを学べます。",
  },
  {
    slug: "golden-lady",
    title: "Golden Lady",
    artist: "Stevie Wonder",
    key: "Eb",
    bpm: 108,
    genre: "R&B",
    level: "advanced",
    instrument: "piano",
    loomId: "173c2f90158d4ce7b671e35cad4276ad",
    background:
      "Stevie Wonderの「Innervisions」収録曲。ソウルフルなクラビネットとピアノが絡む名曲。高度なコードワークが学べます。",
    tips: "テンションコードの使い方とリズムのグルーブ感がポイント。Stevie Wonder特有のコード進行を分析しよう。",
  },
  {
    slug: "piano-man",
    title: "Piano Man",
    artist: "Billy Joel",
    key: "C",
    bpm: 90,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "1cda9ba91e5943909b3d77f1932db8a7",
    background:
      "Billy Joelの代名詞的な楽曲。3/4拍子のワルツで、ハーモニカとピアノの絡みが美しい。ピアニストの必修曲。",
    tips: "3/4拍子でのピアノ伴奏パターン。左手のベースラインの動きとコードチェンジのタイミングに注目。",
  },
  {
    slug: "tiny-dancer",
    title: "Tiny Dancer",
    artist: "Elton John",
    key: "C",
    bpm: 76,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "bdf77264817a4d74bd04718a18923ed1",
    background:
      "Elton Johnの名バラード。Verse→Chorusへの壮大な展開がドラマチック。映画「あの頃ペニー・レインと」でも使用。",
    tips: "静かなVerseから壮大なChorusへのダイナミクス変化。Elton Johnのピアノスタイル3曲目として体系的に学べます。",
  },
  {
    slug: "goodbye-yellow-brick-road",
    title: "Goodbye Yellow Brick Road",
    artist: "Elton John",
    key: "F",
    bpm: 62,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "293bc48d156d4e0285e2ff96ef1c2c0b",
    background:
      "Elton Johnのアルバムタイトル曲。美しいバラードで、ピアノのアルペジオとメロディの絡みが絶品。",
    tips: "Elton Johnピアノシリーズ4曲目。バラードでのピアノアレンジとボイシングの変化を学べます。",
  },
  {
    slug: "its-too-late",
    title: "It's Too Late",
    artist: "Carole King",
    key: "Am",
    bpm: 104,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "fbc8a4265fe34d23b6b3e73111c6854f",
    background:
      "Carole Kingの「Tapestry」からのもう一曲。グルーヴィーなピアノリフが特徴。グラミー賞レコード・オブ・ザ・イヤー受賞。",
    tips: "So Far Awayと合わせてCarole Kingのピアノスタイルを体系的に学べます。左手のリズムパターンに注目。",
  },
  {
    slug: "daniel",
    title: "Daniel",
    artist: "Elton John",
    key: "C",
    bpm: 82,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "d2376d14f1ef4fa19abe2ac255ba51b3",
    background:
      "Elton Johnの美しいバラード。シンプルなコード進行ながら、ピアノアレンジの美しさが際立つ一曲。1973年リリース。",
    tips: "Elton Johnピアノシリーズ5曲目。シンプルなコードでも美しく聴かせるボイシングの技術を学べます。",
  },
  {
    slug: "youve-got-a-friend",
    title: "You've Got A Friend",
    artist: "Carole King",
    key: "Ab",
    bpm: 94,
    genre: "Pop",
    level: "intermediate",
    instrument: "piano",
    loomId: "d967aa5b059d421cb37515cdd564fe6c",
    background:
      "Carole Kingの「Tapestry」の代表曲。James Taylorのカバーも有名。温かみのあるピアノバラードの名曲。",
    tips: "Carole Kingシリーズ3曲目。右手のメロディと伴奏の切り替え、弾き語りスタイルのピアノテクニックを学べます。",
  },
  {
    slug: "stand-by-me-drums",
    title: "Stand By Me",
    artist: "Oasis",
    key: "D",
    bpm: 76,
    genre: "Rock",
    level: "beginner",
    instrument: "drums",
    loomId: "fb12064aa3904c97b3d806b620ba4786",
    background: "Oasisの名曲のドラムカバー。スクロールするドラム譜付き。",
    tips: "シンプルな8ビートパターンが基本。ドラム入門に最適。",
  },
  {
    slug: "come-together-drums",
    title: "Come Together",
    artist: "The Beatles",
    key: "Dm",
    bpm: 82,
    genre: "Rock",
    level: "intermediate",
    instrument: "drums",
    loomId: "e58c91d1d86f4412800a859ef136d083",
    background:
      "The Beatlesの名曲。Ringo Starrの独特なグルーブ感を学べるドラムカバー。スクロールドラム譜付き。",
    tips: "Ringoの独特なフィルとハイハットワークに注目。シャッフル感のあるグルーブ。",
  },
  {
    slug: "scar-tissue-drums",
    title: "Scar Tissue",
    artist: "Red Hot Chili Peppers",
    key: "F",
    bpm: 90,
    genre: "Rock",
    level: "intermediate",
    instrument: "drums",
    loomId: "a11e874099044192aaef692e897d3024",
    background:
      "RHCPの代表曲。Chad Smithのグルーヴィーなドラムパターンをスクロールドラム譜付きで解説。",
    tips: "リラックスしたグルーブの中でのゴーストノートとハイハットのニュアンスに注目。",
  },
  {
    slug: "all-you-need-is-love-drums",
    title: "All You Need Is Love",
    artist: "The Beatles",
    key: "G",
    bpm: 104,
    genre: "Rock",
    level: "intermediate",
    instrument: "drums",
    loomId: "ae22ae17c5064b79a6f262d1204a98a1",
    background:
      "The Beatlesの7/4拍子が特徴的な名曲。変拍子でのドラムパターンを学べる。スクロールドラム譜付き。",
    tips: "7/4拍子と4/4拍子の切り替えが最大のポイント。変拍子でのグルーブ感を掴もう。",
  },
  {
    slug: "birds-of-a-feather-drums",
    title: "BIRDS OF A FEATHER",
    artist: "Billie Eilish",
    key: "Ab",
    bpm: 104,
    genre: "Pop",
    level: "beginner",
    instrument: "drums",
    loomId: "a3648dcf968645b29eba64c89a66e450",
    background:
      "Billie Eilishの人気曲のドラムカバー。現代ポップのドラムパターンを学べる。",
    tips: "シンプルなビートの中でのダイナミクスコントロール。ポップスドラムの基本を学べます。",
  },
  {
    slug: "otherside-drums",
    title: "Otherside",
    artist: "Red Hot Chili Peppers",
    key: "Am",
    bpm: 124,
    genre: "Rock",
    level: "intermediate",
    instrument: "drums",
    loomId: "1253bdf421984193b01b3ee612565d9b",
    background: "RHCPの名曲のドラムカバー。Chad Smithのパワフルなビートを学べる。",
    tips: "Verse→Chorusでのビートチェンジとフィルインのタイミングに注目。",
  },
  {
    slug: "the-lazy-song-drums",
    title: "The Lazy Song",
    artist: "Bruno Mars",
    key: "B",
    bpm: 88,
    genre: "Pop",
    level: "beginner",
    instrument: "drums",
    loomId: "98d1e403644e4a16a76c07b0efd1f5f6",
    background:
      "Bruno Marsのヒット曲。レゲエ風のリラックスしたドラムパターンを学べる。",
    tips: "レゲエ風のリムショットパターン。シンプルだがグルーブ感が重要。",
  },
  {
    slug: "wonderwall-drums",
    title: "Wonderwall",
    artist: "Oasis",
    key: "F#m",
    bpm: 87,
    genre: "Rock",
    level: "beginner",
    instrument: "drums",
    loomId: "99696357ee9f42a59615c64ab0e2ebf2",
    background:
      "Oasisの代名詞的楽曲のドラムカバー。シンプルで力強いドラムパターン。",
    tips: "基本的な8ビートの中でのアクセントの付け方。Verse→Chorusでの盛り上げ方を学べます。",
  },
  {
    slug: "fields-of-gold-drums",
    title: "Fields Of Gold",
    artist: "Sting",
    key: "Bm",
    bpm: 96,
    genre: "Pop",
    level: "intermediate",
    instrument: "drums",
    loomId: "26119a7b650a49c7abae2f718a6fc493",
    background:
      "Stingの名バラードのドラムカバー。ブラシワークを含む繊細なドラミング。",
    tips: "バラードでのブラシテクニックとダイナミクスコントロール。静かな曲でのドラムの役割を学べます。",
  },
  {
    slug: "under-the-bridge-drums",
    title: "Under The Bridge",
    artist: "Red Hot Chili Peppers",
    key: "E",
    bpm: 68,
    genre: "Rock",
    level: "intermediate",
    instrument: "drums",
    loomId: "f451f9fa66224f6bb0e04be703aa5c7c",
    background: "RHCPの名バラードのドラムカバー。スクロールドラム譜付き。",
    tips: "静かなイントロからの展開。Scar TissueやOthersideと合わせてChad Smithのスタイルを体系的に学べます。",
  },
  {
    slug: "looking-up",
    title: "Looking Up",
    artist: "Paramore",
    key: "E",
    bpm: 144,
    genre: "Rock",
    level: "intermediate",
    instrument: "electric-guitar",
    loomId: "451e961fd6984669856d9c1fb9e9c2ba",
    background:
      "Paramoreの「Looking Up」のギターレッスン。TAB譜付きでパンクロック/ポップロックのギターリフとパワーコードワークを学べます。",
    tips: "パワーコードとオクターブ奏法の組み合わせ。テンポが速いのでダウンピッキングの持久力が重要。",
    chordChart: {
      imageUrl: "https://lh3.googleusercontent.com/d/1dhuJ3hl3-E4xHPzhHPfvwW59vXx6Z03t",
      sections: [
        {
          name: "Intro",
          bars: "||: G#mx  C#m7 | ✕ | ✕ | A  B  A/C#  B/D# :||",
        },
        { name: "A", bars: "||: E | C#mx  B | ✕ | || E |" },
        {
          name: "C",
          bars: "| A  E | C#mx  B | ✕ |\n| A | C#mx  B | ✕ |",
        },
        {
          name: "Intro",
          bars: "| G#mx  C#m7 | ✕ | ✕ | A  B  A/C#  B/D# |",
        },
      ],
    },
  },
  {
    slug: "morning-star",
    title: "Morning Star",
    artist: "Philip Sayce",
    key: "Em",
    bpm: 77,
    genre: "Blues",
    level: "advanced",
    instrument: "electric-guitar",
    loomId: "edd67247f08c40b5966f4f19b36594a7",
    loomVideos: [
      { title: "Part 1", loomId: "edd67247f08c40b5966f4f19b36594a7" },
      { title: "Part 2", loomId: "ef1443495629486582562724f7ed90ec" },
      { title: "Part 3", loomId: "3f8c1fa446254ba6b4d10d3cd44332c7" },
    ],
    background:
      "Philip Sayceの「Morning Star」。ブルースロックの真髄が詰まった楽曲。ベンドとビブラートが特徴。",
    artistVideoId: "dd26d4e8cde541bfa9bdf8a68bbabc53",
    tips: "3パートに分けた詳細解説。ブルースペンタトニック＋マイナーペンタトニックを駆使したフレージング。感情を込めたベンドとビブラートが鍵。",
    studentVideos: [
      { title: "生徒演奏", loomId: "47d4030f84314f73bfc608c18745e138" },
    ],
  },
  {
    slug: "i-wont-give-up",
    title: "I Won't Give Up",
    artist: "Jason Mraz",
    key: "E",
    bpm: 104,
    genre: "Pop",
    level: "intermediate",
    instrument: "acoustic-guitar",
    loomId: "40b9c681e26844049996e18cb803cfb8",
    background:
      "Jason Mrazの代表曲「I Won't Give Up」。6/8拍子のアコースティックバラード。ギターの6弦開放を活かしたA/Eのアルペジオが印象的。",
    tips: "6/8拍子のストロークパターンに注意。A/Eはギターの6弦開放をベース音として使う。Dセクションの6度ハーモニーがポイント。",
    chordChart: {
      imageUrl: "",
      sections: [
        { name: "A（Intro/Verse）", bars: "| A/E    | E      | A/E  E | E      |" },
        {
          name: "B C（Chorus）",
          bars: "| Bsus4  | B      |\n| A      | E      | C#m7   | B      |\n| A      | E      | Bsus4  | B      |",
        },
        {
          name: "D（Bridge）",
          bars: "| Am7    | Am7    | F#m7   | F#m7   |\n| B Bsus4| B      | F#m7   | F#m7   |\n| B Bsus4| B      | D      | D      |\n| D#dim  | D#dim D| D#dim  | E      | E      |",
        },
      ],
    },
    studentVideos: [
      { title: "生徒演奏", loomId: "105162d053074fca8a9816d59ca88659" },
    ],
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
