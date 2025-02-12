"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/skills/TechSkillCard";
import ToolCard from "@/components/skills/ToolSkillCard";
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
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStacks.Backend.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Tool Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tool</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {techStacks.Tool.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
