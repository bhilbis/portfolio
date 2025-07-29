"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Home, ArrowLeft, Zap, Star, RefreshCw } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  direction: number
}

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [glitchActive, setGlitchActive] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.2,
      direction: Math.random() * Math.PI * 2
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + Math.cos(particle.direction) * particle.speed * 0.1 + 100) % 100,
        y: (particle.y + Math.sin(particle.direction) * particle.speed * 0.1 + 100) % 100,
        direction: particle.direction + 0.01
      })))
    }, 50)

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(glitchInterval)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  const handle404Click = () => {
    setClickCount(prev => prev + 1)
    setGlitchActive(true)
    setTimeout(() => setGlitchActive(false), 300)
  }

  const getRandomOffset = () => glitchActive ? Math.random() * 4 - 2 : 0

  return (
    <div 
      className="min-h-screen relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-indigo-400 dark:bg-purple-400 transition-colors duration-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translate(${getRandomOffset()}px, ${getRandomOffset()}px)`,
              animation: `pulse ${2 + particle.id * 0.1}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Glow */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.3), transparent 70%)`
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-20 h-20 border-2 border-indigo-300 dark:border-purple-400 rotate-45 opacity-20 transition-all duration-1000"
          style={{ 
            left: `${20 + mousePosition.x * 0.1}%`, 
            top: `${30 + mousePosition.y * 0.05}%`,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-12 h-12 bg-blue-200 dark:bg-indigo-600 rounded-full opacity-30 transition-all duration-1000"
          style={{ 
            right: `${15 + mousePosition.x * 0.08}%`, 
            top: `${60 + mousePosition.y * 0.03}%`,
            animation: 'float 4s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-16 h-16 border border-purple-300 dark:border-yellow-400 rounded-full opacity-25 transition-all duration-1000"
          style={{ 
            left: `${70 + mousePosition.x * 0.06}%`, 
            bottom: `${20 + mousePosition.y * 0.04}%`,
            animation: 'float 5s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Interactive 404 Number */}
        <div className="mb-8 relative cursor-pointer" onClick={handle404Click}>
          <h1 
            className={`text-8xl md:text-9xl font-black text-gray-800 dark:text-white transition-all duration-300 select-none ${
              glitchActive ? 'animate-pulse' : ''
            }`}
            style={{
              transform: `translate(${getRandomOffset()}px, ${getRandomOffset()}px)`,
              textShadow: glitchActive 
                ? '3px 3px 0px #ff0080, -3px -3px 0px #00ff80' 
                : 'none',
              filter: glitchActive ? 'hue-rotate(90deg)' : 'none'
            }}
          >
            4
            <span 
              className="inline-block mx-2 transition-transform duration-500 hover:scale-110"
              style={{
                animation: 'bounce 2s ease-in-out infinite',
                animationDelay: '0.5s'
              }}
            >
              0
            </span>
            4
          </h1>
          
          {/* Dynamic Floating Icons */}
          <Star 
            className="absolute -top-8 -left-8 w-8 h-8 text-yellow-500 dark:text-yellow-400 transition-all duration-500"
            style={{
              animation: 'spin 8s linear infinite',
              opacity: clickCount > 2 ? 1 : 0.7
            }}
          />
          <Zap 
            className="absolute -top-4 -right-8 w-6 h-6 text-blue-500 dark:text-purple-400 transition-all duration-500"
            style={{
              animation: 'bounce 3s ease-in-out infinite',
              animationDelay: '1s',
              transform: glitchActive ? 'scale(1.5) rotate(180deg)' : 'scale(1)'
            }}
          />
          <RefreshCw 
            className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 text-indigo-500 dark:text-cyan-400 transition-all duration-500 ${
              clickCount > 0 ? 'animate-spin' : ''
            }`}
            style={{ opacity: clickCount > 0 ? 1 : 0 }}
          />
        </div>

        {/* Animated Text Content */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-500">
            <span className="inline-block hover:scale-105 transition-transform cursor-default">Oops!</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform cursor-default">Halaman</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform cursor-default">Hilang</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-500">
            Sepertinya kamu tersesat di dimensi digital 🌌
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Klik angka 404 untuk efek keren!</span>
            {clickCount > 0 && (
              <span className="text-indigo-500 dark:text-purple-400 font-semibold animate-pulse">
                {clickCount}x clicked! 🎉
              </span>
            )}
          </div>
        </div>

        {/* Interactive Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-purple-500 dark:to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Home size={20} />
                Kembali ke Beranda
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Interactive Info Card */}
        <div 
          className="group mt-8 p-6 rounded-2xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-gray-700/40 transition-all duration-500 hover:scale-105 hover:bg-white/80 dark:hover:bg-gray-800/80 cursor-default"
          style={{
            transform: `translateY(${Math.sin(Date.now() * 0.001) * 2}px)`
          }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500">
            💡 <strong>Tips:</strong> Gerakkan mouse untuk efek visual yang keren!
          </p>
          <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  )
}