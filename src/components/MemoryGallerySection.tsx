import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Trash2, Heart, Sparkles, ZoomIn, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MemoryPhoto } from '../types';

const INITIAL_PHOTOS: MemoryPhoto[] = [
  {
    id: 1,
    defaultTitle: 'Cherished Memory 1',
    caption: 'A little moment, a forever memory. ❤️',
    placeholderTheme: 'rose',
  },
  {
    id: 2,
    defaultTitle: 'Cherished Memory 2',
    caption: 'Your smile is my favorite view. 🥹',
    placeholderTheme: 'lavender',
  },
  {
    id: 3,
    defaultTitle: 'Cherished Memory 3',
    caption: 'One of my happiest memories with you. 💗',
    placeholderTheme: 'sunset',
  },
  {
    id: 4,
    defaultTitle: 'Cherished Memory 4',
    caption: 'Every little moment with you matters. 🌹',
    placeholderTheme: 'warmth',
  },
  {
    id: 5,
    defaultTitle: 'Cherished Memory 5',
    caption: 'My favorite person, my beautiful wifeyy. 💍',
    placeholderTheme: 'starlight',
  },
  {
    id: 6,
    defaultTitle: 'Cherished Memory 6',
    caption: 'More memories, more smiles, more us. ❤️',
    placeholderTheme: 'blossom',
  },
];

const THEME_STYLES: Record<
  MemoryPhoto['placeholderTheme'],
  { bg: string; iconColor: string; label: string }
> = {
  rose: {
    bg: 'from-rose-100 via-pink-100 to-rose-200',
    iconColor: 'text-rose-400',
    label: 'Our First Chapters',
  },
  lavender: {
    bg: 'from-purple-100 via-pink-100 to-rose-100',
    iconColor: 'text-purple-400',
    label: 'Warm Smiles',
  },
  sunset: {
    bg: 'from-amber-100 via-rose-100 to-pink-200',
    iconColor: 'text-amber-400',
    label: 'Golden Moments',
  },
  warmth: {
    bg: 'from-rose-200 via-pink-100 to-red-100',
    iconColor: 'text-red-400',
    label: 'Sweet Messages',
  },
  starlight: {
    bg: 'from-indigo-100 via-purple-100 to-pink-100',
    iconColor: 'text-indigo-400',
    label: 'Forever & Always',
  },
  blossom: {
    bg: 'from-pink-100 via-rose-100 to-purple-100',
    iconColor: 'text-pink-400',
    label: 'Countless Memories',
  },
};

export const MemoryGallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<MemoryPhoto[]>(INITIAL_PHOTOS);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);
  const [activeUploadId, setActiveUploadId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ali_wifeyy_gallery_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 6) {
          setPhotos(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not load saved photos', e);
    }
  }, []);

  const savePhotos = (updated: MemoryPhoto[]) => {
    setPhotos(updated);
    try {
      localStorage.setItem('ali_wifeyy_gallery_photos', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save to localStorage (quota or disabled)', e);
    }
  };

  const handleUploadClick = (id: number) => {
    setActiveUploadId(id);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadId !== null) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const updated = photos.map((p) =>
          p.id === activeUploadId ? { ...p, customImage: result } : p
        );
        savePhotos(updated);
      };
      reader.readAsDataURL(file);
    }
    // reset input
    if (e.target) e.target.value = '';
  };

  const handleRemovePhoto = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = photos.map((p) =>
      p.id === id ? { ...p, customImage: undefined } : p
    );
    savePhotos(updated);
  };

  return (
    <section id="memory-gallery" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold mb-3">
          <Camera className="w-3.5 h-3.5 text-rose-500" />
          <span>Our Visual Keepsake</span>
        </div>

        <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-bold text-rose-950 mb-3">
          Our Little World Together 📸❤️
        </h2>

        <p className="text-sm sm:text-base text-rose-800/80 leading-relaxed">
          Six beautiful frames celebrating our journey. Ali, you can click any frame to upload your real photos with your wifeyy!
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {photos.map((photo, index) => {
          const theme = THEME_STYLES[photo.placeholderTheme];
          const hasCustom = !!photo.customImage;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/90 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-rose-200/80 overflow-hidden flex flex-col"
            >
              {/* Glowing Frame Border Effect */}
              <div className="absolute inset-0 border-2 border-rose-300/30 rounded-3xl pointer-events-none group-hover:border-rose-400/80 transition-colors" />

              {/* Photo Area */}
              <div
                className="relative aspect-4/3 w-full rounded-2xl overflow-hidden cursor-pointer shadow-inner bg-rose-50 flex items-center justify-center"
                onClick={() => {
                  if (hasCustom) {
                    setSelectedPhoto(photo);
                  } else {
                    handleUploadClick(photo.id);
                  }
                }}
              >
                {hasCustom ? (
                  <>
                    <img
                      src={photo.customImage}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="p-2 rounded-full bg-white/80 text-rose-700 hover:bg-white transition-colors">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${theme.bg} p-6 flex flex-col items-center justify-center text-center`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                      <Camera className={`w-7 h-7 ${theme.iconColor}`} />
                    </div>
                    <span className="font-cursive text-xl text-rose-800 font-semibold mb-1">
                      {theme.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-600 bg-white/70 px-2.5 py-0.5 rounded-full mt-1">
                      <Upload className="w-3 h-3" />
                      Click to upload photo
                    </span>
                  </div>
                )}

                {/* Upload / Replace Action Badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUploadClick(photo.id);
                  }}
                  className="absolute bottom-2.5 right-2.5 p-2 rounded-xl bg-white/90 hover:bg-white text-rose-700 shadow-md backdrop-blur-md text-xs font-medium flex items-center gap-1 transition cursor-pointer"
                  title={hasCustom ? 'Change Photo' : 'Upload Photo'}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span className="text-[11px] hidden sm:inline">
                    {hasCustom ? 'Replace' : 'Upload'}
                  </span>
                </button>

                {/* Remove button if custom photo exists */}
                {hasCustom && (
                  <button
                    onClick={(e) => handleRemovePhoto(photo.id, e)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/90 hover:bg-red-50 text-red-500 shadow-md transition cursor-pointer"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Romantic Caption specified in prompt */}
              <div className="pt-4 pb-2 px-2 text-center flex-1 flex flex-col justify-center">
                <p className="font-cursive text-xl sm:text-2xl text-rose-800 font-semibold leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && selectedPhoto.customImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/5">
                <img
                  src={selectedPhoto.customImage}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center pt-4 pb-2">
                <p className="font-cursive text-2xl sm:text-3xl text-rose-800 font-bold">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
