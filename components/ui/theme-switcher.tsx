'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isSpinning, setIsSpinning] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setIsSpinning(true);
    setTheme(isDark ? 'light' : 'dark');
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{
              rotate: isSpinning ? 360 : 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6 },
            }}
            exit={{
              rotate: 90,
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0 }}
            animate={{
              rotate: isSpinning ? 360 : 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6 },
            }}
            exit={{
              rotate: -90,
              opacity: 0,
              scale: 0,
              transition: { duration: 0.3 },
            }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
