"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Folder, FolderOpen, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },{
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    stats: {
      duration: "3 months",
      team: "4 developers",
      impact: "+150% sales",
    },
    highlights: [
      "Real-time inventory tracking",
      "Multi-payment gateway integration",
      "Advanced analytics dashboard",
      "Mobile-first responsive design",
    ],
  },
];

export default function MacOSFolderView() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="min-h-[30vh] border rounded-xl shadow-inner bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex animate-fade-in">
      {/* Sidebar */} 
      <aside className="w-64 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-r border-gray-300 dark:border-gray-700 p-6 hidden md:block">
        <ul className="space-y-2 text-sm mt-14 md:mt-0">
          <li>📁 Project</li>
          <li>📁 Archive</li>
          <li>📁 Design</li>
        </ul>
      </aside>

      {/* Folder Grid */}
      <main className="flex-1 p-6 md:p-10">
        {/* Mobile */}
        <div className="block md:hidden max-h-[80vh] overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <Dialog
              key={index}
              open={openIndex === index}
              onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
            >
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="cursor-pointer group"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotateX: openIndex === index ? 15 : 0 }}
                      className={`bg-transparent w-20 h-16 rounded-t-md mx-auto transition-all duration-300`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait" initial={false}>
                          {openIndex === index ? (
                            <motion.div
                              key="open"
                              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                              className="absolute"
                            >
                              <FolderOpen className="text-yellow-500 w-16 h-16" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="closed"
                              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                              transition={{ duration: 0.3 }}
                              className="absolute"
                            >
                              <Folder className="text-yellow-500 w-16 h-16" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">
                    {project.title}
                  </p>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl" showCloseButton={false} >
                <div className="flex items-end justify-end mb-4 w-full">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full" />
                    <button
                      onClick={() => setOpenIndex(null)}
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
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                   <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 30,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                     className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                   >
                     <div className="flex gap-3">
                       <Button
                         size="sm"
                         variant="outline"
                         className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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

                <div className="text-sm space-y-2">
                  <p>
                    <strong>Durasi:</strong> {project.stats.duration}
                  </p>
                  <p>
                    <strong>Tim:</strong> {project.stats.team}
                  </p>
                  <p>
                    <strong>Dampak:</strong> {project.stats.impact}
                  </p>

                  <div>
                    <strong>Fitur Utama:</strong>
                    <ul className="list-disc ml-5 mt-1">
                      {project.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong>Teknologi:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
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
            </Dialog>
            ))}
          </div>
        </div>

          {/* Dekstop */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Dialog
              key={index}
              open={openIndex === index}
              onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
            >
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="cursor-pointer group"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotateX: openIndex === index ? 15 : 0 }}
                      className={`bg-transparent w-20 h-16 rounded-t-md mx-auto transition-all duration-300`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait" initial={false}>
                          {openIndex === index ? (
                            <motion.div
                              key="open"
                              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                              transition={{ duration: 0.3 }}
                              className="absolute"
                            >
                              <FolderOpen className="text-yellow-500 w-16 h-16" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="closed"
                              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                              transition={{ duration: 0.3 }}
                              className="absolute"
                            >
                              <Folder className="text-yellow-500 w-16 h-16" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">
                    {project.title}
                  </p>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl" showCloseButton={false} >
                <div className="flex items-end justify-end mb-4 w-full">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-500 hover:bg-green-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 hover:bg-yellow-400 rounded-full" />
                    <button
                      onClick={() => setOpenIndex(null)}
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
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                   <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 30,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                     className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                   >
                     <div className="flex gap-3">
                       <Button
                         size="sm"
                         variant="outline"
                         className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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

                <div className="text-sm space-y-2">
                  <p>
                    <strong>Durasi:</strong> {project.stats.duration}
                  </p>
                  <p>
                    <strong>Tim:</strong> {project.stats.team}
                  </p>
                  <p>
                    <strong>Dampak:</strong> {project.stats.impact}
                  </p>

                  <div>
                    <strong>Fitur Utama:</strong>
                    <ul className="list-disc ml-5 mt-1">
                      {project.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong>Teknologi:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
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
            </Dialog>
          ))}
        </div>
      </main>
    </div>
  );
}

