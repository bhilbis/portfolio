"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bhilbis123@gmail.com",
    href: "mailto:bhilbis123@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 8591 8395 3992",
    href: "https://wa.me/62859183953992?text=Halo%20[Nama%20Kamu],%20saya%20ingin%20diskusi%20lebih%20lanjut%20setelah%20melihat%20portfolio%20Anda.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pasuruan, Jawa Timur",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
];

export function FooterContact() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
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
              Get In Touch
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
            Let’s connect and create something great together.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-4 rounded-xl hover:shadow-lg transition dark:hover:bg-white/5 hover:bg-black/5 group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
              >
                <info.icon className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {info.label}
                </p>
                <p className="text-base font-medium text-neutral-800 dark:text-white">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
