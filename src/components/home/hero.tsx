"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useThemeStore } from '@/context/theme-context';
import { ArrowDown } from 'lucide-react';
import { TypingAnimation } from '../magicui/typing-animation';

function Scene({ isDark }: { isDark: boolean }) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.6} />
      <spotLight
        position={[15, 20, 5]}
        angle={0.3}
        penumbra={1}
        intensity={isDark ? 1 : 0.3}
      />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={isDark ? 0.8 : 0.3}
        color={isDark ? "#8b5cf6" : "#facc15"}
      />
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={isDark ? 0.5 : 0.2}
        color={isDark ? "#38bdf8" : "#60a5fa"}
      />
      
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <Sphere args={[1.2, 64, 64]} scale={1.4}>
          <MeshDistortMaterial 
            color={isDark ? '#818cf8' : '#3b82f6'}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive={isDark ? '#1e1b4b' : '#93c5fd'}
            emissiveIntensity={isDark ? 0.15 : 0.05}
          />
        </Sphere>
      </Float>
      
      {/* Additional floating elements */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        position={[2, 1, -2]}
      >
        <Sphere args={[0.2, 32, 32]}>
          <MeshDistortMaterial 
            color={isDark ? '#ec4899' : '#0ea5e9'}
            distort={0.5}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            emissive={isDark ? '#312e81' : '#bae6fd'}
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>
      
      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={0.8}
        position={[-2, -1, -1]}
      >
        <Sphere args={[0.15, 32, 32]}>
          <MeshDistortMaterial 
            color={isDark ? '#10b981' : '#f59e0b'}
            distort={0.4}
            speed={1.8}
            roughness={0.1}
            metalness={0.7}
            emissive={isDark ? '#064e3b' : '#fef3c7'}
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
    </>
  )
}

export function Hero() {
  const theme = useThemeStore((state: { theme: string }) => state.theme)
  const isDark = theme === 'dark'

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='relative h-screen w-full flex flex-col lg:flex-row max-w-7xl items-center justify-center overflow-hidden px-4 lg:px-6 text-center lg:text-left lg:mt-0'>
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 dark:from-background/90 dark:via-background/70 dark:to-background/95 z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='relative z-10 max-w-2xl lg:max-w-xl space-y-6'
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block"
        >
          <span className="text-sm md:text-base font-medium text-primary bg-primary/10 px-3 py-1 z-30 rounded-full border border-primary/20">
            👋 Hello, I&apos;m
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Flexsy Bilbis Triwibowo
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-2"
        >
          <TypingAnimation 
            sentences={["Full Stack Developer", "Tech Enthusiast"]}
            typingSpeed={100}
            deletingSpeed={40}
            delayBetween={2000}
            className='text-xl md:text-2xl font-semibold text-primary'
          />
          <p className='text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed'>
            Crafting digital experiences with modern technologies and creative solutions. 
            Passionate about clean code and innovative design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4'
        >
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className='group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            onClick={scrollToAbout}
            variant="outline" 
            size="lg"
            className='hidden lg:flex px-8 py-3 lg:items-center rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1'
          >
            About Me
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] lg:flex-1 z-0'
      >
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 55 }}
          className="w-full h-full"
        > 
          <fog attach="fog" args={[isDark ? '#0f0f1f' : '#f0f0f0', 5, 15]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Scene isDark={isDark} />
        </Canvas>
        
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-60"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-secondary rounded-full opacity-40"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}