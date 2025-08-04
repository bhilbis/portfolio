"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { TypingAnimation } from '../magicui/typing-animation';

export function Hero() {

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
        className='relative z-10 max-w-2xl lg:max-w-xl space-y-6 text-center justify-center'
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
          className="flex flex-col gap-2 justify-center items-center"
        >
          <TypingAnimation 
            sentences={["Web Developer", "Tech Enthusiast"]}
            typingSpeed={100}
            deletingSpeed={40}
            delayBetween={2000}
            className='text-xl md:text-2xl font-semibold text-primary'
          />
          <p className='text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed text-center'>
            Crafting digital experiences with modern technologies and creative solutions. 
            Passionate about clean code and innovative design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 items-center justify-center pt-4'
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