"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  sentences: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  sentences,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;

    const currentSentence = sentences[sentenceIndex % sentences.length]

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }, deletingSpeed);
    } else {
      if (displayedText === currentSentence) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, typingSpeed)
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [displayedText, isDeleting, sentenceIndex, sentences, started, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </MotionComponent>
  );
}