"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOCAL_STORAGE_KEY = "hasVisited";

const LoadingScreen = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!hasVisited) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, "true");
      }, 2500); // Duration of loading

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6"
          >
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-primary mb-4"></div>
            <h1 className="text-lg font-medium tracking-wide">
              Best experience using <span className="font-bold">desktop</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Preparing your experience...
            </p>
          </motion.div>

          <div className="mt-6 w-full max-w-xs mx-auto">
            <motion.div
              className="h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
