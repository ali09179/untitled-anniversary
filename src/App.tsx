import React, { useState } from 'react';
import { Heart, Sparkles, Send, Flower2, Stars } from 'lucide-react';
import { motion } from 'motion/react';
import { RomanticParticlesCanvas } from './components/RomanticParticlesCanvas';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RomanticMusicPlayer } from './components/RomanticMusicPlayer';
import { FirstTextSection } from './components/FirstTextSection';
import { DayCounterSection } from './components/DayCounterSection';
import { HeartfeltLoveNoteSection } from './components/HeartfeltLoveNoteSection';
import { SincereApologySection } from './components/SincereApologySection';
import { LoveLetterEnvelope } from './components/LoveLetterEnvelope';
import { MemoryGallerySection } from './components/MemoryGallerySection';
import { SecretSurpriseModal } from './components/SecretSurpriseModal';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [hasOpenedWelcome, setHasOpenedWelcome] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] via-70% to-[#FFEBF0] text-rose-950 font-body relative selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      {/* Interactive Floating Petals & Hearts Canvas */}
      <RomanticParticlesCanvas />

      {/* Romantic Music Player (Fixed in upper corner) */}
      <RomanticMusicPlayer />

      {/* Full-Screen Romantic Welcome Screen */}
      {!hasOpenedWelcome && (
        <WelcomeScreen onOpenSurprise={() => setHasOpenedWelcome(true)} />
      )}

      {/* Main Website Container */}
      <main className="relative z-20 transition-opacity duration-1000">
        {/* Soft atmospheric gradient glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-rose-200/30 via-pink-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Top Title & Dedication */}
        <header className="pt-20 sm:pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
          {/* Milestone Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-300/70 text-rose-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>A Special Gift From Ali To My Wifeyy</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-romantic text-4xl sm:text-5xl md:text-6xl font-extrabold text-rose-950 tracking-tight leading-tight mb-4"
          >
            Our Monthly First-Text Celebration
          </motion.h1>

          {/* Romantic Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cursive text-2xl sm:text-3xl md:text-4xl text-rose-700/90 max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Celebrating the day one ordinary message turned into our beautiful journey ❤️
          </motion.p>

          {/* Milestones subtitle dates */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-rose-800/80 font-medium">
            <span className="flex items-center gap-1">
              <Send className="w-3.5 h-3.5 text-rose-500" />
              First Text: <strong>22 April 2025</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Flower2 className="w-3.5 h-3.5 text-pink-500" />
              Celebrated Every 22nd of the Month
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Stars className="w-3.5 h-3.5 text-purple-500" />
              Milestone: <strong>22 September 2026</strong>
            </span>
          </div>
        </header>

        {/* SECTION 3: Our First Text Memory */}
        <FirstTextSection />

        {/* SECTION 4: Automatic Day Counter & Live Countdown */}
        <DayCounterSection />

        {/* SECTION 5: A Heartfelt Love Note */}
        <HeartfeltLoveNoteSection />

        {/* SECTION 6: A Sincere Apology */}
        <SincereApologySection />

        {/* SECTION 7: An Interactive Love Letter */}
        <LoveLetterEnvelope />

        {/* SECTION 8: Our Memory Gallery */}
        <MemoryGallerySection />

        {/* SECTION 9: A Secret Surprise */}
        <SecretSurpriseModal />

        {/* Replay Welcome Screen Option */}
        <div className="text-center py-6">
          <button
            onClick={() => setHasOpenedWelcome(false)}
            className="text-xs text-rose-600/70 hover:text-rose-800 hover:underline cursor-pointer transition"
          >
            ✨ Re-open welcome greeting screen
          </button>
        </div>

        {/* SECTION 11: Final Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
