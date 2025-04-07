'use client';

import Link from 'next/link';
import { useModeStore } from '@/app/lib/store/store';
import { HeartIcon } from 'lucide-react';

// const links = [
//   { title: 'Home', href: '#' },
//   { title: 'About', href: '#' },
//   { title: 'Skills', href: '#' },
//   { title: 'Experience', href: '#experience' },
//   { title: 'Projects', href: '#' },
//   { title: 'Resume', href: '#' },
//   { title: 'Contact', href: '#' },
// ];

export default function Footer() {
  const isDeadpool = useModeStore((s) => s.isDeadpool);

  return (
    <footer className="border-b py-5">
      <div className="container mx-auto font-bold">
        <div className="flex justify-between text-center text-sm">
          <div
            className={
              isDeadpool
                ? 'text-secondary hover:text-primary'
                : 'text-primary hover:text-secondary'
            }
          >
            © {new Date().getFullYear()} Bharathi4real, All rights reserved
          </div>
          <div className="flex items-center gap-2">
            Made with{' '}
            <span
              className={
                isDeadpool
                  ? 'text-secondary hover:text-primary'
                  : 'text-primary hover:text-secondary'
              }
            >
              <HeartIcon className="size-4 fill-current" />
            </span>{' '}
            by{' '}
            <Link
              href="https://www.bharathi.online"
              className={
                isDeadpool
                  ? 'text-secondary hover:text-primary'
                  : 'text-primary hover:text-secondary'
              }
              target="_blank"
            >
              Bharathi4real
            </Link>
          </div>
          {/* <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
}
