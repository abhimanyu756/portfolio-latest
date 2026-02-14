
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import { Contact, Skills } from './components/Contact';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const sections = ['Hero', 'Projects', 'Hackathons', 'Experience', 'Certifications', 'Connect'];
  const [activeSection, setActiveSection] = useState('Hero');
  const [direction, setDirection] = useState(0);

  const activeIndex = sections.indexOf(activeSection);

  const handleNext = () => {
    setDirection(1);
    const nextIndex = (activeIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const handlePrev = () => {
    setDirection(-1);
    const prevIndex = (activeIndex - 1 + sections.length) % sections.length;
    setActiveSection(sections[prevIndex]);
  };

  const handleNavClick = (section: string) => {
    const newIndex = sections.indexOf(section);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveSection(section);
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'Hero':
        return <Hero />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Hackathons':
        return <Hackathons />;
      case 'Certifications':
        return <Certifications />;
      case 'Connect':
        return (
          <div style={{ paddingTop: '100px' }}>
            <Skills />
            <Contact />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="app" style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />

      <main style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex' }}>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            padding: '12px',
            cursor: 'pointer',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
          className="nav-arrow"
        >
          <ChevronLeft size={32} />
        </button>

        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeSection}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="no-scrollbar"
              style={{
                height: '100%',
                overflowY: 'auto',
                paddingTop: '64px',
                paddingBottom: '40px',
                paddingLeft: '60px', // Space for arrows
                paddingRight: '60px',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
              }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            padding: '12px',
            cursor: 'pointer',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
          className="nav-arrow"
        >
          <ChevronRight size={32} />
        </button>

      </main>
    </div>
  );
}

export default App;
