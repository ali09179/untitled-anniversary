import React from 'react';
import { Heart, Sparkles, ShieldAlert, Flower2 } from 'lucide-react';
import { motion } from 'motion/react';

export const SincereApologySection: React.FC = () => {
  return (
    <section id="sincere-apology" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Soft romantic ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="glass-romantic-pink rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl border border-rose-300/60 relative overflow-hidden"
      >
        {/* Soft floating rose petal accents */}
        <div className="absolute -top-6 -left-6 text-rose-300/40 pointer-events-none">
          <Flower2 className="w-24 h-24 rotate-45" />
        </div>
        <div className="absolute -bottom-6 -right-6 text-rose-300/40 pointer-events-none">
          <Flower2 className="w-24 h-24 -rotate-45" />
        </div>

        {/* Header Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-200/80 text-rose-800 text-xs font-semibold mb-3">
            <Heart className="w-3 h-3 fill-rose-600 text-rose-600" />
            <span>A Sincere &amp; Honest Message</span>
          </div>

          <h2 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl font-bold text-rose-950 mb-2">
            I&apos;m Truly Sorry, My Love 🥺❤️
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-3" />
        </div>

        {/* Message Content */}
        <div className="space-y-4 text-rose-950/90 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          <p className="font-cursive text-2xl sm:text-3xl text-rose-700 font-semibold">
            My Beautiful Wifeyy,
          </p>

          <p>
            I want to take a moment to say something from the deepest part of my heart.
          </p>

          <p className="p-4 rounded-2xl bg-rose-100/60 border-l-4 border-rose-500 font-medium text-rose-900">
            I&apos;m truly sorry for the mistakes I have made and for the moments when my words or actions may have hurt you.
          </p>

          <p>
            I know that sometimes I don&apos;t handle things the way I should. Sometimes I may misunderstand you, say something without thinking, or fail to give your feelings the attention they deserve.
          </p>

          <p className="font-medium text-rose-800">
            You never deserve to feel hurt or unappreciated.
          </p>

          <p>
            I don&apos;t want to make excuses for my mistakes. I want to understand them, learn from them, and genuinely try to become better.
          </p>

          <p className="p-4 rounded-2xl bg-white/70 border border-rose-200 shadow-sm text-rose-900">
            I know that saying sorry is only the beginning. What matters is how I treat you afterward, how carefully I listen, and how much effort I put into making things right.
          </p>

          <p className="font-semibold text-rose-900">
            Please know that your feelings matter to me.
          </p>

          <p>
            I am sorry for the moments when I made you sad, disappointed you, or made you feel anything less than the precious person you are.
          </p>

          <p>
            I cannot promise that I will never make a mistake again, but I can promise to keep learning, communicating honestly, and making a real effort.
          </p>

          <p className="font-cursive text-2xl sm:text-3xl text-rose-700 pt-1">
            I love you, my wifeyy.
          </p>

          <p>
            Thank you for being someone so special in my life.
          </p>

          <p className="font-cursive text-2xl sm:text-3xl text-rose-800 font-bold pt-2">
            I&apos;m truly sorry. ❤️🥺
          </p>
        </div>

        {/* Beautiful Animated Heart beneath message */}
        <div className="mt-10 pt-6 border-t border-rose-200/80 flex flex-col items-center justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-rose-400/30 rounded-full blur-xl animate-pulse" />
            <motion.div
              animate={{
                scale: [1, 1.18, 1, 1.25, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: 'easeInOut',
              }}
              className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/40"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>
          </div>
          <span className="text-xs text-rose-600 font-medium mt-3 tracking-wider uppercase">
            With All My Sincerity • Ali
          </span>
        </div>
      </motion.div>
    </section>
  );
};
