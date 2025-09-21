"use client"
import React from 'react';
import { useProjectContext } from '@/context/project-context';

const ProjectControls = () => {
  const { 
    isAutoPlay, 
    setIsAutoPlay, 
    activeProject, 
    setActiveProject, 
    filteredProjects 
  } = useProjectContext();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
      {isAutoPlay === null ? null : (
        <button
          title={isAutoPlay === null ? 'Auto-play disabled' : isAutoPlay ? 'Pause auto-play' : 'Play auto-play'}
          disabled={isAutoPlay === null}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="px-3 sm:px-4 py-1 sm:py-2 
            bg-gray/70 text-black 
            dark:bg-white/10 dark:text-white/80 
            backdrop-blur-sm border border-black/20 dark:border-white/20 
            rounded-lg text-sm hover:bg-black/20 hover:text-black 
            dark:hover:bg-white/20 dark:hover:text-white 
            transition-all duration-300"
        >
          
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      )}

      <div className="flex gap-2 sm:gap-3">
        {filteredProjects.map((project, index) => (
          <button
            title='Select Project'
            key={project.id}
            onClick={() => {
              setActiveProject(index);
              setIsAutoPlay(false);
            }}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === activeProject
                ? `bg-gradient-to-r ${project.color}`
                : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="font-mono text-sm text-black/60 dark:text-white/60">
        <span className="text-black dark:text-white font-bold">{String(activeProject + 1).padStart(2, '0')}</span>
        {' / '}
        <span>{String(filteredProjects.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default ProjectControls;