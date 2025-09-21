"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { useProjectContext } from '@/context/project-context';

const FilterSection = () => {
  const { 
    isFilterMenuOpen, 
    selectedCategory, 
    setSelectedCategory, 
    // selectedTech, 
    // setSelectedTech,
    availableCategories,
    // availableTechs,
    isMobile,
    setIsFilterMenuOpen
  } = useProjectContext();

  return (
    <div className={cn(
      'min-h-[80px]',
      'flex-col gap-6 justify-center items-center mb-5 sm:mb-10',
      isFilterMenuOpen ? 'flex opacity-100 scale-100' : 'hidden opacity-0 scale-95',
      'lg:flex lg:flex-row lg:opacity-100 lg:scale-100 transition-all duration-300 ease-in-out'
    )}>
      <div className="grid gap-4 w-full max-w-4xl">
        {/* PLATFORM SECTION */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-[80px] shrink-0 text-sm font-medium text-black/60 dark:text-white/60">
            Platform:
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {availableCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    if (isMobile) setIsFilterMenuOpen(false);
                  }}
                  className={cn(
                    'flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 min-w-[100px]',
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 border border-black/20 dark:border-white/20'
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TECH SECTION */}
        {/* <div className="flex items-start gap-2">
          <span className="w-[80px] shrink-0 pt-2 text-sm font-medium text-black/60 dark:text-white/60">
            Tech:
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {availableTechs
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={cn(
                    'px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 min-w-[100px]',
                    selectedTech === tech.id
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                      : 'bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 border border-black/20 dark:border-white/20'
                  )}
                >
                  {tech.label}
                </button>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FilterSection;