export interface MemoryPhoto {
  id: number;
  caption: string;
  defaultTitle: string;
  placeholderTheme: 'rose' | 'lavender' | 'sunset' | 'starlight' | 'warmth' | 'blossom';
  customImage?: string; // Data URL uploaded by Ali
}

export interface CountdownInfo {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday22nd: boolean;
  nextDateFormatted: string;
}

export interface DayCounterStats {
  totalDays: number;
  years: number;
  months: number;
  remainingDays: number;
}
