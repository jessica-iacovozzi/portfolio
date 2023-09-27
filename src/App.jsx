import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [isAboutAtTop, setIsAboutAtTop] = useState(false);
  const [scrollAbout, setScrollAbout] = useState(false);

  const scrollToAbout = () => {
    setScrollAbout(true);
  };

  const handleScroll = () => {
    const divElement = document.getElementById('about');

    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      const isAtTop = rect.top <= 0;

      setIsAboutAtTop(isAtTop);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar aboutAtTop={isAboutAtTop} scrollToAbout={scrollToAbout} />
      <Header />
      <About scrollAbout={scrollAbout} />
    </>
  )
}

export default App;
