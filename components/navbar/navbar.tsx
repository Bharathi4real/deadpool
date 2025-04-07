'use client';

import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const navigationItems = [
  {
    title: 'Traffic Light',
    href: '/traffic-light',
    items: [],
  },
  {
    title: 'Snake Game',
    href: '/snake-game',
    items: [],
  },
  {
    title: 'Memory Game',
    href: '/memory-game',
    items: [],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-1/2 z-50 container mt-7 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-full bg-background/10 p-2 backdrop-blur-sm md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/orcdev.png"
              alt="Orc Dev"
              width={50}
              height={50}
            />
          </Link>

          <div className="hidden gap-4 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  pathname === item.href
                    ? 'font-semibold text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 md:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-primary ${
                pathname === item.href
                  ? 'font-semibold text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
}
