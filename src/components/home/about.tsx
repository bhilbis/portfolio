"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Palette, Rocket, Heart, Coffee, Music } from 'lucide-react';

const skills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Database Design', level: 85 }
];

const interests = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and elegant code' },
  { icon: Palette, title: 'Design Systems', description: 'Creating consistent user experiences' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and efficiency' },
  { icon: Heart, title: 'Open Source', description: 'Contributing to the community' },
  { icon: Coffee, title: 'Coffee Brewing', description: 'Perfect espresso is an art form' },
  { icon: Music, title: 'Music Production', description: 'Creating beats in my spare time' }
];

export function About() {
  return (
    <section id='about' className='min-h-screen flex justify-center items-center py-20'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full w-24 mx-auto origin-left"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Hello, I'm Flexsy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A passionate fullstack developer from Indonesia with a love for creating 
                  digital experiences that matter. I believe in the power of clean code, 
                  thoughtful design, and continuous learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or perfecting my coffee brewing skills.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary">🇮🇩 Indonesia</Badge>
                  <Badge variant="secondary">💻 Full Stack</Badge>
                  <Badge variant="secondary">🎨 UI/UX</Badge>
                  <Badge variant="secondary">☕ Coffee Lover</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Interests & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="interests" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="interests">Interests</TabsTrigger>
                <TabsTrigger value="journey">Journey</TabsTrigger>
              </TabsList>
              
              <TabsContent value="interests" className="space-y-4">
                <div className="grid gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-muted rounded-lg">
                              <interest.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{interest.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {interest.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="journey" className="space-y-4">
                <div className="space-y-6">
                  {[
                    {
                      year: '2024',
                      title: 'Senior Full Stack Developer',
                      description: 'Leading development of scalable web applications with modern tech stack.'
                    },
                    {
                      year: '2023',
                      title: 'Full Stack Developer',
                      description: 'Built multiple client projects using React, Node.js, and cloud technologies.'
                    },
                    {
                      year: '2022',
                      title: 'Frontend Developer',
                      description: 'Specialized in creating responsive and accessible user interfaces.'
                    },
                    {
                      year: '2021',
                      title: 'Started Coding Journey',
                      description: 'Began learning web development and fell in love with creating digital solutions.'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-8 border-l-2 border-muted"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}