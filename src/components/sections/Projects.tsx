"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects } from "@/constants/projects";
import Project from "@/types/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/5 rounded-lg p-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Dialog
            open={selectedProject !== null}
            onOpenChange={(open) => !open && setSelectedProject(null)}
          >
            <DialogContent className="max-w-4xl p-4 md:p-6">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
                {/* タイトルと説明 */}
                <div className="order-1">
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                      {selectedProject?.title}
                    </DialogTitle>
                    <DialogDescription
                      className="text-base md:text-lg text-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: selectedProject?.longDescription || "",
                      }}
                    />
                  </DialogHeader>
                </div>

                {/* 画像セクション */}
                <div className="order-2 md:order-1 flex justify-center md:mt-8 md:items-center">
                  <div className="relative w-full max-w-md">
                    <Image
                      src={selectedProject?.image || "/images/profile.png"}
                      alt={selectedProject?.title || "Default Project Image"}
                      className="rounded-lg w-full h-auto"
                      width={800}
                      height={500}
                      priority
                      style={{
                        objectFit: "cover",
                        maxHeight: "350px",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* 使用技術 */}
                <div className="order-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* リンク  */}
                  <div className="mt-4 md:mt-6 flex flex-wrap gap-4">
                    {selectedProject?.links.github && (
                      <Link
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 md:p-3 border rounded-md text-muted-foreground hover:bg-gray-200 transition"
                      >
                        <FaGithub className="w-5 h-5" />
                        GitHub
                      </Link>
                    )}
                    {selectedProject?.links.demo && (
                      <Link
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 md:p-3 border rounded-md text-muted-foreground hover:bg-gray-200 transition"
                      >
                        <Globe className="w-5 h-5" />
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
