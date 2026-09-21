import React, { useState } from 'react';
import { Heart, Sparkles, X, MailOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LoveLetterEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="interactive-love-letter" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-semibold mb-2">
          <MailOpen className="w-3.5 h-3.5 text-rose-500" />
          <span>Special Interactive Envelope</span>
        </div>
        <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-rose-950">
          An Envelope Sealed With Love
        </h2>
        <p className="text-xs sm:text-sm text-rose-700/80 mt-1">
          Click below to unseal and read the heartfelt letter inside
        </p>
      </div>

      <div className="flex justify-center">
        {!isOpen ? (
          /* Closed 3D Envelope View */
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative bg-gradient-to-b from-[#FFF5F6] to-[#FFE2E6] rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-rose-300/80 text-center overflow-hidden">
              {/* Envelope flap aesthetic styling */}
              <div
                className="absolute -top-1 left-0 right-0 h-28 bg-gradient-to-b from-rose-200/90 to-rose-100/30 [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-rose-300/60 shadow-sm"
              />

              <div className="relative z-10 pt-10 pb-4">
                {/* Heart Wax Seal */}
                <div className="relative mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 flex items-center justify-center text-white shadow-xl border-2 border-rose-200 cursor-pointer animate-pulse-glow">
                  <Heart className="w-8 h-8 fill-white text-white drop-shadow" />
                </div>

                {/* Envelope Inscription requested */}
                <div className="font-cursive text-3xl sm:text-4xl text-rose-900 font-bold mb-3 tracking-wide">
                  To My Favorite Girl ❤️
                </div>

                <p className="text-xs text-rose-700/80 mb-6">
                  Hand-sealed especially for your monthly milestone
                </p>

                {/* Button: "Open My Heart 💌" */}
                <motion.button
                  id="open-letter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 cursor-pointer transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open My Heart 💌</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Opened Letter sliding out on romantic stationery with floating sparkles */
          <AnimatePresence>
            <motion.div
              id="opened-love-letter"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-rose-300 relative overflow-hidden"
            >
              {/* Floating hearts / sparkles on top corners */}
              <div className="absolute top-4 left-6 text-rose-400 animate-float-slow">
                <Heart className="w-5 h-5 fill-rose-200" />
              </div>
              <div className="absolute top-4 right-16 text-pink-400 animate-float-slow [animation-delay:1s]">
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Close Button to return to envelope */}
              <button
                id="close-letter-button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors cursor-pointer"
                title="Fold letter back into envelope"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8 border-b border-rose-200/80 pb-4">
                <span className="font-cursive text-3xl sm:text-4xl text-rose-800 font-bold block mb-1">
                  To My Favorite Girl ❤️
                </span>
                <span className="text-xs text-rose-600 font-medium">
                  Sealed with endless care and devotion
                </span>
              </div>

              {/* Full Love Letter Text from prompt */}
              <div className="space-y-4 text-rose-950/90 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
                <p className="font-cursive text-2xl sm:text-3xl text-rose-700 font-semibold">
                  My Dearest Wifeyy,
                </p>

                <p className="font-medium text-rose-800">
                  Happy 17th Monthly First-Text Anniversary, my love. ❤️
                </p>

                <p>
                  Today is another beautiful reminder of <strong>22 April 2025</strong>, the day we sent our very first text to each other.
                </p>

                <p>
                  It&apos;s amazing how one small moment can become such a meaningful memory.
                </p>

                <p>
                  I wonder sometimes what would have happened if we had never sent that first message. Maybe that&apos;s why this date feels so special to me. It reminds me of the beginning of a connection that I now treasure so deeply.
                </p>

                <p>
                  Since that day, you have become someone I love thinking about, someone whose messages can brighten my day, and someone who holds a very special place in my heart.
                </p>

                <p>
                  I wish I could put every feeling I have for you into words, but even this letter cannot fully explain it.
                </p>

                <p>
                  I love your presence in my life. I love the memories we share. I love the little moments that might seem ordinary to everyone else but mean so much to me because they involve you.
                </p>

                <p className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 italic text-rose-900">
                  And my love, I also want to say that I&apos;m sorry for my mistakes.
                </p>

                <p>
                  I know love is not only about beautiful words. It is also about patience, respect, understanding, honesty, and making an effort when things become difficult.
                </p>

                <p>
                  I want to keep learning how to love you better.
                </p>

                <p>
                  I want to listen when you need to be heard, understand your feelings, appreciate the little things you do, and never take the beautiful moments we share for granted.
                </p>

                <p>
                  Thank you for being part of my life.
                </p>

                <p>
                  Thank you for the conversations that started with that very first text.
                </p>

                <p>
                  Thank you for all the memories that have made this date so meaningful to me.
                </p>

                <p className="font-semibold text-rose-900">
                  And thank you for being my beautiful wifeyy.
                </p>

                <p>
                  I hope that when another 22nd arrives, we will have even more beautiful memories to look back on.
                </p>

                <p className="p-3.5 rounded-xl bg-gradient-to-r from-rose-100/70 to-pink-100/70 text-rose-900 font-medium">
                  Here&apos;s to our first text, our special monthly tradition, and all the lovely moments still waiting for us.
                </p>

                <p className="font-cursive text-2xl sm:text-3xl text-rose-700 font-bold pt-1">
                  Happy 17th monthly first-text celebration, my love.
                </p>

                <p className="font-cursive text-2xl text-rose-800">
                  I love you with all my heart.
                </p>

                <div className="pt-6 border-t border-rose-200 flex flex-col items-end">
                  <span className="font-cursive text-xl text-rose-600">Forever yours,</span>
                  <span className="font-cursive text-3xl text-rose-800 font-bold mt-1">
                    Ali ❤️💍
                  </span>
                </div>
              </div>

              {/* Bottom return button */}
              <div className="mt-8 pt-4 border-t border-rose-200/60 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs sm:text-sm font-medium transition cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Fold back into envelope</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
