/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { useProjectContext } from '@/context/project-context';

const ProjectVisual = () => {
  const { currentProject } = useProjectContext();

  return (
    <div className="relative mt-4 sm:mt-0">
      <div className={`aspect-square rounded-3xl bg-gradient-to-br ${currentProject.color} p-1`}>
        <div className="w-full h-full bg-black/90 rounded-3xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-4 border border-white/20 rounded-2xl">
            <div className="flex items-center gap-2 p-3 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="flex gap-2 ml-auto">
                {currentProject.icon?.map((IconComponent: any, i: number) => (
                  <IconComponent key={i} className="w-4 h-4 text-white/40" />
                ))}
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="h-2 sm:h-3 bg-white/20 rounded-full w-3/4" />
              <div className="h-2 sm:h-3 bg-white/10 rounded-full w-1/2" />
              <div className="h-2 sm:h-3 bg-white/20 rounded-full w-2/3" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className={`h-12 sm:h-16 bg-gradient-to-r ${currentProject.color} opacity-50 rounded-lg`} />
                <div className={`h-12 sm:h-16 bg-gradient-to-r ${currentProject.color} opacity-30 rounded-lg`} />
              </div>
            </div>
          </div>
          
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white/60">
            {currentProject.tech[0]}
          </div>
          
          <div className={`absolute top-8 right-8 w-3 sm:w-4 h-3 sm:h-4 bg-${currentProject.accent}-400 rounded-full animate-ping`} />
          <div className={`absolute bottom-8 left-8 w-4 sm:w-6 h-4 sm:h-6 bg-${currentProject.accent}-400 opacity-50 rounded-lg animate-pulse`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;