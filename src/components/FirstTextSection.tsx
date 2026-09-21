import React from 'react';
import { MessageCircleHeart, Sparkles, Calendar, Heart, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const FirstTextSection: React.FC = () => {
  return (
    <section id="first-text-memory" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="glass-romantic rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-rose-200/80 relative overflow-hidden"
      >
        {/* Top subtle decorative ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-rose-100/90 border border-rose-300/60 text-rose-800 text-xs sm:text-sm font-semibold tracking-wide">
            <Calendar className="w-3.5 h-3.5 text-rose-500" />
            Celebrated Every 22nd of the Month
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-medium">
            <Sparkles className="w-3 h-3 text-pink-500" />
            Our First Text Memory
          </span>
        </div>

        {/* Date Display */}
        <div className="text-center mb-3">
          <span className="font-cursive text-3xl sm:text-4xl md:text-5xl text-rose-600 font-bold tracking-wide inline-block drop-shadow-sm">
            22 April 2025 ❤️
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl text-center font-bold text-rose-950 mb-6 leading-snug">
          Where Our Beautiful Story of Messages Began
        </h2>

        {/* Important context reminder badge */}
        <div className="max-w-xl mx-auto mb-8 p-3.5 rounded-2xl bg-gradient-to-r from-rose-50/80 via-pink-50/80 to-rose-50/80 border border-rose-200/60 text-center">
          <p className="text-xs sm:text-sm text-rose-800/90 leading-relaxed italic">
            &ldquo;This is not our relationship anniversary — it is the cherished day our very first text message was sent, a sweet memory we celebrate together every 22nd.&rdquo;
          </p>
        </div>

        {/* Romantic Text Messages Graphic */}
        <div className="max-w-md mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-white/75 border border-rose-200/70 shadow-inner">
          <div className="flex items-center justify-between border-b border-rose-100 pb-2.5 mb-3 text-xs text-rose-800 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center text-[11px] font-bold">
                W
              </div>
              <span>My Wifeyy ❤️</span>
            </div>
            <span className="text-rose-400">22 April 2025</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-end justify-end gap-1.5">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2.5 rounded-2xl rounded-br-xs text-xs sm:text-sm max-w-[85%] shadow-sm">
                <p>Hey... 😊 The very first message that started everything.</p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-rose-100">
                  <span>22 Apr 2025</span>
                  <Send className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-medium border border-rose-200/60 flex items-center gap-1">
                <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
                The beginning of something beautiful
              </span>
            </div>
          </div>
        </div>

        {/* Romantic Message from Prompt */}
        <div className="space-y-4 text-rose-900/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-rose-600 first-letter:mr-1">
            Who knew that one little message could become such a precious memory?
          </p>

          <p>
            On <strong>22 April 2025</strong>, we sent our first text to each other. It might have seemed like an ordinary moment at the time, but today, that date holds a very special place in my heart.
          </p>

          <p className="p-4 rounded-xl bg-rose-50/70 border-l-4 border-rose-400 font-medium text-rose-900">
            Every 22nd reminds me of that beautiful beginning.
          </p>

          <p>
            I&apos;m so grateful that we started talking, that our paths crossed, and that I got the chance to know someone as special as you.
          </p>

          <p className="font-cursive text-2xl sm:text-3xl text-rose-700 pt-2 text-center">
            If I could go back to that day, I would still be excited to send you that first message. ❤️
          </p>
        </div>
      </motion.div>
    </section>
  );
};
