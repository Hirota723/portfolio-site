"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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

const techStacks = {
  Frontend: [
    {
      icon: <SiHtml5 className="w-10 h-10" />,
      title: "HTML",
      description: "大学の課題や模写コーディングを通じてHTMLとCSSの基礎を身につけました。",
    },
    {
      icon: <SiCss3 className="w-10 h-10" />,
      title: "CSS",
      description: "TailwindCSSを頻繁に使用し、効率的なデザインを実現しています。",
    },
    {
      icon: <SiJavascript className="w-10 h-10" />,
      title: "JavaScript",
      description:
        "動的なUIやタイピングゲームを制作した経験があります。",
    },
    {
      icon: <SiTypescript className="w-10 h-10" />,
      title: "TypeScript",
      description:
        "型定義によるバグの早期発見や保守性の向上を意識した実装を行っています。",
    },
    {
      icon: <FaReact className="w-10 h-10" />,
      title: "React.js",
      description:
        "コンポーネント設計や状態管理を工夫し、再利用性と保守性の高いコードを意識しています。",
    },
    {
      icon: <FaVuejs className="w-10 h-10" />,
      title: "Vue.js",
      description: "リアルタイムチャットアプリを制作した経験があります。",
    },
    {
      icon: <TbBrandNextjs className="w-10 h-10" />,
      title: "Next.js",
      description: "インターン先で営業支援システムのフロントエンド開発に使用しました。",
    },
    {
      icon: <SiMui className="w-10 h-10" />,
      title: "Material-UI",
      description: "インターン先で使用したことがあり、一貫性のあるデザインを意識しました。",
    },
    {
      icon: <SiShadcnui className="w-10 h-10" />,
      title: "shadcn/ui",
      description: "ハッカソンや個人開発で使用したことがあり、短期間で高品質なUIを構築しました。",
    },
  ],
  Backend: [
    {
      icon: <SiFirebase className="w-10 h-10" />,
      title: "Firebase",
      description:
        "ハッカソンやインターン先で使用し、ユーザー認証やデータベースの管理を実装しました。",
    },
    {
      icon: <SiSupabase className="w-10 h-10" />,
      title: "Supabase",
      description: "ハッカソンで使用し、ユーザー認証やデータベース、ストレージの管理を実装しました。",
    },
    {
      icon: <FaGolang className="w-10 h-10" />,
      title: "Go",
      description: "絶賛独学中です。",
    },
    {
      icon: <SiPython className="w-10 h-10" />,
      title: "Python",
      description: "アルゴリズムの学習にPythonを活用しています。",
    },
    {
      icon: <SiDjango className="w-10 h-10" />,
      title: "Django",
      description:
        "簡単なブログサイトを制作した経験があります。",
    },
    {
      icon: <SiNodedotjs className="w-10 h-10" />,
      title: "Node.js",
      description: "ハッカソンで使用したことがあり、非同期処理を活かしたデータ通信を実現しました。",
    },
  ],
  Tool: [
    { icon: <FaGithub className="w-8 h-8" />, title: "GitHub" },
    { icon: <SiNotion className="w-8 h-8" />, title: "Notion" },
    { icon: <FaDiscord className="w-8 h-8" />, title: "Discord" },
    { icon: <FaSlack className="w-8 h-8" />, title: "Slack" },
    { icon: <FaFigma className="w-8 h-8" />, title: "Figma" },
    { icon: <SiCanva className="w-8 h-8" />, title: "Canva" },
  ],
};

const Skill = () => {
  return (
    <section className="py-20 bg-accent/50" id="skill">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Skill
          </motion.h2>

          {/* Frontend Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStacks.Frontend.map((skill, index) => (
                <Card key={index} className="p-4 shadow-lg">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    {skill.icon}
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStacks.Backend.map((skill, index) => (
                <Card key={index} className="p-4 shadow-lg">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    {skill.icon}
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tool Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tool</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {techStacks.Tool.map((tool, index) => (
                <Card
                  key={index}
                  className="p-4 shadow-md flex items-center space-x-4"
                >
                  {tool.icon}
                  <h4 className="text-lg font-medium">{tool.title}</h4>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
