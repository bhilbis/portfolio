"use client"
import React from 'react';
import { useProjectContext } from '../../../context/project-context';
import { categories, techStacks } from '@/lib/data';

const ActiveFilters = () => {
  const { selectedCategory, selectedTech, filteredProjects } = useProjectContext();

  if (selectedCategory === 'all' && selectedTech === 'all') {
    return null;
  }

  return (
    <div className="flex justify-center mb-6 sm:mb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm rounded-full">
        <span className="text-black/60 dark:text-white/60 text-xs sm:text-sm">Showing:</span>
        <div className="flex flex-wrap gap-2">
          {selectedCategory !== 'all' && (
            <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
              {categories.find(c => c.id === selectedCategory)?.label}
            </span>
          )}
          {selectedTech !== 'all' && (
            <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
              {techStacks.find(t => t.id === selectedTech)?.label}
            </span>
          )}
        </div>
        <span className="text-black/40 dark:text-white/40 text-xs sm:text-sm">
          ({filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''})
        </span>
      </div>
    </div>
  );
};

export default ActiveFilters;