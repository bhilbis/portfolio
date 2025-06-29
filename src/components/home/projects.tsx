"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FolderCard  from '../ui/folder-card';

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden rounded-xl" ref={containerRef}>
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Proyek Unggulan Saya
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mt-2 origin-left"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Showcase proyek inovatif yang menunjukkan keunggulan teknis dan solusi kreatif.
          </motion.p>
        </motion.div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> */}
          <FolderCard />
        {/* </div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-gray-200 dark:border-gray-700 max-w-2xl mx-auto p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mari berkolaborasi untuk mewujudkan visi Anda dengan teknologi mutakhir dan desain inovatif.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-3 rounded-full shadow-lg"
              onClick={() => {
                const element = document.querySelector('#contact-section'); // Menggunakan ID yang konsisten
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Mari Bekerja Sama
            </Button>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}