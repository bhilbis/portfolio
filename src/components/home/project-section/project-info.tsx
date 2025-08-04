/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react';
import { Code2, Zap, Github, Star } from 'lucide-react';
import { useProjectContext } from '@/context/project-context';
import { motion, AnimatePresence} from 'motion/react'

const RotatingIcon = ({ icons }: { icons: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!icons || icons.length <= 1) return;
    
    setCurrentIndex(0);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [icons]);

  const CurrentIcon = icons?.[currentIndex];
  
  if (!CurrentIcon) return null;

  return (
    <div className="relative w-4 h-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <CurrentIcon className="w-4 h-4 text-black/40 dark:text-white/40" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProjectInfo = () => {
  const { currentProject } = useProjectContext();

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentProject.color}`} />
          <span className="text-black/60 dark:text-white/60 uppercase tracking-wider text-xs sm:text-sm font-semibold">
            {currentProject.subtitle}
          </span>
          <div className="flex items-center gap-1 ml-1 sm:ml-2">
             {Array.isArray(currentProject.icon) ? (
                <RotatingIcon icons={currentProject.icon} />
              ) : (
                <currentProject.icon className="w-4 h-4 text-black/40 dark:text-white/40" />
              )}
            <span className="text-black/40 dark:text-white/40 text-xs capitalize">{currentProject.category}</span>
          </div>
        </div>
        
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
          {currentProject.title}
        </h3>
        
        <p className="text-base sm:text-xl text-black/70 dark:text-white/70 leading-relaxed mb-6 sm:mb-8">
          {currentProject.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-black/80 dark:text-white/80 font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {currentProject.tech.map((tech : any, index: any) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-lg text-black/90 dark:text-white/90 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      {currentProject.metrics && <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <div className="text-center">
          <div className={`text-xl sm:text-2xl font-bold text-${currentProject.accent}-400`}>
            {currentProject.metrics.users}
          </div>
          <div className="text-black/60 dark:text-white/60 text-xs sm:text-sm">Active Users</div>
        </div>
        <div className="text-center">
          <div className={`text-xl sm:text-2xl font-bold text-${currentProject.accent}-400`}>
            {currentProject.metrics.performance}
          </div>
          <div className="text-black/60 dark:text-white/60 text-xs sm:text-sm">Uptime</div>
        </div>
        <div className="text-center">
          <div className={`text-xl sm:text-2xl font-bold text-${currentProject.accent}-400 flex items-center justify-center gap-1`}>
            <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
            {currentProject.metrics.rating}
          </div>
          <div className="text-black/60 dark:text-white/60 text-xs sm:text-sm">Rating</div>
        </div>
      </div>}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
        {currentProject.demoUrl && <a
          href={currentProject.demoUrl}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${currentProject.color} rounded-lg text-white text-sm sm:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
        >
          <Zap className="w-4 h-4" />
          Live Demo
        </a>}
        {currentProject.githubUrl && <a
          href={currentProject.githubUrl}
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white text-sm sm:text-base font-semibold hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          View Code
        </a>}
      </div>
    </div>
  );
};

export default ProjectInfo;