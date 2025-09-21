"use client"
import React from 'react';

const CollaborationCTA = () => {
  return (
    <div className="text-center mt-12 sm:mt-20 pb-8 sm:pb-12">
      <div className="inline-block">
        <div className="text-black/90 dark:text-white/40 text-lg mb-3 sm:mb-4">Interested in collaboration?</div>
        <button className="group relative px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm sm:text-base font-semibold overflow-hidden">
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CollaborationCTA;