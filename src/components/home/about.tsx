"use client";

import React from 'react';
import { motion }  from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Palette, Rocket, CoffeeIcon, Zap } from 'lucide-react';
// import { AMarquee } from './marquee';

const interests = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable and elegant code' },
  { icon: Palette, title: 'Design Systems', description: 'Creating consistent user experiences' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and efficiency' },
];

const experience = [
  {
    year: 'Until Now',
    title: 'Full Stack Developer',
    description: 'Built multiple client projects using React, Node.js, and cloud technologies.'
  },
  {
    year: '2022-2023',
    title: 'Frontend Developer',
    description: 'Specialized in creating responsive and accessible user interfaces.'
  },
  {
    year: '2022',
    title: 'Started Coding Journey',
    description: 'Began learning web development and fell in love with creating digital solutions.'
  }
]

export function About() {
  return (
    <section id='about' className='min-h-screen flex justify-center items-center py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='mb-12'>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About Me
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mt-2 origin-left"
              />
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="overflow-hidden py-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Hello, I&apos;m Flexsy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A passionate fullstack developer from Indonesia with a love for creating 
                    digital experiences that matter. I believe in the power of clean code, 
                    thoughtful design, and continuous learning.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                    contributing to open source projects, or perfecting my coffee brewing skills.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary">🇮🇩 Indonesia</Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Code2 size={30} color='blue'/>
                      <span>Full Stack Web Developer</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <CoffeeIcon size={30} color='brown'/>
                      <span>Coffee Lover</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Zap size={30} width={30} color='yellow'/>
                      <span>Freelancer</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

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
                    {experience.map((item, index) => (
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

        {/* <AMarquee /> */}
      </div>
    </section>
  );
}