// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Folder, FolderOpen} from "lucide-react";
// import {
//   Dialog,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { ProjectDialogContent } from "./dialog-content";

// const projects = [
//   {
//     title: 'E-Commerce Platform',
//     description: 'A comprehensive e-commerce solution featuring real-time inventory management, advanced payment processing with Stripe integration, and a powerful admin dashboard with analytics.',
//     image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
//     technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
//     github: '#',
//     demo: '#',
//     stats: {
//       duration: '3 months',
//       team: '4 developers',
//       impact: '+150% sales'
//     },
//     highlights: [
//       'Real-time inventory tracking',
//       'Multi-payment gateway integration',
//       'Advanced analytics dashboard',
//       'Mobile-first responsive design'
//     ]
//   },
//   {
//     title: 'Analytics Dashboard',
//     description: 'Enterprise-grade analytics platform with machine learning insights, predictive modeling, and interactive data visualizations for business intelligence.',
//     image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
//     technologies: ['Python', 'React', 'TensorFlow', 'D3.js', 'FastAPI'],
//     github: '#',
//     demo: '#',
//     stats: {
//       duration: '6 months',
//       team: '5 developers',
//       impact: '+300% insights'
//     },
//     highlights: [
//       'Machine learning predictions',
//       'Interactive data visualizations',
//       'Real-time data processing',
//       'Custom report generation'
//     ]
//   },
//   {
//     title: 'Crypto Trading Bot',
//     description: 'Sophisticated cryptocurrency trading bot with machine learning algorithms, risk management, and real-time market analysis for automated trading.',
//     image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
//     technologies: ['Python', 'React', 'WebSocket', 'TensorFlow', 'Docker'],
//     github: '#',
//     demo: '#',
//     stats: {
//       duration: '5 months',
//       team: '2 developers',
//       impact: '+85% ROI'
//     },
//     highlights: [
//       'ML-powered trading algorithms',
//       'Real-time market analysis',
//       'Risk management system',
//       'Portfolio optimization'
//     ]
//   },
//   {
//     title: 'Learning Management System',
//     description: 'Comprehensive LMS with interactive course creation, student progress tracking, AI-powered assessments, and virtual classroom integration.',
//     image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
//     technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'AWS'],
//     github: '#',
//     demo: '#',
//     stats: {
//       duration: '7 months',
//       team: '4 developers',
//       impact: '5K+ students'
//     },
//     highlights: [
//       'Interactive course builder',
//       'AI-powered assessments',
//       'Virtual classroom integration',
//       'Progress analytics'
//     ]
//   },
// ];

// export default function MacOSFolderView() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
  
//   return (
//     <div className="min-h-[40vh] border rounded-xl shadow-inner bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex animate-fade-in">
//       {/* Sidebar */} 
//       <aside className="w-64 bg-white/70 rounded-s-xl dark:bg-gray-800/70 backdrop-blur-md border-r border-gray-300 dark:border-gray-700 p-6 hidden md:block">
//         <ul className="space-y-2 text-sm mt-14 md:mt-0">
//           <li>📁 Project</li>
//           <li>📁 Archive</li>
//           <li>📁 Design</li>
//         </ul>
//       </aside>

//       {/* Folder Grid */}
//       <main className="flex-1 p-6 md:p-10">
//         {/* Mobile */}
//         <div className="block md:hidden max-h-[80vh] overflow-y-auto pr-1">
//           <div className="grid grid-cols-2 gap-6">
//             {projects.slice(0, 6).map((project, index) => (
//               <Dialog
//               key={index}
//               open={openIndex === index}
//               onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
//             >
//               <DialogTrigger asChild>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, type: "spring" }}
//                   className="cursor-pointer group"
//                 >
//                   <div className="relative">
//                     <motion.div
//                       animate={{ rotateX: openIndex === index ? 15 : 0 }}
//                       className={`bg-transparent w-20 h-16 rounded-t-md mx-auto transition-all duration-300`}
//                     >
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <AnimatePresence mode="wait" initial={false}>
//                           {openIndex === index ? (
//                             <motion.div
//                               key="open"
//                               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                               exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
//                               transition={{ duration: 0.3 }}
//                               className="absolute"
//                             >
//                               <FolderOpen className="text-yellow-500 w-16 h-16" />
//                             </motion.div>
//                           ) : (
//                             <motion.div
//                               key="closed"
//                               initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
//                               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                               exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                               transition={{ duration: 0.3 }}
//                               className="absolute"
//                             >
//                               <Folder className="text-yellow-500 w-16 h-16" />
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   </div>
//                   <p className="text-center text-sm mt-2 font-medium">
//                     {project.title}
//                   </p>
//                 </motion.div>
//               </DialogTrigger>

//               <ProjectDialogContent
//                 project={project}
//                 index={index}
//                 onClose={() => setOpenIndex(null)}
//               />
//             </Dialog>
//             ))}
//           </div>
//         </div>

//           {/* Dekstop */}
//         <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//           {projects.map((project, index) => (
//             <Dialog
//               key={index}
//               open={openIndex === index}
//               onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
//             >
//               <DialogTrigger asChild>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, type: "spring" }}
//                   className="cursor-pointer group"
//                 >
//                   <div className="relative">
//                     <motion.div
//                       animate={{ rotateX: openIndex === index ? 15 : 0 }}
//                       className={`bg-transparent w-20 h-16 rounded-t-md mx-auto transition-all duration-300`}
//                     >
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <AnimatePresence mode="wait" initial={false}>
//                           {openIndex === index ? (
//                             <motion.div
//                               key="open"
//                               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                               exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
//                               transition={{ duration: 0.3 }}
//                               className="absolute"
//                             >
//                               <FolderOpen className="text-yellow-500 w-16 h-16" />
//                             </motion.div>
//                           ) : (
//                             <motion.div
//                               key="closed"
//                               initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
//                               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                               exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
//                               transition={{ duration: 0.3 }}
//                               className="absolute"
//                             >
//                               <Folder className="text-yellow-500 w-16 h-16" />
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   </div>
//                   <p className="text-center text-sm mt-2 font-medium">
//                     {project.title}
//                   </p>
//                 </motion.div>
//               </DialogTrigger>

//               <ProjectDialogContent
//                 project={project}
//                 index={index}
//                 onClose={() => setOpenIndex(null)}
//               />
//             </Dialog>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { Github, Code2, Zap, Star, Monitor, Smartphone, Server, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  // Complete projects data with categories and tech stacks
  const allProjects = [
    {
      id: 1,
      title: "Neural Dashboard",
      subtitle: "AI-Powered Analytics",
      description: "Revolutionary dashboard menggunakan machine learning untuk predictive analytics dengan beautiful data visualizations.",
      tech: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
      category: "web",
      primaryTech: "react",
      color: "from-cyan-400 to-blue-600",
      accent: "cyan",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "10K+", performance: "99.9%", rating: "4.9" },
      icon: Monitor
    },
    {
      id: 2,
      title: "E-Commerce API",
      subtitle: "Backend Architecture",
      description: "Robust REST API dengan microservices architecture, Redis caching, dan comprehensive testing suite.",
      tech: ["Laravel", "PHP", "MySQL", "Redis"],
      category: "web",
      primaryTech: "laravel",
      color: "from-red-400 to-orange-600",
      accent: "red",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "25K+", performance: "99.5%", rating: "4.8" },
      icon: Server
    },
    {
      id: 3,
      title: "TaskFlow Mobile",
      subtitle: "Productivity App",
      description: "Cross-platform mobile app untuk task management dengan offline sync dan push notifications.",
      tech: ["React Native", "Expo", "Firebase", "Redux"],
      category: "mobile",
      primaryTech: "react",
      color: "from-emerald-400 to-teal-600",
      accent: "emerald",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "15K+", performance: "98.7%", rating: "4.9" },
      icon: Smartphone
    },
    {
      id: 4,
      title: "CodeFlow Studio",
      subtitle: "Developer Platform",
      description: "Real-time collaborative coding environment dengan AI code completion dan integrated DevOps pipeline.",
      tech: ["Next.js", "TypeScript", "WebRTC", "Prisma"],
      category: "web",
      primaryTech: "nextjs",
      color: "from-purple-400 to-pink-600",
      accent: "purple",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "5K+", performance: "99.5%", rating: "4.9" },
      icon: Monitor
    },
    {
      id: 5,
      title: "Shopping Companion",
      subtitle: "AR Shopping App",
      description: "Mobile shopping app dengan AR product preview, barcode scanning, dan price comparison features.",
      tech: ["Flutter", "Dart", "Firebase", "ARCore"],
      category: "mobile",
      primaryTech: "flutter",
      color: "from-blue-400 to-indigo-600",
      accent: "blue",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "8K+", performance: "97.8%", rating: "4.7" },
      icon: Smartphone
    },
    {
      id: 6,
      title: "Blog CMS Platform",
      subtitle: "Content Management",
      description: "Full-featured CMS dengan WYSIWYG editor, media management, dan multi-user capabilities.",
      tech: ["Laravel", "Vue.js", "MySQL", "AWS"],
      category: "web",
      primaryTech: "laravel",
      color: "from-orange-400 to-red-600",
      accent: "orange",
      demoUrl: "#",
      githubUrl: "#",
      metrics: { users: "12K+", performance: "98.9%", rating: "4.8" },
      icon: Server
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'web', label: 'Web Apps', icon: Monitor },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ];

  // Tech stack filters
  const techStacks = [
    { id: 'all', label: 'All Tech', color: 'from-gray-400 to-gray-600' },
    { id: 'react', label: 'React/RN', color: 'from-cyan-400 to-blue-500' },
    { id: 'nextjs', label: 'Next.js', color: 'from-purple-400 to-pink-500' },
    { id: 'laravel', label: 'Laravel', color: 'from-red-400 to-orange-500' },
    { id: 'flutter', label: 'Flutter', color: 'from-blue-400 to-indigo-500' }
  ];

  // Filter projects based on selected filters
  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = selectedTech === 'all' || project.primaryTech === selectedTech;
    return categoryMatch && techMatch;
  });

  const availableTechs = useMemo(() => {
    if (selectedCategory === 'all') return techStacks;

    // Ambil primaryTech unik dari proyek dalam kategori terpilih
    const validTechIds = new Set(
      allProjects
        .filter(project => project.category === selectedCategory)
        .map(project => project.primaryTech)
    );

    // Selalu tampilkan 'all'
    return techStacks.filter(
      stack => stack.id === 'all' || validTechIds.has(stack.id)
    );
  }, [selectedCategory, allProjects, techStacks]);

  useEffect(() => {
    const validTechs = new Set(
      allProjects
        .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
        .map(project => project.primaryTech)
    );
    if (selectedTech !== 'all' && !validTechs.has(selectedTech)) {
      setSelectedTech('all');
    }
  }, [selectedCategory, selectedTech, allProjects]);


  useEffect(() => {
    setActiveProject(0);
    setIsAutoPlay(false);
  }, [selectedCategory, selectedTech]);


  useEffect(() => {
    const validTechs = new Set(
      allProjects
        .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
        .map(project => project.primaryTech)
    );
    if (selectedTech !== 'all' && !validTechs.has(selectedTech)) {
      setSelectedTech('all');
    }
  }, [selectedCategory, selectedTech, allProjects]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const currentProject = filteredProjects[activeProject] || filteredProjects[0];

  if (filteredProjects.length === 0) {
  return (
    <section className="min-h-screen flex items-center justify-center text-white text-xl">
      No projects match your filter.
    </section>
  );
}


  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-white/80 text-sm font-medium">Selected Works</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          {/* Category Filter */}
          <div className="flex gap-3">
            <span className="text-white/60 text-sm font-medium self-center mr-2">Platform:</span>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Tech Stack Filter */}
          <div className="flex gap-3">
            <span className="text-white/60 text-sm font-medium self-center mr-2">Tech:</span>
            {availableTechs.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedTech === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {tech.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== 'all' || selectedTech !== 'all') && (
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white/60 text-sm">Showing:</span>
              <div className="flex gap-2">
                {selectedCategory !== 'all' && (
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                )}
                {selectedTech !== 'all' && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {techStacks.find(t => t.id === selectedTech)?.label}
                  </span>
                )}
              </div>
              <span className="text-white/40 text-sm">
                ({filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''})
              </span>
            </div>
          </div>
        )}

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentProject.color}`} />
                <span className="text-white/60 uppercase tracking-wider text-sm font-semibold">
                  {currentProject.subtitle}
                </span>
                <div className="flex items-center gap-1 ml-2">
                  <currentProject.icon className="w-4 h-4 text-white/40" />
                  <span className="text-white/40 text-xs capitalize">{currentProject.category}</span>
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {currentProject.title}
              </h3>
              
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {currentProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-white/80 font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/90 font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-2xl font-bold text-${currentProject.accent}-400`}>
                  {currentProject.metrics.users}
                </div>
                <div className="text-white/60 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold text-${currentProject.accent}-400`}>
                  {currentProject.metrics.performance}
                </div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold text-${currentProject.accent}-400 flex items-center justify-center gap-1`}>
                  <Star className="w-5 h-5 fill-current" />
                  {currentProject.metrics.rating}
                </div>
                <div className="text-white/60 text-sm">Rating</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={currentProject.demoUrl}
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentProject.color} rounded-lg text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <Zap className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={currentProject.githubUrl}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>

          {/* Project Visual */}
          <div className="relative">
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${currentProject.color} p-1`}>
              <div className="w-full h-full bg-black/90 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Category-specific visual */}
                <div className="absolute inset-4 border border-white/20 rounded-2xl">
                  <div className="flex items-center gap-2 p-3 border-b border-white/10">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <currentProject.icon className="w-4 h-4 text-white/40 ml-auto" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-3 bg-white/20 rounded-full w-3/4" />
                    <div className="h-3 bg-white/10 rounded-full w-1/2" />
                    <div className="h-3 bg-white/20 rounded-full w-2/3" />
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className={`h-16 bg-gradient-to-r ${currentProject.color} opacity-50 rounded-lg`} />
                      <div className={`h-16 bg-gradient-to-r ${currentProject.color} opacity-30 rounded-lg`} />
                    </div>
                  </div>
                </div>
                
                {/* Tech stack indicator */}
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white/60">
                  {currentProject.tech[0]}
                </div>
                
                {/* Floating elements */}
                <div className={`absolute top-8 right-8 w-4 h-4 bg-${currentProject.accent}-400 rounded-full animate-ping`} />
                <div className={`absolute bottom-8 left-8 w-6 h-6 bg-${currentProject.accent}-400 opacity-50 rounded-lg animate-pulse`} />
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center items-center gap-8">
          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 hover:bg-white/20 transition-all duration-300"
          >
            {isAutoPlay ? 'Pause' : 'Play'}
          </button>

          {/* Project dots */}
          <div className="flex gap-3">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(index);
                  setIsAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? `bg-gradient-to-r ${project.color}`
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Project counter */}
          <div className="text-white/60 font-mono">
            <span className="text-white font-bold">{String(activeProject + 1).padStart(2, '0')}</span>
            {' / '}
            <span>{String(filteredProjects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Clear Filters Button */}
        {(selectedCategory !== 'all' || selectedTech !== 'all') && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech('all');
              }}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 hover:bg-white/20 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block">
            <div className="text-white/40 mb-4">Interested in collaboration?</div>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;