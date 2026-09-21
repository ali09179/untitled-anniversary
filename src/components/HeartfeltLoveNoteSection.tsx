import React from 'react';
import { Heart, Feather, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const HeartfeltLoveNoteSection: React.FC = () => {
  return (
    <section id="love-note" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Decorative stationery container */}
        <div className="relative bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl border-2 border-[#F9D5DA] overflow-hidden">
          {/* Subtle paper line rule watermark */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #be123c, #be123c 1px, transparent 1px, transparent 32px)',
            }}
          />

          {/* Romantic Wax Seal Stamp Graphic */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 flex items-center justify-center text-rose-100 shadow-md border-2 border-rose-300/40 rotate-12">
              <Heart className="w-6 h-6 fill-rose-200/90 text-rose-100" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 text-xs font-semibold mb-2">
              <Feather className="w-3.5 h-3.5 text-rose-500" />
              <span>Handwritten Stationery</span>
            </div>
            <h2 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl font-bold text-rose-950">
              A Little Note From My Heart 💗
            </h2>
          </div>

          {/* Body Message */}
          <div className="space-y-5 text-rose-950/90 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            <p className="font-cursive text-2xl sm:text-3xl text-rose-700 font-semibold mb-3">
              My Sweetest Wifeyy,
            </p>

            <p>
              Sometimes I wish you could see yourself through my eyes, just for a moment. Maybe then you would understand how incredibly special you are to me.
            </p>

            <p>
              You have become such a beautiful part of my thoughts, my happiness, and my everyday life.
            </p>

            <p className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/60 italic text-rose-900">
              Whenever I remember our first text on <strong>22 April 2025</strong>, I smile because I never knew that one small conversation would become such a precious memory for me.
            </p>

            <p>
              Thank you for every conversation, every smile, every moment, and every little thing that makes you who you are.
            </p>

            <p>
              I may not always express my feelings perfectly, but please know that you mean so much to me.
            </p>

            <p>
              I hope I can keep giving you reasons to smile and making beautiful memories with you.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-rose-100/80 via-pink-100/70 to-rose-100/80 border border-rose-300 text-center">
              <p className="font-cursive text-2xl sm:text-3xl text-rose-800 font-bold">
                Happy 17th monthly celebration of our first text, my beautiful girl.
              </p>
            </div>

            <p className="font-medium text-rose-900">
              You are, and will always be, someone very special to my heart.
            </p>

            {/* Signature */}
            <div className="pt-6 border-t border-rose-200/60 flex flex-col items-end">
              <span className="font-cursive text-xl sm:text-2xl text-rose-600">
                Forever yours,
              </span>
              <span className="font-cursive text-3xl sm:text-4xl text-rose-800 font-bold mt-1">
                Your Ali ❤️
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
