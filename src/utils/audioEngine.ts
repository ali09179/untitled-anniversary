// Romantic audio engine supporting both uploaded audio tracks and a built-in soothing romantic melody generator

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlayingSynth: boolean = false;
  private synthInterval: number | null = null;
  private currentStep: number = 0;
  private userAudio: HTMLAudioElement | null = null;
  private userAudioUrl: string | null = null;
  private onPlaybackChange: ((playing: boolean) => void) | null = null;

  // Romantic melody notes (frequencies in Hz) - A heartfelt music-box progression in F Major / D minor
  // F4, A4, C5, E5, D5, C5, A4, G4, F4, G4, A4, C5, Bb4, A4, G4, F4
  private melodyNotes: { freq: number; duration: number }[] = [
    { freq: 349.23, duration: 0.6 }, // F4
    { freq: 440.00, duration: 0.6 }, // A4
    { freq: 523.25, duration: 0.8 }, // C5
    { freq: 659.25, duration: 1.0 }, // E5
    { freq: 587.33, duration: 0.6 }, // D5
    { freq: 523.25, duration: 0.6 }, // C5
    { freq: 440.00, duration: 0.7 }, // A4
    { freq: 392.00, duration: 0.9 }, // G4

    { freq: 349.23, duration: 0.6 }, // F4
    { freq: 392.00, duration: 0.6 }, // G4
    { freq: 440.00, duration: 0.7 }, // A4
    { freq: 523.25, duration: 1.0 }, // C5
    { freq: 466.16, duration: 0.6 }, // Bb4
    { freq: 440.00, duration: 0.6 }, // A4
    { freq: 392.00, duration: 0.8 }, // G4
    { freq: 349.23, duration: 1.4 }, // F4 (home)

    // Second romantic phrase
    { freq: 440.00, duration: 0.6 }, // A4
    { freq: 523.25, duration: 0.6 }, // C5
    { freq: 587.33, duration: 0.8 }, // D5
    { freq: 698.46, duration: 1.1 }, // F5
    { freq: 659.25, duration: 0.7 }, // E5
    { freq: 587.33, duration: 0.7 }, // D5
    { freq: 523.25, duration: 1.2 }, // C5
    { freq: 440.00, duration: 0.8 }, // A4

    { freq: 466.16, duration: 0.6 }, // Bb4
    { freq: 523.25, duration: 0.6 }, // C5
    { freq: 440.00, duration: 0.8 }, // A4
    { freq: 392.00, duration: 0.8 }, // G4
    { freq: 349.23, duration: 1.6 }, // F4
  ];

  public setPlaybackListener(callback: (playing: boolean) => void) {
    this.onPlaybackChange = callback;
  }

  public setUserAudioFile(file: File) {
    this.stop();
    if (this.userAudioUrl) {
      URL.revokeObjectURL(this.userAudioUrl);
    }
    this.userAudioUrl = URL.createObjectURL(file);
    this.userAudio = new Audio(this.userAudioUrl);
    this.userAudio.loop = true;
    this.userAudio.onended = () => {
      if (this.onPlaybackChange) this.onPlaybackChange(false);
    };
  }

  public hasUserAudio(): boolean {
    return !!this.userAudio;
  }

  public async play(): Promise<void> {
    if (this.userAudio) {
      try {
        await this.userAudio.play();
        if (this.onPlaybackChange) this.onPlaybackChange(true);
        return;
      } catch (err) {
        console.warn("User audio play prevented, falling back to synth", err);
      }
    }

    // Play synthesized romantic chime & music-box lullaby
    this.startSynth();
    if (this.onPlaybackChange) this.onPlaybackChange(true);
  }

  public pause(): void {
    if (this.userAudio) {
      this.userAudio.pause();
    }
    this.stopSynth();
    if (this.onPlaybackChange) this.onPlaybackChange(false);
  }

  public isPlaying(): boolean {
    if (this.userAudio) {
      return !this.userAudio.paused;
    }
    return this.isPlayingSynth;
  }

  public stop(): void {
    if (this.userAudio) {
      this.userAudio.pause();
      this.userAudio.currentTime = 0;
    }
    this.stopSynth();
    if (this.onPlaybackChange) this.onPlaybackChange(false);
  }

  private initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Main warm tone (sine + gentle triangle blend)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Light overtone an octave above for music-box shimmer
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Warm gain envelope (soft chime attack, romantic long release)
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.18, now + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration + 1.2);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 1.3);
    osc2.stop(now + duration + 1.3);
  }

  private startSynth() {
    this.initAudioContext();
    this.isPlayingSynth = true;
    this.currentStep = 0;

    const stepNextNote = () => {
      if (!this.isPlayingSynth) return;
      const note = this.melodyNotes[this.currentStep];
      this.playTone(note.freq, note.duration);

      this.currentStep = (this.currentStep + 1) % this.melodyNotes.length;
      const nextDelay = note.duration * 1000 + 100;
      this.synthInterval = window.setTimeout(stepNextNote, nextDelay);
    };

    stepNextNote();
  }

  private stopSynth() {
    this.isPlayingSynth = false;
    if (this.synthInterval !== null) {
      clearTimeout(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
