import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onOpenSurprise: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpenSurprise }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onOpenSurprise();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="welcome-screen-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FFF0F3] via-[#FFE4E6] to-[#FCE7F3] p-6 text-center overflow-hidden"
        >
          {/* Dreamy soft gradient ambient orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pink-200/25 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative floating mini-hearts */}
          <div className="absolute top-12 left-10 text-rose-300 animate-float-slow opacity-60">
            <Heart className="w-8 h-8 fill-rose-200" />
          </div>
          <div className="absolute bottom-16 left-12 text-pink-300 animate-float-slow opacity-50 [animation-delay:1.5s]">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="absolute top-20 right-12 text-rose-300 animate-float-slow opacity-60 [animation-delay:2s]">
            <Heart className="w-9 h-9 fill-rose-200" />
          </div>
          <div className="absolute bottom-20 right-14 text-purple-300 animate-float-slow opacity-50 [animation-delay:3s]">
            <Sparkles className="w-8 h-8" />
          </div>

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 max-w-xl mx-auto glass-romantic p-8 sm:p-12 rounded-3xl shadow-2xl border border-rose-200/80"
          >
            {/* Gently beating animated heart with soft glowing halo */}
            <div className="relative mx-auto mb-7 w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-rose-400/25 rounded-full blur-xl animate-pulse" />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
                className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 flex items-center justify-center shadow-lg shadow-rose-500/30"
              >
                <Heart className="w-10 h-10 text-white fill-white" />
              </motion.div>
            </div>

            {/* Tag badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>A Special Milestone From Ali</span>
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            </div>

            {/* Welcome Display Title */}
            <h1 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-bold text-rose-900 mb-5 leading-tight tracking-tight">
              Hey, My Beautiful Wifeyy <span className="text-rose-500">❤️</span>
            </h1>

            {/* Subtext */}
            <p className="font-cursive text-2xl sm:text-3xl text-rose-800/90 mb-4 leading-relaxed">
              &ldquo;I made something special for the girl who made one ordinary message become such a beautiful part of my life.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-rose-900/70 mb-8 max-w-md mx-auto leading-relaxed">
              Take a quiet breath, my love, and step inside our little memory sanctuary.
            </p>

            {/* Glowing button */}
            <motion.button
              id="open-surprise-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleClick}
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white font-semibold text-base sm:text-lg shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 cursor-pointer animate-pulse-glow"
            >
              <span>Open Your Little Surprise 💌</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
