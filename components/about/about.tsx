'use client';

import { useModeStore } from '@/app/lib/store/store';

export default function About() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);

  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        {/* Left - Introduction */}
        <div className="space-y-6 md:col-span-5">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight">
            About Me
          </h2>
          <h3 className="text-xl leading-tight font-semibold lg:text-3xl">
            I&rsquo;m a UI/UX Designer Crafting Seamless & Engaging Interfaces
          </h3>
          <p className="text-lg text-muted-foreground">
            I specialize in designing clean, user-focused interfaces using
            design systems and modern frameworks. With a strong eye for detail
            and a love for intuitive flows, I create experiences that feel as
            good as they look.
          </p>
        </div>

        {/* Right - Metrics / Highlights */}
        <div className="space-y-8 md:col-span-7">
          <h2 className="text-center text-xl leading-tight font-semibold lg:text-3xl">
            Designs That Deliver Real Impact
          </h2>

          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-4xl font-bold text-secondary hover:text-primary md:text-4xl'
                    : 'text-3xl font-bold text-primary hover:text-secondary md:text-4xl'
                }
              >
                50+
              </div>
              <p className="text-muted-foreground">Interfaces Designed</p>
            </div>
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-4xl font-bold text-secondary hover:text-primary md:text-4xl'
                    : 'text-3xl font-bold text-primary hover:text-secondary md:text-4xl'
                }
              >
                20+
              </div>
              <p className="text-muted-foreground">Design Systems Built</p>
            </div>
            <div className="space-y-2">
              <div
                className={
                  isDeadpool
                    ? 'text-4xl font-bold text-secondary hover:text-primary md:text-4xl'
                    : 'text-3xl font-bold text-primary hover:text-secondary md:text-4xl'
                }
              >
                100K+
              </div>
              <p className="text-muted-foreground">Users Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
