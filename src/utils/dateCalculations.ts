import { CountdownInfo, DayCounterStats } from '../types';

export const FIRST_TEXT_DATE = new Date(2025, 3, 22, 0, 0, 0); // Month is 0-indexed: 3 = April
export const CELEBRATION_MILESTONE_DATE = new Date(2026, 8, 22, 0, 0, 0); // 8 = September

export function calculateMilestoneDays(): { totalDays: number; textRepresentation: string } {
  const diffTime = CELEBRATION_MILESTONE_DATE.getTime() - FIRST_TEXT_DATE.getTime();
  const totalDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); // exactly 518
  return {
    totalDays,
    textRepresentation: "1 Year, 5 Months Since That Special Message",
  };
}

export function calculateLiveStatsSinceFirstText(referenceDate: Date = new Date()): DayCounterStats {
  const diffTime = referenceDate.getTime() - FIRST_TEXT_DATE.getTime();
  const totalDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  // Calculate year, month, and day difference
  let years = referenceDate.getFullYear() - FIRST_TEXT_DATE.getFullYear();
  let months = referenceDate.getMonth() - FIRST_TEXT_DATE.getMonth();
  let days = referenceDate.getDate() - FIRST_TEXT_DATE.getDate();

  if (days < 0) {
    months--;
    // days in previous month
    const prevMonthLastDay = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    totalDays,
    years: Math.max(0, years),
    months: Math.max(0, months),
    remainingDays: Math.max(0, days),
  };
}

export function calculateNext22ndCountdown(referenceDate: Date = new Date()): CountdownInfo {
  const currentYear = referenceDate.getFullYear();
  const currentMonth = referenceDate.getMonth();
  const currentDate = referenceDate.getDate();

  const isToday22nd = currentDate === 22;

  let targetYear = currentYear;
  let targetMonth = currentMonth;

  if (currentDate < 22) {
    // Next 22nd is this month
    targetMonth = currentMonth;
  } else {
    // Next 22nd is next month
    targetMonth = currentMonth + 1;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear++;
    }
  }

  const nextCelebrationDate = new Date(targetYear, targetMonth, 22, 0, 0, 0);
  const diffTime = nextCelebrationDate.getTime() - referenceDate.getTime();

  const totalSeconds = Math.max(0, Math.floor(diffTime / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const nextDateFormatted = `22 ${monthNames[targetMonth]} ${targetYear}`;

  return {
    days,
    hours,
    minutes,
    seconds,
    isToday22nd,
    nextDateFormatted,
  };
}
