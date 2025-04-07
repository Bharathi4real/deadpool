'use client';

import { useModeStore } from '@/app/lib/store/store';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Zinavo Private Limited',
    period: '2023 - Present',
    description:
      'Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
  },
];

export default function Experience() {
  const isDeadpool = useModeStore((state) => state.isDeadpool);

  return (
    <div id="experience" className="container mx-auto py-10 md:py-16">
      <h2
        className={
          isDeadpool
            ? 'mb-8 text-2xl font-bold text-secondary'
            : 'mb-8 text-2xl font-bold text-primary'
        }
      >
        Experience
      </h2>
      <div className="relative ml-3">
        {/* Timeline line */}
        <div
          className={`absolute top-4 bottom-0 left-0 border-l-2 ${isDeadpool ? 'border-[#fa0000]' : 'border-border'}`}
        />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div
              key={index}
              className="relative max-w-[90%] pb-12 pl-8 last:pb-0 lg:max-w-[50%]"
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 ${isDeadpool ? 'border-[#fa0000]' : 'border-primary'} bg-background`}
              />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
                      isDeadpool
                        ? 'bg-red-100 dark:bg-red-500/30'
                        : 'bg-blue-100 dark:bg-blue-900/30'
                    }`}
                  >
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base font-semibold sm:text-lg">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium sm:text-xl">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={
                        isDeadpool
                          ? 'rounded-full bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-500/30 dark:text-red-300'
                          : 'rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
