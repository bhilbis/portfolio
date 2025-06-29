"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Folder, FolderOpen} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectDialogContent } from "./dialog-content";

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    github: '#',
    demo: '#',
    stats: {
      duration: '3 months',
      team: '4 developers',
      impact: '+150% sales'
    },
    highlights: [
      'Real-time inventory tracking',
      'Multi-payment gateway integration',
      'Advanced analytics dashboard',
      'Mobile-first responsive design'
    ]
  },
  {
    title: 'Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with machine learning insights, predictive modeling, and interactive data visualizations for business intelligence.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'React', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: '#',
    demo: '#',
    stats: {
      duration: '6 months',
      team: '5 developers',
      impact: '+300% insights'
    },
    highlights: [
      'Machine learning predictions',
      'Interactive data visualizations',
      'Real-time data processing',
      'Custom report generation'
    ]
  },
  {
    title: 'Crypto Trading Bot',
    description: 'Sophisticated cryptocurrency trading bot with machine learning algorithms, risk management, and real-time market analysis for automated trading.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'React', 'WebSocket', 'TensorFlow', 'Docker'],
    github: '#',
    demo: '#',
    stats: {
      duration: '5 months',
      team: '2 developers',
      impact: '+85% ROI'
    },
    highlights: [
      'ML-powered trading algorithms',
      'Real-time market analysis',
      'Risk management system',
      'Portfolio optimization'
    ]
  },
  {
    title: 'Learning Management System',
    description: 'Comprehensive LMS with interactive course creation, student progress tracking, AI-powered assessments, and virtual classroom integration.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'AWS'],
    github: '#',
    demo: '#',
    stats: {
      duration: '7 months',
      team: '4 developers',
      impact: '5K+ students'
    },
    highlights: [
      'Interactive course builder',
      'AI-powered assessments',
      'Virtual classroom integration',
      'Progress analytics'
    ]
  },
];

export default function MacOSFolderView() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="min-h-[40vh] border rounded-xl shadow-inner bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex animate-fade-in">
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

              <ProjectDialogContent
                project={project}
                index={index}
                onClose={() => setOpenIndex(null)}
              />
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

              <ProjectDialogContent
                project={project}
                index={index}
                onClose={() => setOpenIndex(null)}
              />
            </Dialog>
          ))}
        </div>
      </main>
    </div>
  );
}

