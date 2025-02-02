"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skill = () => {
  const techStacks = {
    Frontend: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Next.js",
      "Material-UI",
      "shadcn/ui",
    ],
    Backend: ["Firebase", "Supabase", "Go", "Python", "Django", "Node.js"],
    Tool: ["GitHub", "Notion", "Discord", "Slack", "Figma", "Canva"],
  };

  return (
    <section className="py-20 bg-accent/50" id="skill">
      <div className="container mx-auto px-4">
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
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8">
                {Object.entries(techStacks).map(([category, technologies]) => (
                  <div key={category} className="bg-accent/50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-base py-2 px-4"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
