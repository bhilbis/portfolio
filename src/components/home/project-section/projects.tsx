"use client";
import { useRef } from 'react';
// import FolderCard  from '../ui/folder-card';
import ProjectsSection from './project-shows';
import { motion } from 'motion/react';

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-2 relative overflow-hidden rounded-xl min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8 pt-8 sm:pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-full border border-black/10 dark:border-white/10 mb-4 sm:mb-6">
          <span className="text-black/80 dark:text-white/80 text-md font-medium"><span className='text-lg'>👨‍💻</span> Selected Works</span>
        </div>
        
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
         viewport={{ once: true }}
         className="text-center"
         >
           <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="inline-block"
           >
             <h2 className="text-4xl md:text-5xl font-bold">
               Showcase Projects
             </h2>

           </motion.div>
        </motion.div>
      </div>
      
      <ProjectsSection />
      
      {/* <div className="absolute hidden lg:block inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div> */}
    </section>
  );
}