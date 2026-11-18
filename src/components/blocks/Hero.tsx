import React from 'react';
import { motion } from 'framer-motion';
import { tokens } from '../../config/tokens';

export const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen p-[var(--space-lg)]"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: parseFloat(tokens.motion.duration) / 1000, ease: tokens.motion.ease }}
    >
      <motion.h1
        className="font-bold text-center"
        style={{
          fontSize: 'clamp(var(--font-size-h1-mobile), 10vw, var(--font-size-h1-desktop))',
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: parseFloat(tokens.motion.duration) / 1000, ease: tokens.motion.ease }}
      >
        Axiom Artifacts
      </motion.h1>
      <motion.button
        className="mt-[var(--space-lg)] px-[var(--space-lg)] py-[var(--space-md)] border-2 border-[var(--color-accent)] uppercase tracking-wider"
        style={{
          color: 'var(--color-text-primary)',
          transition: `all ${tokens.motion.duration} ${tokens.motion.ease}`,
        }}
        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)' }}
        whileTap={{ scale: 0.95 }}
      >
        Explore
      </motion.button>
    </motion.section>
  );
};
