import './App.css';
import i18n from './i18n';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loading from './components/Loading.jsx';
import LocaleContext from './LocaleContext.jsx';

export default function App() {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scroll, setScroll] = useState();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const contentRef = useRef();
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

          if (scroll.current) {
            setTimeout(() => {
              if (scroll.current.focus) {
                scroll.current.focus();
              }
            }, 500);
          }
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
      const isAtTop = rect.top === 0;

      setIsAtTop(isAtTop);
    }
  };

  // Skip to main content function for accessibility
  const skipToContent = (e) => {
    e.preventDefault();
    contentRef.current.focus();
    window.scrollTo({
      top: contentRef.current.offsetTop - marginTop,
      behavior: 'smooth'
    });
  };

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
      <a 
          href="#main-content" 
          className="skip-link" 
          onClick={skipToContent}
          onFocus={(e) => e.target.classList.add('skip-link-visible')}
          onBlur={(e) => e.target.classList.remove('skip-link-visible')}
        >
          {t('skip_to_content')}
        </a>
        
        <Navbar AtTop={isAtTop} scrollToRef={scrollToRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        
        <main id="main-content" ref={contentRef} tabIndex="-1">
          <Header />
          <About aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </main>
        
        <Footer />
      </Suspense>
    </LocaleContext.Provider>
  )
}
