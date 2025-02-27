"use client";

import { motion } from "framer-motion";
import TechSkillCard from "@/components/sections/skill/TechSkillCard";
import ToolSkillCard from "@/components/sections/skill/ToolSkillCard";
import { techStacks } from "@/constants/techStacks";

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
          {/* タイトル */}
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
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStacks.Frontend.map((skill, index) => (
                <TechSkillCard key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStacks.Backend.map((skill, index) => (
                <TechSkillCard key={index} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Tool Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tool</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {techStacks.Tool.map((tool, index) => (
                <ToolSkillCard key={index} {...tool} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
