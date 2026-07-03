"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Slide = { headline: string; body: string };

/**
 * Launch hero carousel — rotates 3-5 brand/positioning messages.
 * All 5 candidate slides from the content spec are included by default;
 * trim this array to the 3-5 Keith commits to.
 */
const SLIDES: Slide[] = [
  {
    headline: "What do Americans actually agree on?",
    body: "Eighty-two federal policies. Supermajority support across party lines. Search and see.",
  },
  {
    headline: "We are not as divided as it feels.",
    body: "Democrats believe only 30% of Republicans support universal background checks. The real number: 75%.",
  },
  {
    headline: "The answer is in front of us.",
    body: "People can act in concert when they see they are standing on common ground.",
  },
  {
    headline: "Free, nonpartisan, no agenda.",
    body: "Self-funded. No donations. No advertising. No party affiliation. Just the data.",
  },
  {
    headline: "Built on rigorous research.",
    body: "Primary source: University of Maryland's Program for Public Consultation. Plus Pew, KFF, Gallup, and other peer-reviewed sources.",
  },
];

const INTERVAL_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  const count = SLIDES.length;
  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || count <= 1) return;
    const t = setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, paused, count, go]);

  return (
    <div
      className="relative mt-4 sm:mt-5"
      role="group"
      aria-roledescription="carousel"
      aria-label="Common Ground highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Prev */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Slides — fixed min-height avoids layout shift between messages */}
        <div className="flex-1 min-w-0 min-h-[88px] sm:min-h-[78px]" aria-live="polite">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.headline}
              hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="text-center"
            >
              <h2 className="font-display text-[22px] sm:text-[32px] leading-[1.1] tracking-[-0.5px] font-extrabold text-white [text-wrap:balance]">
                {slide.headline}
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] leading-[1.45] text-[#c7cfdc] mt-2 [text-wrap:pretty]">
                {slide.body}
              </p>
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="group flex items-center justify-center min-h-0 min-w-0 p-0.5 focus-visible:outline-white"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-4 bg-[#e8b8be]"
                  : "w-1.5 bg-white/30 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
