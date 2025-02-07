"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const About = () => {
  const personalInfo = [
    { label: "生年月日", value: "2003年7月23日" },
    { label: "出身", value: "京都府京都市" },
    { label: "趣味", value: "カラオケ, カフェ巡り, ライブ" },
  ];

  const experiences = [
    { place: "京都市立紫野高等学校", status: "卒業", date: "2022年3月" },
    { place: "京都産業大学", status: "在学中", date: "2022年4月–現在" },
    {
      place: "マクドナルド株式会社",
      status: "アルバイト",
      date: "2022年5月–現在",
    },
    {
      place: "株式会社Re-era",
      status: "エンジニアインターン",
      date: "2024年6月–10月",
    },
    { place: "ビギナーズレイド", status: "最優秀賞", date: "2024年8月" },
    { place: "技育CAMP", status: "努力賞", date: "2024年10月" },
  ];

  return (
    <section className="py-20 bg-accent/50" id="profile">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 tracking-wider">Profile</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="aspect-square overflow-hidden rounded-full mb-6">
                  <Image
                    src="/images/profile.png"
                    alt="廣田航輝"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">廣田 航輝</h3>
                <p className="text-lg text-muted-foreground mb-2">
                  ひろた こうき
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  {personalInfo.map((info, index) => (
                    <p key={index} className="text-base">
                      {info.label}：{info.value}
                    </p>
                  ))}
                </div>
                <SocialLinks />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">経歴</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <p className="font-medium text-lg">{exp.place}</p>
                        <p className="text-muted-foreground">{exp.status}</p>
                      </div>
                      <span className="text-muted-foreground">{exp.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
