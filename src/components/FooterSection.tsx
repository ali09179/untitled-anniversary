import React, { useState } from 'react';
import { Heart, Sparkles, HelpCircle, Share2, Globe, ExternalLink, X } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <footer id="romantic-footer" className="relative mt-20 pt-16 pb-16 px-4 text-center border-t border-rose-200/80 bg-gradient-to-b from-transparent via-rose-100/40 to-pink-100/60">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Animated tiny hearts cluster */}
        <div className="flex items-center justify-center gap-2 text-rose-500 mb-6">
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-pulse" />
          <Heart className="w-6 h-6 fill-rose-500 text-rose-500 animate-heartbeat" />
          <Heart className="w-4 h-4 fill-rose-400 text-rose-400 animate-pulse [animation-delay:0.5s]" />
        </div>

        {/* Exact specified lines */}
        <p className="font-cursive text-2xl sm:text-3xl text-rose-700 font-semibold">
          Made with love, especially for you. ❤️
        </p>

        <h3 className="font-serif-romantic text-xl sm:text-2xl font-bold text-rose-950">
          Happy Monthly First-Text Anniversary, My Wifeyy.
        </h3>

        <div className="py-2 space-y-1 text-sm sm:text-base text-rose-800/90 font-medium">
          <p>22 April 2025 — The Day We Sent Our First Text. 💌</p>
          <p>22 September 2026 — Another Beautiful Monthly Celebration. ❤️</p>
        </div>

        <p className="font-cursive text-3xl sm:text-4xl text-rose-900 font-bold pt-4">
          Forever Yours, Ali. 💍
        </p>

        {/* Discreet Helper for Ali */}
        <div className="pt-8">
          <button
            id="open-guide-button"
            onClick={() => setShowGuide(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-rose-700/80 hover:text-rose-900 bg-white/60 hover:bg-white border border-rose-200 shadow-xs transition cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Ali&apos;s Guide: How to save photos &amp; publish online</span>
          </button>
        </div>
      </div>

      {/* Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-200 text-left">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 p-2 text-rose-400 hover:text-rose-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-rose-700 font-semibold">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <h4 className="text-lg font-serif-romantic">How to Personalize &amp; Share This Gift</h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-rose-900/80 leading-relaxed">
              <p>
                <strong>1. Add Your Real Photos:</strong> In the <em>Our Little World Together</em> gallery, click any of the 6 frames to upload real photos of you and your wifeyy. They are automatically saved in your browser storage!
              </p>
              <p>
                <strong>2. Play or Change Your Song:</strong> Click <em>&ldquo;Play Our Love Song 🎵&rdquo;</em> in the top-right corner to hear a romantic piano lullaby. Click the disc icon next to it to upload your couple&apos;s special MP3 song!
              </p>
              <p>
                <strong>3. Share with Your Wifeyy:</strong>
                <br />• <strong>Instant Sharing:</strong> Use the built-in AI Studio Share link at the top of your screen to send her the live preview link!
                <br />• <strong>Free Permanent Hosting:</strong> You can export this project as a ZIP or to GitHub from the top menu, and deploy in 1 click to <em>Vercel</em>, <em>Netlify</em>, or <em>GitHub Pages</em> completely free.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 flex justify-end">
              <button
                onClick={() => setShowGuide(false)}
                className="px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow transition"
              >
                Got It, Thank You! ❤️
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
