'use client';

import Link from 'next/link';
import { InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { useModeStore } from '@/app/lib/store/store';

const contactOptions = [
  {
    icon: <MailIcon />,
    title: 'Email Me',
    description: 'Let’s collaborate, share ideas, or just say hi.',
    href: 'mailto:your@gmail.com',
    label: 'your@gmail.com',
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    description: 'Explore my design work and daily inspiration.',
    href: 'https://www.instagram.com',
    label: '@yourhandle',
    newTab: true,
  },
  {
    icon: <PhoneIcon />,
    title: 'Call Me',
    description: 'Available on weekdays for a quick chat.',
    href: 'tel:+15550000000',
    label: '+1 (555) 000-0000',
  },
];

export default function Contact() {
  const isDeadpool = useModeStore((state) => state.isDeadpool);

  return (
    <section
      id="contact"
      className="container flex min-h-screen items-center justify-center py-12 md:py-20"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          I’m always open to new ideas and conversations.
        </p>

        <div className="grid gap-16 px-6 py-24 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-3">
          {contactOptions.map(
            ({ icon, title, description, href, label, newTab }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    isDeadpool
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
                <Link
                  href={href}
                  target={newTab ? '_blank' : undefined}
                  rel={newTab ? 'noopener noreferrer' : undefined}
                  className={`mt-4 font-medium transition-colors ${
                    isDeadpool
                      ? 'text-secondary hover:text-primary'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  {label}
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
