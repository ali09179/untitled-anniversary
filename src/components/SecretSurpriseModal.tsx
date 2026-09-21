import React, { useState } from 'react';
import { Heart, Sparkles, X, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SecretSurpriseModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="secret-surprise" className="relative py-12 px-4 text-center">
      {/* Glowing Mysterious Button */}
      <div className="max-w-md mx-auto">
        <motion.button
          id="secret-surprise-button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen(true)}
          className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-base sm:text-lg shadow-2xl shadow-rose-500/40 cursor-pointer animate-pulse-glow transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-amber-200 animate-spin [animation-duration:6s]" />
          <span>One More Little Secret, My Love? 🥺💖</span>
          <Sparkles className="w-5 h-5 text-amber-200 animate-spin [animation-duration:6s]" />
        </motion.button>
        <p className="text-xs text-rose-600/80 mt-3 italic">
          Click above for a quiet, final secret message from Ali
        </p>
      </div>

      {/* Full-Screen Surprise Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="secret-surprise-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-[#1C050C]/95 via-[#2B0A16]/95 to-[#1C050C]/95 backdrop-blur-xl text-rose-100 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Romantic floating background particles / sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
            </div>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 border border-rose-300/30 shadow-2xl my-8 text-center"
            >
              {/* Close Button */}
              <button
                id="close-secret-surprise"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-rose-200 hover:text-white transition cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Sparkle Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-pink-200 text-xs font-semibold mb-6">
                <Gift className="w-3.5 h-3.5 text-pink-300" />
                <span>Ali&apos;s Secret Message</span>
              </div>

              {/* Heading */}
              <h2 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Hey, My Beautiful Wifeyy... ❤️
              </h2>

              {/* Text Body from Prompt */}
              <div className="space-y-4 text-rose-100/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-xl mx-auto text-left sm:text-center">
                <p className="font-cursive text-xl sm:text-2xl text-pink-300 font-semibold text-center">
                  I just want you to remember something.
                </p>

                <p>
                  That first message we sent on <strong>22 April 2025</strong> will always be a special memory for me.
                </p>

                <p className="italic text-pink-200">
                  It reminds me that beautiful things can begin with the smallest moments.
                </p>

                <p>
                  I&apos;m grateful that we started talking, grateful for the memories we have made, and hopeful for all the beautiful moments still ahead of us.
                </p>

                <p className="p-4 rounded-2xl bg-white/5 border border-rose-400/20 text-pink-100">
                  I&apos;m sorry for the mistakes I have made, and I hope to keep learning how to treat your heart with the care and love it deserves.
                </p>

                <div className="py-2 space-y-1 text-center font-serif-romantic text-lg sm:text-xl text-pink-200 font-semibold">
                  <p>You are precious to me.</p>
                  <p>You are appreciated.</p>
                  <p>And you are loved.</p>
                </div>

                <p className="font-cursive text-2xl sm:text-3xl text-pink-300 font-bold text-center pt-2">
                  Happy Monthly First-Text Anniversary, my wifeyy.
                </p>

                <p className="text-center text-rose-200 text-sm sm:text-base">
                  Here&apos;s to our little tradition on the 22nd and to all the memories we have yet to create.
                </p>

                <div className="pt-4 text-center">
                  <span className="font-cursive text-xl text-pink-300">Forever yours,</span>
                  <p className="font-cursive text-3xl sm:text-4xl text-rose-300 font-bold mt-1">
                    Ali ❤️💍
                  </p>
                </div>
              </div>

              {/* Large Glowing Animated Heart */}
              <div className="mt-8 pt-6 border-t border-rose-400/20 flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 bg-rose-500/40 rounded-full blur-2xl animate-pulse" />
                  <motion.div
                    animate={{
                      scale: [1, 1.22, 1, 1.3, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: 'easeInOut',
                    }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-red-500 flex items-center justify-center shadow-2xl shadow-rose-500/60"
                  >
                    <Heart className="w-10 h-10 text-white fill-white" />
                  </motion.div>
                </div>

                {/* Final Banner requested in prompt */}
                <h3 className="font-serif-romantic text-xl sm:text-2xl md:text-3xl font-extrabold text-pink-200 tracking-wider">
                  ONE FIRST TEXT. SO MANY BEAUTIFUL MEMORIES. ❤️
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
