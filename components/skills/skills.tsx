'use client';

import { useModeStore } from '@/app/lib/store/store';
import SkillComponent from '@/components/skills/skill-component';

export default function Skills() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);

  const highlight = isDeadpool ? 'text-secondary' : 'text-primary';

  return (
    <section className="container py-12 md:py-20" id="skills">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Left - Graphics */}
        <div className="flex flex-col justify-center px-4 md:px-0">
          <SkillComponent />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center px-4 md:px-0">
          <h2 className="mb-6 text-center text-4xl font-semibold tracking-tight md:text-left">
            Skills
          </h2>
          <p className="text-center text-lg leading-relaxed md:max-w-xl md:text-left">
            I design <span className={highlight}>intuitive interfaces</span> and{' '}
            <span className={highlight}>seamless experiences</span> that work
            beautifully across devices.
          </p>
          <p className="mt-4 text-center text-lg leading-relaxed md:max-w-xl md:text-left">
            From <span className={highlight}>research</span> to{' '}
            <span className={highlight}>Figma</span> to launch. I bring ideas to
            life with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
