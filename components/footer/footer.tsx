'use client';

import Link from 'next/link';
import { useModeStore } from '@/app/lib/store/store';

const links = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Skills', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'Resume', href: '#' },
  { title: 'Contact', href: '#' },
];

export default function Footer() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);

  return (
    <footer className="border-b py-5">
      <div className="mx-auto max-w-5xl px-6 font-bold">
        <div className="flex flex-wrap justify-between gap-6">
          <span
            className={
              isDeadpool
                ? 'text-secondary hover:text-primary'
                : 'text-primary hover:text-secondary'
            }
          >
            © {new Date().getFullYear()} Bharathi4real, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  isDeadpool
                    ? 'block text-secondary duration-150 hover:text-primary'
                    : 'block text-primary duration-150 hover:text-secondary'
                }
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
