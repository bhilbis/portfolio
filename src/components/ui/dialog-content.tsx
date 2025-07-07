// components/ProjectDialogContent.tsx
"use client";

import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  stats: {
    duration: string;
    team: string;
    impact: string;
  };
  highlights: string[];
}

export const ProjectDialogContent = ({ project, index, onClose }: { project: Project; index: number; onClose: () => void }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <DialogContent className="max-w-2xl" showCloseButton={false}>
      <div className="flex items-end justify-end mb-4 w-full">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full" />
          <button
            onClick={onClose}
            className="w-3 h-3 bg-red-500 hover:bg-red-400 rounded-full"
          />
        </div>
      </div>

      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>

      <div
        className="relative overflow-hidden h-64"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: hovered === index ? 1 : 0,
            y: hovered === index ? 0 : 30,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent items-end p-6 hidden lg:flex"
        >
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-black hover:text-black/60 dark:text-white dark:hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile buttons below image */}
      <div className="flex gap-3 lg:hidden">
        <Button
          size="sm"
          variant="outline"
          className="border-gray-300 text-black dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-white/10"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          asChild
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </Button>
      </div>

      <div className="text-sm space-y-2 mt-4">
        <p><strong>Durasi:</strong> {project.stats.duration}</p>
        <p><strong>Tim:</strong> {project.stats.team}</p>
        <p><strong>Dampak:</strong> {project.stats.impact}</p>

        <div>
          <strong>Fitur Utama:</strong>
          <ul className="list-disc ml-5 mt-1">
            {project.highlights.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Teknologi:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
