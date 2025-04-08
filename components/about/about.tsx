'use client';

import { useModeStore } from '@/app/lib/store/store';

export default function About() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        {/* Left - Introduction */}
        <div className="space-y-6 md:col-span-5">
          <h2 className="text-xl leading-tight font-semibold lg:text-3xl">
            Hey, I'm a Creator of Clean, Conversion-Driven Digital Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a digital marketing content writer and full-stack developer
            specializing in Next.js, Tailwind CSS, and responsive design. With a
            background in SEO and UX-focused writing, I craft interfaces and
            words that convert.
          </p>
        </div>

        {/* Right - Metrics / Highlights */}
        <div className="space-y-8 md:col-span-7">
          <h2 className="text-center text-xl leading-tight font-semibold lg:text-3xl">
            What I've Built & Achieved
          </h2>

          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-5xl font-bold text-secondary hover:text-primary'
                    : 'text-5xl font-bold text-primary hover:text-secondary'
                }
              >
                15+
              </div>
              <p className="text-muted-foreground">Brands Boosted</p>
            </div>
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-5xl font-bold text-secondary hover:text-primary'
                    : 'text-5xl font-bold text-primary hover:text-secondary'
                }
              >
                100K+
              </div>
              <p className="text-muted-foreground">Words Published</p>
            </div>
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-5xl font-bold text-secondary hover:text-primary'
                    : 'text-5xl font-bold text-primary hover:text-secondary'
                }
              >
                50+
              </div>
              <p className="text-muted-foreground">Web Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


