'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

const allVideos = [
  'BetAiESGUhE',
  '_Qh3LY3myds',
  'AthKx2yI9SU',
  '3v7fBJdhjos',
  'UbjqSU76oNU',
  'YZs78ZCti6U',
  'KVSVSXCgjwg',
];

export default function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener('resize', updateButtons);
    return () => window.removeEventListener('resize', updateButtons);
  }, [updateButtons]);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 400;
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  const btn =
    'absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 bg-white/90 backdrop-blur-sm hover:bg-accent hover:text-white disabled:opacity-0 disabled:pointer-events-none';

  return (
    <div className="relative px-14">
      <button onClick={() => scroll('left')} disabled={!canScrollLeft}
        className={`${btn} left-0`} aria-label="Vídeo anterior">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div ref={trackRef} onScroll={updateButtons}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {allVideos.map((id, i) => (
          <div key={i} className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] rounded-2xl overflow-hidden shadow-lg aspect-video bg-dark">
            <iframe className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}?rel=0`}
              title={`Depoimento visto americano ${i + 1}`}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen loading="lazy"/>
          </div>
        ))}
      </div>

      <button onClick={() => scroll('right')} disabled={!canScrollRight}
        className={`${btn} right-0`} aria-label="Próximo vídeo">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}
