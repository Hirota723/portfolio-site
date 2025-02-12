import Project from "@/types/project";

export const projects: Project[] = [
  {
    title: "集結の覇者",
    description: "チームでの一致率に基づいて競い合う4択形式のクイズゲーム",
    longDescription: `チームごとの一致率に基づいて競い合う4択形式のクイズゲームです。プレイヤーは問題と回答を投稿し、チームの一致率が高いほど勝利に近づきます。<br />アニメーションを多用することでゲームプレイ中の盛り上がりを演出しました。また、待機画面には脳トレ形式のミニゲームを導入することで、開始前の時間も楽しめる工夫を施し、ユーザーが退屈せずポジティブな体験を得られるように設計しました。`,
    image: "/images/team-game.png",
    tags: ["Next.js", "TypeScript", "Firebase"],
    links: {
      github: "https://github.com/tomizawakenshin/hackathon_team4",
      demo: "https://hackathon-team4.vercel.app/",
    },
  },
  {
    title: "はーいっく",
    description: "俳句と写真で想像力を刺激するSNS",
    longDescription: `「はーいっく」は、俳句と写真を組み合わせてユーザーの想像力を刺激するSNSアプリです。京都がテーマのハッカソンで開発され、和風なデザインを採用し、京都らしさを演出しました。<br />他ユーザーとの交流を促す「いいね」ランキング機能や、写真投稿時にワンクリックで現在地を取得できる利便性の高い機能を実装。さらに、ログインのハードルを下げるためゲストアカウント機能も搭載し、気軽にアプリを体験できる設計としました。`,
    image: "/images/haic.png",
    tags: ["Next.js", "TypeScript", "Supabase", "GCP", "shadcn/ui"],
    links: {
      github: "https://github.com/Hirota723/hackathon_team_ZutoNatsu",
      demo: "https://hackathon-team-zuto-natsu.vercel.app/",
    },
  },
  {
    title: "フロッティーくん",
    description: "LINEやDiscordで利用できる蛙化判定Bot",
    longDescription: `LINEやDiscordで利用できる蛙化判定Botです。AIがメッセージ内容を解析し、蛙化現象を引き起こしそうな発言を察知します。<br />機械学習とBotの組み合わせにより、ユーザーの発言をリアルタイムで解析し、より正確な判定を行えるようにしました。独自に用意したデータセットを用いてAIをファインチューニングすることで、精度の高い判定が可能となり、ユニークで楽しめるユーザー体験を提供しています。`,
    image: "/images/frog.png",
    tags: ["Node.js", "Discord.js", "Generative AI", "OpenAI"],
    links: {
      github: "https://github.com/Hirota723/discord-bot",
      demo: "https://frog-vert.vercel.app/",
    },
  },
];
