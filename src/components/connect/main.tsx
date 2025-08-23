"use client";
import { Instagram, Linkedin, Github, MoveUpRight, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/context/theme-context";
import Image from "next/image";

const Particle = ({ delay = 0 }) => {
  const [position, setPosition] = useState({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
  });

  useEffect(() => {
    const updatePosition = () => {
      if (typeof window !== 'undefined') {
        setPosition({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
      }
    };

    const interval = setInterval(updatePosition, 8000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full blur-sm pointer-events-none"
    />
  );
};

const FloatingOrb = ({ size = "w-32 h-32", delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [0.8, 1.2, 0.8],
        rotate: 360,
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${size} rounded-full blur-3xl pointer-events-none ${className}`}
    />
  );
};

const ConnectWithMe = () => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-neutral-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="absolute inset-0">
        <FloatingOrb 
          size="w-64 h-64" 
          delay={0} 
          className="top-10 left-10 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700" 
        />
        <FloatingOrb 
          size="w-48 h-48" 
          delay={2} 
          className="top-1/3 right-10 bg-gradient-to-r from-pink-400 to-red-500 dark:from-pink-600 dark:to-red-700" 
        />
        <FloatingOrb 
          size="w-56 h-56" 
          delay={4} 
          className="bottom-20 left-1/4 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700" 
        />
        <FloatingOrb 
          size="w-40 h-40" 
          delay={6} 
          className="bottom-10 right-1/3 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700" 
        />

        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4 text-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse" />
                <div className="relative w-24 h-24 rounded-full border-2 border-white/30 dark:border-white/20 shadow-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    <Image src="/31.webp" alt="Profile" width={96} height={96} />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.div>

              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                >
                  Flexsy Bilbis Triwibowo
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 text-sm mt-1 flex items-center gap-1 justify-center"
                >
                  <MapPin className="w-3 h-3" />
                  Web Developer | Tech Enthusiast
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
              >
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-yellow-400'}`} />
                <span>{isDark ? 'Dark' : 'Light'} Mode</span>
              </motion.div>
            </motion.div>

            <div className="space-y-3">
              <SocialLink
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/flexsy-bilbis-triwibowo/"
                delay={0.7}
                color="from-blue-500 to-blue-600"
              />
              <SocialLink
                icon={<Instagram size={20} />}
                label="Instagram"
                href="https://www.instagram.com/net_flxsy/"
                delay={0.8}
                color="from-pink-500 to-purple-600"
              />
              <SocialLink
                icon={<Github size={20} />}
                label="GitHub"
                href="https://github.com/bhilbis"
                delay={0.9}
                color="from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600"
              />
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400 z-20">
              <a
                href="https://flexsybilbis.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                Another  
                <motion.span>
                  <ArrowRight width={16}/>
                </motion.span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5] 
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity 
                    }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({
  icon,
  label,
  href,
  delay = 0,
  color = "from-gray-500 to-gray-700"
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  delay?: number;
  color?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10`}
      />
      
      <div className="relative flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
          >
            {icon}
          </motion.div>
          <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        </div>
        
        <motion.div
          animate={{ 
            rotate: isHovered ? 45 : 0,
            scale: isHovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.2 }}
          className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300"
        >
          <MoveUpRight size={16} />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: "-100%", skewX: -15 }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
        className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.a>
  );
};

export default ConnectWithMe;