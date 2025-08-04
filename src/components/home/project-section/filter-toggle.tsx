"use client"
import React from 'react';
import { Filter, X, Menu } from 'lucide-react';
import { useProjectContext } from '../../../context/project-context';

const FilterToggle = () => {
  const { isFilterMenuOpen, setIsFilterMenuOpen } = useProjectContext();

  return (
    <div className="lg:hidden flex justify-center mb-6">
      <button 
        onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        className="flex items-center gap-2 px-4 py-2 
                   bg-black/5 dark:bg-white/10 
                   backdrop-blur-sm rounded-lg 
                   border border-black/20 dark:border-white/20 
                   text-black/80 dark:text-white/80"
      >
        <Filter className="w-4 h-4 text-black/70 dark:text-white/70" />
        {isFilterMenuOpen ? 'Hide Filters' : 'Show Filters'}
        {isFilterMenuOpen 
          ? <X className="w-4 h-4 text-black/70 dark:text-white/70" /> 
          : <Menu className="w-4 h-4 text-black/70 dark:text-white/70" />}
      </button>
    </div>
  );
};

export default FilterToggle;