"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Minus, Plus } from 'lucide-react';

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack web development services including frontend development with React/Next.js, backend development with Node.js, and database design. I specialize in creating responsive, accessible, and performant web applications."
  },
  {
    question: "What is your development process?",
    answer: [
      "Requirements gathering and project planning",
      "Design and prototyping",
      "Development with regular client check-ins",
      "Testing and quality assurance",
      "Deployment",
      "Ongoing support and maintenance as needed"
    ]
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline estimate during our initial consultation."
  },
  {
    question: "Do you offer maintenance after the project is complete?",
    answer: "Yes, I offer ongoing maintenance and support packages to ensure your website or application continues to run smoothly. This includes regular updates, security patches, and addressing any issues that may arise."
  },
  {
    question: "What technologies do you work with?",
    answer: "I work with modern web technologies including React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and various CSS frameworks like Tailwind CSS. I'm always learning new technologies to stay current with industry trends."
  },
  {
    question: "How do we get started working together?",
    answer: "Getting started is easy! Just reach out through the contact form or email me directly. We'll schedule an initial consultation to discuss your project requirements, timeline, and budget. From there, I'll provide a proposal and we can move forward with the development process."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 max-w-7xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg max-w-3xl text-gray-700 dark:text-gray-300 mx-auto">
          Here are answers to some common questions about my services and process.
          If you don&apos;t see your question here, feel free to reach out directly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="group border-b">
              <AccordionTrigger className="py-6 text-left font-semibold text-2xl hover:no-underline">
                <span>
                    {item.question}
                </span>
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Plus className="h-5 w-5 absolute transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                    <Minus className="h-5 w-5 absolute transition-transform duration-300 group-data-[state=open]:rotate-0 group-data-[state=closed]:-rotate-90 group-data-[state=closed]:opacity-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {Array.isArray(item.answer) ? (
                    <ul className="list-disc pl-6 space-y-2">
                    {item.answer.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                ) : (
                    item.answer
                )}
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}