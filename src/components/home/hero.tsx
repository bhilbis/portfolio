"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useThemeStore } from '@/context/theme-context';

export function Hero() {
  const theme = useThemeStore((state: { theme: string }) => state.theme)
  const isDark = theme === 'dark'

  return (
    <section id='home' className='relative h-screen w-full flex flex-col lg:flex-row max-w-7xl items-center justify-center overflow-hidden lg:px-6 text-center lg:text-left mt-20 lg:mt-0'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='z-10 max-w-xl'
      >
        <h1 className='text-4xl md:text-6xl font-bold'>Hi, I&apos;m Flexsy</h1>
        <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>
          Fullstack Developer & Creative Explorer
        </p>
        <Button className='mt-6 hover:-translate-y-0.5 transition duration-200 hover:bg-neutral-500'>
          <a href="#projects" className="px-6 py-2 rounded ">
            View Projects
          </a>
        </Button>
      </motion.div>
      
      <Canvas className='absolute -top-20 lg:top-0 right-0 w-full h-full z-0' camera={{ position: [0, 0, 4]}}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[1, 1, 1]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5}/>
        <Sphere args={[1, 64, 64]} scale={1.65}>
          <MeshDistortMaterial 
            color={isDark ? '#1e40af' : '#6366f1'}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
          />
        </Sphere>
      </Canvas>
    </section>
  )
}
