import {
  FaReact,
  FaVuejs,
  FaGithub,
  FaFigma,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiShadcnui,
  SiFirebase,
  SiSupabase,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiNotion,
  SiCanva,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

export const techStacks = {
  Frontend: [
    {
      icon: SiHtml5,
      title: "HTML",
      description:
        "大学の課題や模写コーディングを通じてHTMLとCSSの基礎を身につけました。",
    },
    {
      icon: SiCss3,
      title: "CSS",
      description:
        "TailwindCSSを頻繁に使用し、効率的なデザインを実現しています。",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      description: "動的なUIやタイピングゲームを制作した経験があります。",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      description:
        "型定義によるバグの早期発見や保守性の向上を意識した実装を行っています。",
    },
    {
      icon: FaReact,
      title: "React.js",
      description:
        "コンポーネント設計や状態管理を工夫し、再利用性と保守性の高いコードを意識しています。",
    },
    {
      icon: FaVuejs,
      title: "Vue.js",
      description: "リアルタイムチャットアプリを制作した経験があります。",
    },
    {
      icon: TbBrandNextjs,
      title: "Next.js",
      description:
        "インターン先で営業支援システムのフロントエンド開発に使用しました。",
    },
    {
      icon: SiMui,
      title: "Material-UI",
      description:
        "インターン先で使用したことがあり、一貫性のあるデザインを意識しました。",
    },
    {
      icon: SiShadcnui,
      title: "shadcn/ui",
      description:
        "ハッカソンや個人開発で使用したことがあり、短期間で高品質なUIを構築しました。",
    },
  ],
  Backend: [
    {
      icon: SiFirebase,
      title: "Firebase",
      description:
        "ハッカソンやインターン先で使用し、ユーザー認証やデータベースの管理を実装しました。",
    },
    {
      icon: SiSupabase,
      title: "Supabase",
      description:
        "ハッカソンで使用し、ユーザー認証やデータベース、ストレージの管理を実装しました。",
    },
    { icon: FaGolang, title: "Go", description: "絶賛独学中です。" },
    {
      icon: SiPython,
      title: "Python",
      description: "アルゴリズムの学習にPythonを活用しています。",
    },
    {
      icon: SiDjango,
      title: "Django",
      description: "簡単なブログサイトを制作した経験があります。",
    },
    {
      icon: SiNodedotjs,
      title: "Node.js",
      description:
        "ハッカソンで使用したことがあり、非同期処理を活かしたデータ通信を実現しました。",
    },
  ],
  Tool: [
    { icon: FaGithub, title: "GitHub" },
    { icon: SiNotion, title: "Notion" },
    { icon: FaDiscord, title: "Discord" },
    { icon: FaSlack, title: "Slack" },
    { icon: FaFigma, title: "Figma" },
    { icon: SiCanva, title: "Canva" },
  ],
};
