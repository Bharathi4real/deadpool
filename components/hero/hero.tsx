'use client';

import { Button } from '@/components/ui/button';
import { HeroBg } from '@/components/ui/hero-bg';
import { AnimatePresence, motion } from 'framer-motion';
import { FileTextIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const [mode, setMode] = useState<'deadpool mode' | 'professional mode'>(
    'professional mode',
  );
  const isDeadpool = mode === 'deadpool mode';
  const [quoteIndex, setQuoteIndex] = useState(0);

  const toggleMode = () => {
    setMode((prev) =>
      prev === 'deadpool mode' ? 'professional mode' : 'deadpool mode',
    );
  };

  const title = {
    deadpool: (
      <>
        Name's{' '}
        <span className="bg-gradient-to-r from-rose-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Bharathi
        </span>
        . <br className="hidden md:block" />
        <span className="mt-2 block text-xl sm:text-2xl md:text-3xl">
          I code. I break stuff. Then fix it (usually).
        </span>
      </>
    ),
    professional: (
      <>
        Hi, I'm <span className="text-blue-500">Bharathi</span>
        <br className="hidden md:block" />
        <span className="mt-2 block text-xl sm:text-2xl md:text-3xl">
          Building exceptional web experiences.
        </span>
      </>
    ),
  };

  const description = {
    deadpool: (
      <>
        Saving the digital universe one{' '}
        <span className="text-secondary">'npm install'</span> at a time. Armed
        with code, snacks, and questionable jokes.
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
      resume: '🧾 Hire Me (I Dare You)',
      contact: '💌 Slide Into My Terminal',
    },
    professional: {
      resume: 'View Resume',
      contact: 'Contact Me',
    },
  };

  const skills = ['React', 'TypeScript', 'Next.js', 'UI/UX', 'Tailwind'];

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

  useEffect(() => {
    if (!isDeadpool) return;

    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isDeadpool, quotes.length]);

  return (
    <HeroBg>
      <div className="container mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-12 px-4 pt-28 pb-12 md:grid md:grid-cols-2 md:gap-16 md:px-6 lg:px-8">
        {/* Left Content */}
        <div className="relative flex flex-col items-center gap-6 text-center md:items-start md:gap-8 md:text-left">
          {/* Toggle (Mobile) */}
          <div className="mb-2 block md:hidden">
            <Button
              onClick={toggleMode}
              variant="outline"
              className="inline-flex w-full items-center justify-center rounded-full text-sm"
            >
              {isDeadpool ? 'Professional Mode' : 'Deadpool Mode'}
            </Button>
          </div>

          {/* Title */}
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

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-xl text-base text-zinc-700 sm:text-lg dark:text-zinc-300"
            >
              {isDeadpool ? description.deadpool : description.professional}
            </motion.p>
          </AnimatePresence>

          {/* Skills */}
          <AnimatePresence>
            {!isDeadpool && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 md:justify-start"
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Power Level */}
          <AnimatePresence>
            {isDeadpool && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Bug Squashing Level
                  </span>
                  <span className="text-sm font-bold text-rose-500">
                    Over 9000
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 md:justify-start">
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

        {/* Right: Image + Toggle */}
        <div className="relative flex flex-col items-center justify-center">
          <Button
            onClick={toggleMode}
            variant="outline"
            className="z-10 hidden self-end rounded-full text-sm md:block"
          >
            {isDeadpool ? 'Professional Mode' : 'Deadpool Mode'}
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${mode}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative flex min-h-[300px] w-full items-center justify-center sm:min-h-[400px] md:min-h-[520px]"
            >
              <div
                className={`absolute inset-0 rounded-full ${
                  isDeadpool
                    ? 'bg-gradient-to-br from-rose-200 to-pink-100 dark:from-rose-900/20 dark:to-pink-800/10'
                    : 'bg-blue-100 dark:bg-blue-900/20'
                } opacity-70 blur-3xl`}
              ></div>

              <Image
                src={isDeadpool ? '/images/deadpool.webp' : '/images/hero.svg'}
                alt="Bharathi's avatar"
                width={500}
                height={500}
                priority
                className="relative z-10 h-[250px] w-[250px] object-contain sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]"
              />

              {isDeadpool && (
                <div className="thought absolute -top-65 -left-7/12 -translate-x-1/2 z-5 w-[240px] h-[100px] text-center text-black">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={quoteIndex}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm font-medium"
                    >
                      {quotes[quoteIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </HeroBg>
  );
}
