import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Pause, Play, Upload, Sparkles, Disc } from 'lucide-react';
import { romanticAudio } from '../utils/audioEngine';

export const RomanticMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songTitle, setSongTitle] = useState<string>('Our Soothing Romantic Melody');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    romanticAudio.setPlaybackListener((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      romanticAudio.stop();
    };
  }, []);

  const handleTogglePlay = async () => {
    if (isPlaying) {
      romanticAudio.pause();
    } else {
      await romanticAudio.play();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      romanticAudio.setUserAudioFile(file);
      setSongTitle(file.name.replace(/\.[^/.]+$/, ''));
      romanticAudio.play();
      setShowSettings(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="flex items-center gap-2">
        {/* Main Music Toggle Button */}
        <button
          id="toggle-romantic-music"
          onClick={handleTogglePlay}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md ${
            isPlaying
              ? 'bg-rose-500/90 text-white border-rose-300 shadow-rose-400/40 animate-pulse-glow'
              : 'bg-white/80 text-rose-800 border-rose-200/80 hover:bg-rose-50'
          }`}
          title={isPlaying ? 'Pause music' : 'Play our love song'}
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5 fill-rose-700" />
            )}
          </div>
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {isPlaying ? 'Pause Music ⏸️' : 'Play Our Love Song 🎵'}
          </span>
          {isPlaying && (
            <span className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-0.5 h-full bg-white animate-pulse" />
              <span className="w-0.5 h-2/3 bg-white animate-pulse [animation-delay:0.2s]" />
              <span className="w-0.5 h-4/5 bg-white animate-pulse [animation-delay:0.4s]" />
            </span>
          )}
        </button>

        {/* Change song / Audio Options Button */}
        <button
          id="music-options-button"
          onClick={() => setShowSettings(!showSettings)}
          className="p-2.5 rounded-full bg-white/80 hover:bg-rose-100 text-rose-700 border border-rose-200/80 backdrop-blur-md shadow-sm transition-colors"
          title="Change or upload our special song"
        >
          <Disc className={`w-4 h-4 ${isPlaying ? 'animate-spin [animation-duration:4s]' : ''}`} />
        </button>
      </div>

      {/* Song Customizer Dropdown */}
      {showSettings && (
        <div className="absolute right-0 mt-2 w-72 p-4 rounded-2xl glass-romantic shadow-xl border border-rose-200 text-rose-900 text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-rose-900 flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-rose-500" />
              Our Music
            </span>
            <button
              onClick={() => setShowSettings(false)}
              className="text-rose-400 hover:text-rose-600 font-bold px-1"
            >
              ✕
            </button>
          </div>

          <p className="text-rose-800/80 mb-3 text-[11px] leading-relaxed">
            Now playing: <strong className="text-rose-950 font-semibold">{songTitle}</strong>
          </p>

          <p className="text-rose-700/80 mb-2 text-[11px]">
            Want to play your own couple song together? Upload any MP3 or audio file:
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium shadow transition-all cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Our Song (MP3)</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      )}
    </div>
  );
};
