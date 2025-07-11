"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, LucideLinkedin, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"

const ConnectWithMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md flex flex-col items-center gap-6"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-2 text-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="rounded-full border border-gray-300 dark:border-neutral-700 shadow-md overflow-hidden"
        >
            <Image
            src=""
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
            />
        </motion.div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-light">Flexsy Bilbis Triwibowo</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm italic">Web Developer | Tech Enthusiast</p>
      </motion.div>

      <div className="w-full flex flex-col gap-3">
        <SocialLink
          icon={<LucideLinkedin size={20} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/yourusername/"
          delay={0.3}
        />
        <SocialLink
          icon={<Instagram size={20} />}
          label="Instagram"
          href="https://www.instagram.com/yourusername/"
          delay={0.4}
        />
        <SocialLink
          icon={<Github size={20} />}
          label="GitHub"
          href="https://github.com/yourusername"
          delay={0.5}
        />
      </div>

      <motion.div whileHover={{ scale: 1.03 }} className="mt-6">
        <Link href="/" className="mt-6">
            <Button variant="outline" className="gap-2 transition hover:shadow-md">
            <ArrowLeft size={16} />
                Kembali ke Beranda
            </Button>
        </Link>
      </motion.div>

    </motion.div>
  );
};

const SocialLink = ({ 
    icon, 
    label, 
    href, 
    delay = 0

}: { 
    icon: React.ReactNode;
    label: string;
    href: string;
    delay?: number;
}) => (
  <motion.a
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, backgroundColor: "var(--tw-bg-opacity)" }}
    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition shadow border dark:border-neutral-700"
  >
    <motion.div whileHover={{ rotate: 10 }} className="text-gray-600 dark:text-gray-300">
        {icon}
    </motion.div>
    <span className="text-sm font-medium text-gray-900 dark:text-white">{label}</span>
  </motion.a>
);

export default ConnectWithMe;
