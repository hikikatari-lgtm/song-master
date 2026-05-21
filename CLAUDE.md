# Song Master

楽曲の弾き方を楽器別に学べる音楽教育アプリ。Loom動画を中心にした教材プラットフォーム。

## 技術スタック
- Next.js (App Router) + TypeScript + Tailwind CSS
- Vercel デプロイ（GitHub連携、mainにpushで自動デプロイ）
- 本番URL: https://song-master-mu.vercel.app
- GitHub: https://github.com/hikikatari-lgtm/song-master

## プロジェクト構成
```
app/
  page.tsx          # トップ（楽器選択カード）
  piano/            # ピアノ曲一覧 + 個別ページ
  electric-guitar/  # エレキギター
  acoustic-guitar/  # アコギ
  bass/             # ベース
  drums/            # ドラム
data/
  songs.ts          # 全曲データ（ここに追記するだけで曲追加可能）
components/
  SongCard.tsx      # 曲カード
  SongDetail.tsx    # 曲詳細ページ
  LoomEmbed.tsx     # Loom埋め込み
  ChordChart.tsx    # コード譜表示（画像＋テキスト）
  CategoryFilter.tsx
  InstrumentSongs.tsx
```

## 曲の追加方法

data/songs.ts の songs 配列に以下のフォーマットで追加するだけ。pushすればVercelが自動デプロイ。

```typescript
{
  slug: "曲名-kebab-case",        // URLスラッグ（小文字、ハイフン区切り）
  title: "曲名",
  artist: "アーティスト名",
  key: "キー",                     // "C", "Am", "F#m" etc
  bpm: 120,                        // テンポ（数値）
  genre: "ジャンル",               // "Rock", "Pop", "Jazz", "Funk", "Blues", "Alternative"
  level: "intermediate",           // "beginner" | "intermediate" | "advanced"
  instrument: "piano",             // "piano" | "electric-guitar" | "acoustic-guitar" | "bass" | "drums"
  loomId: "LoomのID",             // https://www.loom.com/share/xxx の xxx 部分
  background: "曲についての説明",
  tips: "弾き方のポイント",
  // オプション: コード譜
  chordChart: {
    imageUrl: "https://lh3.googleusercontent.com/d/GOOGLE_DRIVE_FILE_ID",  // Google Drive画像の直接URL
    sections: [
      { name: "Intro", bars: "||: G#mx C#m7 | ✕ | ✕ | A B A/C# B/D# :||" },
      { name: "A", bars: "||: E | C#mx B | ✕ | || E |" },
    ]
  }
}
```

### Loom IDの取得
共有URL `https://www.loom.com/share/6d63931a879340108dc28854460ca19e` の場合、
loomId = `6d63931a879340108dc28854460ca19e`

### コード譜画像の追加（Google Drive経由）
1. 画像をGoogle Driveにアップロード
2. 共有設定を「リンクを知っている全員」に
3. ファイルIDを取得（共有URL内の /d/xxx/ の部分）
4. imageUrl: "https://lh3.googleusercontent.com/d/{ファイルID}"

## 楽器の追加
新しい楽器カテゴリーを追加する場合：
1. data/songs.ts の instruments 配列に追加
2. data/songs.ts の Song.instrument 型に追加
3. app/{楽器slug}/page.tsx と app/{楽器slug}/[slug]/page.tsx を作成（既存をコピー）

## デプロイ
git push origin main で Vercel が自動デプロイ。確認不要。

## 関連プロジェクト
- Theory Lab: https://theory-lab.vercel.app （音楽理論学習ツール）
  - リポ: /Users/hiroshimashigeki/theory-lab
- Notion Song Library: 5000曲以上のコード進行分析DB

@AGENTS.md
