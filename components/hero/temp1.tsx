'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroBg } from '@/components/ui/hero-bg';
import Image from 'next/image';
import { ArrowRightIcon, FileTextIcon, MailIcon } from 'lucide-react';

export default function Hero() {
  const [mode, setMode] = useState<'deadpool' | 'professional'>('professional');
  const isDeadpool = mode === 'deadpool';

  const toggleMode = () => {
    setMode((prev) => (prev === 'deadpool' ? 'professional' : 'deadpool'));
  };

  // Title content for each mode
  const title = {
    deadpool: (
      <>
        Name's{' '}
        <span className="bg-gradient-to-r from-rose-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Bharathi
        </span>
        . <br className="hidden md:block" />
        <span className="mt-2 block">
          I code. I break stuff. Then fix it (usually).
        </span>
      </>
    ),
    professional: (
      <>
        Hi, I'm <span className="text-blue-500">Bharathi</span>
        <br className="hidden md:block" />
        <span className="mt-2 block">
          Building exceptional web experiences.
        </span>
      </>
    ),
  };

  // More engaging descriptions
  const description = {
    deadpool:
      'Saving the digital universe one `npm install` at a time. Armed with code, snacks, and questionable jokes.',
    professional:
      'Full-stack developer focused on crafting intuitive, robust applications with modern web technologies and clean design principles.',
  };

  // Button text variations
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

  // Skills badges - only shown in professional mode
  const skills = ['React', 'TypeScript', 'Next.js', 'UI/UX', 'Tailwind'];

  // Quote bubbles that change randomly - only in deadpool mode
  const quotes = [
    'Typing... sarcasm.exe launched.',
    'My code is like my jokes. Not everyone gets it.',
    'sudo make me a sandwich',
    "I break code so you don't have to!",
    'Maximum effort, minimum documentation.',
  ];

  return (
    <HeroBg>
      <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-16 px-4 pt-28 pb-16 md:grid-cols-2 md:px-6 lg:px-8">
        {/* Left Content */}
        <div className="relative flex flex-col items-center gap-6 text-center md:items-start md:gap-8 md:text-left">
          {/* Mode Toggle (Small screens) */}
          <div className="mb-2 block md:hidden">
            <Button
              onClick={toggleMode}
              variant="outline"
              size="sm"
              className="rounded-full text-sm"
            >
              {isDeadpool ? 'Switch to Professional' : 'Switch to Deadpool'}
            </Button>
          </div>

          {/* Animated Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white"
            >
              {isDeadpool ? title.deadpool : title.professional}
            </motion.h1>
          </AnimatePresence>

          {/* Animated Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-xl text-lg text-zinc-700 dark:text-zinc-300"
            >
              {isDeadpool ? description.deadpool : description.professional}
            </motion.p>
          </AnimatePresence>

          {/* Skills Section - Only in Professional Mode */}
          <AnimatePresence>
            {!isDeadpool && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 md:justify-start"
              >
                {skills.map((skill, index) => (
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

          {/* Power Level - Only in Deadpool Mode */}
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
          <div className="mt-2 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button
              size="lg"
              variant={isDeadpool ? 'default' : 'default'}
              className={
                isDeadpool
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
                  : ''
              }
            >
              {isDeadpool ? (
                buttons.deadpool.resume
              ) : (
                <span className="flex items-center gap-2">
                  <FileTextIcon size={18} />
                  {buttons.professional.resume}
                </span>
              )}
            </Button>

            <Button size="lg" variant="outline" className="group">
              {isDeadpool ? (
                buttons.deadpool.contact
              ) : (
                <span className="flex items-center gap-2">
                  <MailIcon size={18} />
                  {buttons.professional.contact}
                  <ArrowRightIcon
                    size={16}
                    className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </span>
              )}
            </Button>
          </div>

          {/* Comic Bubble - Only in Deadpool Mode */}
          {isDeadpool && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-16 left-4 w-max max-w-xs rounded-lg bg-white p-3 shadow-lg md:-top-14 md:left-0 dark:bg-zinc-800 dark:text-white"
              style={{
                clipPath:
                  'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 30% 100%, 50% 75%, 0% 75%)',
              }}
            >
              <p className="mb-2 text-sm font-medium">{quotes[0]}</p>
            </motion.div>
          )}
        </div>

        {/* Right: Image and Mode Toggle */}
        <div className="relative flex flex-col items-center gap-8">
          {/* Mode Toggle (Desktop) */}
          <div className="absolute top-0 right-0 z-10 hidden md:block">
            <Button
              onClick={toggleMode}
              variant="outline"
              size="sm"
              className="rounded-full shadow-sm"
            >
              {isDeadpool ? 'Switch to Professional' : 'Switch to Deadpool'}
            </Button>
          </div>

          {/* Hero Image with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${mode}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative flex w-full items-center justify-center"
            >
              <div
                className={`absolute inset-0 rounded-full ${isDeadpool ? 'bg-gradient-to-br from-rose-200 to-pink-100 dark:from-rose-900/20 dark:to-pink-800/10' : 'bg-blue-100 dark:bg-blue-900/20'} opacity-70 blur-3xl`}
              ></div>
              <Image
                src={
                  isDeadpool
                    ? '/images/hero-bharathi-deadpool-dev.svg'
                    : '/images/hero-bharathi-professional.svg'
                }
                alt="Bharathi's avatar"
                width={550}
                height={550}
                priority
                className="relative z-10 h-auto max-w-[90%] md:max-w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </HeroBg>
  );
}
