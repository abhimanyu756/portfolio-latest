
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import { Contact, Skills } from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hackathons />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
