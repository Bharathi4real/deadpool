'use client';

import { useModeStore } from '@/app/lib/store/store';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { AnimatePresence, motion } from 'framer-motion';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { DrawerTitle } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const navigationItems = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Skills', href: '#' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#' },
  { title: 'Resume', href: '#' },
  { title: 'Contact', href: '#' },
];

export default function Navbar() {
  const [elementFocused, setElementFocused] = useState<number | null>(null);

  const isDeadpool = useModeStore((s) => s.isDeadpool);
  const pathname = usePathname();

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };

  return (
    <nav className="fixed top-0 left-1/2 z-50 container mt-7 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-full bg-background/10 p-2 backdrop-blur-sm md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={isDeadpool ? '/images/deadpool.webp' : '/images/hero.svg'}
              alt="Bharathi's Avatar"
              width={50}
              height={50}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="relative hidden gap-4 lg:flex">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHoverButton(index)}
                onMouseLeave={() => handleHoverButton(null)}
                className="relative"
              >
                <AnimatePresence>
                  {elementFocused === index && (
                    <motion.div
                      layoutId="focused-element"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 -z-10 rounded-md bg-neutral-200 p-2 dark:bg-neutral-800"
                    />
                  )}
                </AnimatePresence>
                <Link
                  href={item.href}
                  className={
                    isDeadpool
                      ? 'p-3 text-lg font-bold text-secondary transition-colors hover:text-primary'
                      : 'p-3 text-lg font-bold text-primary transition-colors hover:text-secondary'
                  }
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop ThemeSwitcher */}
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        {/* Mobile ThemeSwitcher + Drawer Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSwitcher />
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="space-y-4 bg-accent p-6 backdrop-blur-md">
              <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHoverButton(index)}
                  onMouseLeave={() => handleHoverButton(null)}
                  className="relative w-full text-center"
                >
                  <AnimatePresence>
                    {elementFocused === index && (
                      <motion.div
                        layoutId="focused-element"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 -z-10 rounded-md bg-neutral-200 dark:bg-neutral-800"
                      />
                    )}
                  </AnimatePresence>
                  <Link
                    href={item.href}
                    className={`block text-lg font-bold transition-colors hover:text-primary ${
                      pathname === item.href
                        ? 'font-semibold text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
