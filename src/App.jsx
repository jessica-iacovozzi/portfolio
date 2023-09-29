import './App.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isAboutAtTop, setIsAboutAtTop] = useState(false);
  const [scroll, setScroll] = useState();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const marginTop = 85;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToTargetWithMargin = () => {
        if(scroll) {
          const targetScrollPosition = scroll.current.offsetTop - marginTop;
          setScroll('');

          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        }
    };

    scrollToTargetWithMargin();
  }, [scroll]);

  const scrollToRef = (ref) => {
    setScroll(ref);
  };

  const handleScroll = () => {
    const divElement = document.getElementById('about');

    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      const isAtTop = rect.top <= 85;

      setIsAboutAtTop(isAtTop);
    }
  };

  return (
    <>
      <Navbar aboutAtTop={isAboutAtTop} scrollToRef={scrollToRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Header />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  )
}
