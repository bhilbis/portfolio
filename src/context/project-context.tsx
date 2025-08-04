/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { allProjects, techStacks } from '@/lib/data';

type ProjectContextType = {
  activeProject: number;
  setActiveProject: (index: number) => void;
  isAutoPlay: boolean;
  setIsAutoPlay: (isPlaying: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedTech: string;
  setSelectedTech: (tech: string) => void;
  isFilterMenuOpen: boolean;
  setIsFilterMenuOpen: (isOpen: boolean) => void;
  isMobile: boolean;
  filteredProjects: any[];
  availableTechs: any[];
  currentProject: any;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const techMatch = selectedTech === 'all' || 
        (Array.isArray(project.primaryTech) 
          ? project.primaryTech.includes(selectedTech) 
          : project.primaryTech === selectedTech)
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTech]);

  const availableTechs = useMemo(() => {
    const validTechSet = new Set<string>();

    allProjects.forEach((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      if (!categoryMatch) return;

      const techs = Array.isArray(project.primaryTech)
        ? project.primaryTech
        : [project.primaryTech];

      techs.forEach((tech) => validTechSet.add(tech));
    });

    return techStacks.filter((stack) => 
      stack.id === 'all' || validTechSet.has(stack.id)
    );
  }, [selectedCategory]);

  useEffect(() => {
    const validPrimaryTechs = new Set<string>();

    allProjects.forEach(project => {
        if (selectedCategory !== 'all' && project.category !== selectedCategory) return;

        if (Array.isArray(project.primaryTech)) {
          project.primaryTech.forEach(tech => validPrimaryTechs.add(tech));
        } else {
          validPrimaryTechs.add(project.primaryTech);
        }
    });

    if (selectedTech !== 'all' && !validPrimaryTechs.has(selectedTech)) {
      setSelectedTech('all');
    }
  }, [selectedCategory, selectedTech]);

  useEffect(() => {
    setActiveProject(0);
    setIsAutoPlay(false);
  }, [selectedCategory, selectedTech]);

  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const currentProject = filteredProjects.length > 0 
  ? (filteredProjects[activeProject] || filteredProjects[0])
  : allProjects[0];

  const value = {
    activeProject,
    setActiveProject,
    isAutoPlay,
    setIsAutoPlay,
    selectedCategory,
    setSelectedCategory,
    selectedTech,
    setSelectedTech,
    isFilterMenuOpen,
    setIsFilterMenuOpen,
    isMobile,
    filteredProjects,
    availableTechs,
    currentProject
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};