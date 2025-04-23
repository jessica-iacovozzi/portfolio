import './App.css';
import i18n from './i18n';
import { useState, useEffect, useRef, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';
import LocaleContext from './LocaleContext.jsx';

export default function App() {
  const [locale, setLocale] = useState(i18n.language);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scroll, setScroll] = useState();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const marginTop = 85;

  useEffect(() => {
    i18n.on('languageChanged', () => {
      setLocale(i18n.language);
      document.documentElement.lang = i18n.resolvedLanguage;
    });

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
    const divElement = document.getElementById('root');

    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      const isAtTop = rect.top == 0;

      setIsAtTop(isAtTop);
    }
  };

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <Navbar AtTop={isAtTop} scrollToRef={scrollToRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        <Header />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </Suspense>
    </LocaleContext.Provider>
  )
}
