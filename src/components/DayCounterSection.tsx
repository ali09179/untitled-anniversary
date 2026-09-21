import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';
import {
  calculateMilestoneDays,
  calculateLiveStatsSinceFirstText,
  calculateNext22ndCountdown,
  FIRST_TEXT_DATE,
  CELEBRATION_MILESTONE_DATE,
} from '../utils/dateCalculations';

export const DayCounterSection: React.FC = () => {
  const [countdown, setCountdown] = useState(calculateNext22ndCountdown());
  const [liveStats, setLiveStats] = useState(calculateLiveStatsSinceFirstText());
  const [previewTodayAs22nd, setPreviewTodayAs22nd] = useState(false);

  const milestone = calculateMilestoneDays();

  // Check if today in local time is 22 September 2026 or any 22nd
  const now = new Date();
  const isActual22Sep2026 =
    now.getFullYear() === 2026 && now.getMonth() === 8 && now.getDate() === 22;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateNext22ndCountdown());
      setLiveStats(calculateLiveStatsSinceFirstText());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isCelebratingToday = countdown.isToday22nd || previewTodayAs22nd || isActual22Sep2026;

  return (
    <section id="day-counter" className="relative py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="glass-romantic rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-rose-200"
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs sm:text-sm font-semibold mb-3 border border-rose-200">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            <span>Automatic Live Counter</span>
          </div>

          <h2 className="font-serif-romantic text-3xl sm:text-4xl font-bold text-rose-950 mb-3">
            Every Day Since That First Hello
          </h2>

          <p className="text-xs sm:text-sm text-rose-800/80 italic">
            *This tracks the duration since our first text message on 22 April 2025, not the duration of our relationship.
          </p>
        </div>

        {/* Milestone Celebration Box (518 Days on 22 Sept 2026) */}
        <div className="relative mb-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white text-center shadow-xl shadow-rose-500/20 overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold mb-4 border border-white/30">
              <Award className="w-4 h-4 text-amber-200" />
              <span>Milestone Celebration • 22 September 2026</span>
            </div>

            {/* Special Celebration Banner if 22 Sept 2026 or celebration day */}
            <div className="mb-4">
              <h3 className="font-cursive text-3xl sm:text-4xl md:text-5xl text-pink-100 drop-shadow">
                Happy First-Text Anniversary, My Wifeyy! ❤️
              </h3>
            </div>

            {/* Prominently requested: 518 DAYS SINCE OUR FIRST TEXT ❤️ */}
            <div className="my-6">
              <div className="inline-block px-6 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30">
                <span className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-md">
                  {milestone.totalDays} DAYS SINCE OUR FIRST TEXT ❤️
                </span>
              </div>
            </div>

            {/* Also show: "1 Year, 5 Months Since That Special Message" */}
            <p className="font-cursive text-2xl sm:text-3xl text-pink-100/95 tracking-wide">
              &ldquo;{milestone.textRepresentation}&rdquo;
            </p>

            <div className="mt-4 text-xs sm:text-sm text-pink-100/80">
              Calculated exactly from 22 April 2025 to 22 September 2026
            </div>
          </div>
        </div>

        {/* Live Calendar Duration (Calculated to current day) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/80 text-center">
            <span className="block text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
              Live Total Days
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-rose-950">
              {liveStats.totalDays}
            </span>
            <span className="block text-[11px] text-rose-700/70 mt-1">Days since 22 Apr 2025</span>
          </div>

          <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-200/80 text-center">
            <span className="block text-xs font-semibold text-pink-600 uppercase tracking-wider mb-1">
              Years
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-rose-950">
              {liveStats.years}
            </span>
            <span className="block text-[11px] text-rose-700/70 mt-1">Year(s) of sweet texts</span>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-center">
            <span className="block text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">
              Months
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-rose-950">
              {liveStats.months}
            </span>
            <span className="block text-[11px] text-rose-700/70 mt-1">Full months</span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center">
            <span className="block text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
              Days
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-rose-950">
              {liveStats.remainingDays}
            </span>
            <span className="block text-[11px] text-rose-700/70 mt-1">Additional days</span>
          </div>
        </div>

        {/* Live Countdown to the Next 22nd of the Month */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-100/70 via-pink-100/60 to-rose-100/70 border border-rose-300/60 text-center relative">
          {/* If today is the 22nd: celebrate rather than counting down */}
          {isCelebratingToday ? (
            <div className="py-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500 text-white text-xs sm:text-sm font-semibold mb-3 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Today is the 22nd! 🎉</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 mb-2">
                Happy First-Text Anniversary, My Wifeyy! ❤️
              </h3>
              <p className="font-cursive text-xl sm:text-2xl text-rose-700 max-w-lg mx-auto">
                Today is our special 22nd monthly celebration! Another month of remembering the day we first messaged each other.
              </p>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-200/80 text-rose-800 text-xs font-semibold mb-3">
                <Calendar className="w-3.5 h-3.5 text-rose-600" />
                <span>Target: {countdown.nextDateFormatted}</span>
              </div>

              <h3 className="font-serif-romantic text-xl sm:text-2xl md:text-3xl font-bold text-rose-900 mb-6">
                Our Next Little Celebration Begins In...
              </h3>

              {/* Countdown Digits */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto mb-4">
                <div className="p-3 sm:p-4 rounded-2xl bg-white shadow-sm border border-rose-200">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-rose-600 font-mono">
                    {String(countdown.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Days
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-white shadow-sm border border-rose-200">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-rose-600 font-mono">
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Hours
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-white shadow-sm border border-rose-200">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-rose-600 font-mono">
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Mins
                  </span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-white shadow-sm border border-rose-200">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-rose-600 font-mono">
                    {String(countdown.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Secs
                  </span>
                </div>
              </div>

              <p className="text-xs text-rose-700/80">
                Updating every second to our next monthly milestone on the 22nd.
              </p>
            </div>
          )}

          {/* Toggle for previewing celebration mode */}
          <div className="mt-4 pt-4 border-t border-rose-200/60 flex justify-center">
            <button
              onClick={() => setPreviewTodayAs22nd(!previewTodayAs22nd)}
              className="text-[11px] text-rose-600 hover:text-rose-800 underline decoration-rose-300 cursor-pointer"
            >
              {previewTodayAs22nd
                ? '← Switch back to live countdown'
                : '✨ Preview how this card looks on the 22nd'}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
