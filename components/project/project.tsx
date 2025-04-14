'use client';

import { useModeStore } from '@/app/lib/store/store';
import { StackedCarousel } from '@/components/ui/stacked-cards';

const imageSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80',
    title: 'Creative Agency Landing Page',
    link: 'https://example.com/agency',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=800&q=80',
    title: 'Finance Dashboard UI',
    link: 'https://example.com/dashboard',
  },
  {
    image:
      'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?auto=format&fit=crop&w=800&q=80',
    title: 'E-commerce Storefront',
    link: 'https://example.com/store',
  },
  {
    image:
      'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80',
    title: 'Portfolio Website',
    link: 'https://example.com/portfolio',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80',
    title: 'Restaurant Ordering App',
    link: 'https://example.com/restaurant',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=800&q=80',
    title: 'Blog Platform UI',
    link: 'https://example.com/blog',
  },
  {
    image:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    title: 'Social Media Analytics',
    link: 'https://example.com/social-analytics',
  },
  {
    image:
      'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80',
    title: 'Travel Booking Site',
    link: 'https://example.com/travel',
  },
];

export default function Projects() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);
  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          A curated selection of my best work.{' '}
          <span className={isDeadpool ? 'text-secondary' : 'text-primary'}>
            Click to explore each project.
          </span>
        </p>
      </div>
      <div className="relative flex items-center justify-center p-4 sm:p-16">
        <StackedCarousel slides={imageSlides} />
      </div>
    </section>
  );
}
