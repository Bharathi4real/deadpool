'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { FileTextIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useModeStore } from '@/app/lib/store/store';

export default function Hero() {
  const { mode, toggleMode, isDeadpool } = useModeStore();

  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = useMemo(
    () => [
      'Typing... sarcasm.exe launched.',
      'My code is like my jokes. Not everyone gets it.',
      'sudo make me a sandwich',
      "I break code so you don't have to!",
      'Maximum effort, minimum documentation.',
    ],
    [],
  );

  // Data
  const title = {
    deadpool: (
      <>
        Name&apos;s{' '}
        <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
          Bharathi
        </span>
        . <br className="hidden md:block" />
        <span className="mt-2 block text-xl md:text-2xl">
          I code. I break stuff. Then fix it (usually).
        </span>
      </>
    ),
    professional: (
      <>
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
          Bharathi
        </span>
        <br className="hidden md:block" />
        <span className="mt-2 block text-xl md:text-2xl">
          Building exceptional web experiences.
        </span>
      </>
    ),
  };

  const description = {
    deadpool: (
      <>
        Saving the digital universe one{' '}
        <span className="text-primary dark:text-secondary">
          &lsquo;npm install&rsquo;
        </span>{' '}
        at a time. Armed with code, snacks, and questionable jokes.
      </>
    ),
    professional: (
      <>
        Full-stack developer focused on crafting intuitive, robust applications
        with modern web technologies and clean design principles.
      </>
    ),
  };

  const buttons = {
    deadpool: {
      resume: 'Hire Me (I Dare You)',
      contact: 'Slide Into My Terminal',
    },
    professional: {
      resume: 'View Resume',
      contact: 'Contact Me',
    },
  };

  const skills = {
    professional: ['React', 'Next.js', 'TS', 'Tailwind'],
    deadpool: ['Stabby', 'Boomy', 'Healy', 'Snarky'],
  };

  useEffect(() => {
    if (!isDeadpool) return;

    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isDeadpool, quotes.length]);

  return (
    <div className="container mx-auto mt-28 min-h-screen py-10 md:py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <Button
            onClick={toggleMode}
            variant="outline"
            className="inset-0 z-10 mb-10 w-[200px] rounded-full text-sm lg:hidden"
          >
            {isDeadpool ? 'Professional Mode' : 'Deadpool Mode'}
          </Button>

          <div className="flex flex-col items-center space-y-3 md:hidden">
            <Image
              src={isDeadpool ? '/images/deadpool.webp' : '/images/hero.svg'}
              alt="Bharathi's avatar"
              width={500}
              height={500}
              priority
              className={
                isDeadpool
                  ? 'relative mt-15 h-[250px] w-[250px] object-contain'
                  : 'relative h-[250px] w-[250px] object-contain'
              }
            />
            {isDeadpool && (
              <div className="absolute top-50 -z-1 flex min-h-[90px] w-[250px] items-center rounded-md bg-red-950/50 p-2">
                <span className="text-white">{quotes[quoteIndex]}</span>
              </div>
            )}
          </div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
            >
              {isDeadpool ? title.deadpool : title.professional}
            </motion.h1>
          </AnimatePresence>

          <div className="min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${mode}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base text-zinc-700 sm:text-lg dark:text-zinc-300"
              >
                {isDeadpool ? description.deadpool : description.professional}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`skills-${mode}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-10 flex flex-wrap justify-center gap-2 md:justify-start"
              >
                {skills[isDeadpool ? 'deadpool' : 'professional'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className={
                        isDeadpool
                          ? 'rounded-full bg-red-100 px-3 py-1 text-sm text-red-600 dark:bg-red-500/30 dark:text-red-300'
                          : 'rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                      }
                    >
                      {skill}
                    </span>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button
              variant="default"
              className={
                isDeadpool
                  ? 'inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
                  : 'inline-flex items-center justify-center'
              }
            >
              {isDeadpool ? (
                <span>{buttons.deadpool.resume}</span>
              ) : (
                <span className="flex items-center gap-2">
                  <FileTextIcon size={18} />
                  {buttons.professional.resume}
                </span>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group inline-flex items-center justify-center"
            >
              {isDeadpool ? (
                <span>{buttons.deadpool.contact}</span>
              ) : (
                <span className="flex items-center gap-2">
                  <MailIcon size={18} />
                  {buttons.professional.contact}
                </span>
              )}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-end space-y-3">
          <div
            className={`absolute inset-0 -z-1 rounded-full ${
              isDeadpool
                ? 'bg-gradient-to-br from-rose-200 to-pink-100 dark:from-rose-900/20 dark:to-pink-800/10'
                : 'bg-blue-100 dark:bg-blue-900/20'
            } opacity-70 blur-3xl`}
          ></div>
          <div className="hidden flex-col items-end justify-end md:flex">
            <Button
              onClick={toggleMode}
              variant="outline"
              className="inset-0 z-10 hidden w-[200px] rounded-full text-sm lg:block"
            >
              {isDeadpool ? 'Professional Mode' : 'Deadpool Mode'}
            </Button>
            <Image
              src={isDeadpool ? '/images/deadpool.webp' : '/images/hero.svg'}
              alt="Bharathi's avatar"
              width={500}
              height={500}
              priority
              className="relative h-[250px] w-[250px] object-contain sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px]"
            />
            {isDeadpool && (
              <div
                className="thought absolute -top-120 -left-45 lg:-top-130"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quoteIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="w-[250px] text-sm font-medium text-black sm:text-base dark:text-red-700"
                  >
                    {quotes[quoteIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
