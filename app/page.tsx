/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useRef, useState } from 'react';

import { About, Experience, Navbar, Projects } from '@/view';

export default function Home() {
  const aboutContainer = useRef<HTMLDivElement | null>(null);
  const expContainer = useRef<HTMLDivElement | null>(null);
  const projectsContainer = useRef<HTMLDivElement | null>(null);

  const [activeNav, setActiveNav] = useState<string>('about');
  const [mousePos, setMousePos] = useState<any>({
    x: 0,
    y: 0,
  });

  // add mouse move listener at load to capture cursor position
  // for spotlight hover effect
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // add scroll event listener at load to capture scroll position
  // for highlight effect of active nav
  useEffect(() => {
    const handleScroll = () => {
      const positionAbout: any = aboutContainer.current?.offsetTop;
      const positionExp: any = expContainer.current?.offsetTop;
      const positionProjects: any = projectsContainer.current?.offsetTop;

      if (window.scrollY >= positionAbout) setActiveNav(() => 'about');
      if (window.scrollY >= positionExp - 50) setActiveNav(() => 'exp');
      if (window.scrollY >= positionProjects - 50)
        setActiveNav(() => 'projects');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="mx-auto min-h-screen min-w-screen font-inter bg-slate-900">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex">
          <Navbar activeNav={activeNav} />

          <div className="flex-1 ">
            <div id="about" ref={aboutContainer}>
              <About />
            </div>

            <div id="experience" ref={expContainer}>
              <Experience />
            </div>

            <div id="projects" ref={projectsContainer}>
              <Projects />
            </div>

            <p className="py-12 text-slate-400 text-sm">
              Thank you for visiting my Full Stack Developer Portfolio. If you
              have any inquiries or potential collaborations, I would be
              thrilled to discuss how my expertise can contribute to your
              vision.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
