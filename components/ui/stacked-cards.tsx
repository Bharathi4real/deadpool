'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useModeStore } from '@/app/lib/store/store';

interface StackedCarouselProps {
  slides: {
    image: string;
    title: string;
    link: string;
  }[];
  className?: string;
  autoplayDelay?: number; // in ms
}

export function StackedCarousel({
  slides,
  className,
  autoplayDelay = 3000,
}: StackedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isDeadpool = useModeStore((s) => s.isDeadpool);

  const getSlideIndex = (index: number) => {
    const positions = slides.map((_, i) => {
      const diff = (i - activeIndex + slides.length) % slides.length;
      return diff;
    });
    return positions[index];
  };

  useEffect(() => {
    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, autoplayDelay);
    };

    startAutoplay();

    const container = containerRef.current;

    const stopAutoplay = () =>
      intervalRef.current && clearInterval(intervalRef.current);
    container?.addEventListener('mouseenter', stopAutoplay);
    container?.addEventListener('mouseleave', startAutoplay);

    return () => {
      stopAutoplay();
      container?.removeEventListener('mouseenter', stopAutoplay);
      container?.removeEventListener('mouseleave', startAutoplay);
    };
  }, [slides.length, autoplayDelay]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // ✅ Responsive sizing
        'relative aspect-square w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]',
        className,
      )}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-1 text-white backdrop-blur-md transition-all hover:bg-white/20 sm:-left-12 sm:p-2"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-1 text-white backdrop-blur-md transition-all hover:bg-white/20 sm:-right-12 sm:p-2"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const position = getSlideIndex(index);
          const isActive = position === 0;

          return (
            <div
              key={index}
              className={cn(
                'absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-all duration-700',
                'cursor-pointer hover:scale-[1.03]',
                {
                  'z-30': isActive,
                  'z-20': position === 1 || position === slides.length - 1,
                  'z-10': position === 2 || position === slides.length - 2,
                  'opacity-0': position > 2 && position < slides.length - 2,
                  '-translate-x-[98%]': position === slides.length - 1,
                  'translate-x-[0%]': position === 1,
                  'scale-90': !isActive,
                  '-rotate-12': position === slides.length - 1,
                  'rotate-12': position === 1,
                },
              )}
              onClick={() => !isActive && setActiveIndex(index)}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: isActive
                  ? '0 0 30px rgba(0, 0, 0, 0.4)'
                  : '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              {isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-black/60 p-4 text-center text-white transition-opacity duration-500">
                  <h3 className="text-base font-semibold sm:text-xl">
                    {slide.title}
                  </h3>
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-gray-200 sm:text-sm"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-1 sm:-bottom-12 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              index === activeIndex
                ? `w-4 sm:w-6 ${isDeadpool ? 'bg-secondary' : 'bg-primary'}`
                : `${isDeadpool ? 'bg-secondary/50 hover:bg-secondary' : 'bg-primary/50 hover:bg-primary'}`,
            )}
          />
        ))}
      </div>
    </div>
  );
}
