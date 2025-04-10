import Experience from '@/components/experience/experience';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import Skills from '@/components/skills/skills';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
