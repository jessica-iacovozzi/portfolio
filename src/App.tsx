import './App.css'
import i18n from './i18n.ts'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import LocaleContext from './LocaleContext.tsx'
import { Analytics } from "@vercel/analytics/react"

interface RefObject {
  current: HTMLDivElement | null
  focus?: () => void
  offsetTop: number
}

export default function App(): JSX.Element {
  const { t, ready } = useTranslation()
  const [locale, setLocale] = useState<string>(i18n.language)
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [scroll, setScroll] = useState<RefObject | undefined>()
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const marginTop = 85

  useEffect(() => {
    i18n.on('languageChanged', () => {
      setLocale(i18n.language)
      if (i18n.resolvedLanguage) {
        document.documentElement.lang = i18n.resolvedLanguage
      }
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const scrollToTargetWithMargin = () => {
      if(scroll && scroll.current) {
        const targetScrollPosition = scroll.current.offsetTop - marginTop
        setScroll(undefined)

        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth',
        })

        if (scroll.current) {
          setTimeout(() => {
            scroll.current!.focus()
          }, 500)
        }
      }
    }

    scrollToTargetWithMargin()
  }, [scroll])

  const scrollToRef = (ref: RefObject) => {
    setScroll(ref)
  }

  const handleScroll = () => {
    const divElement = document.getElementById('root')

    if (divElement) {
      const rect = divElement.getBoundingClientRect()
      const isAtTop = rect.top === 0

      setIsAtTop(isAtTop)
    }
  }

  // Skip to main content function for accessibility
  const skipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    contentRef.current!.focus()
    window.scrollTo({
      top: contentRef.current!.offsetTop - marginTop,
      behavior: 'smooth'
    })
  }

  if (!ready) return <div>Loading...</div>;

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <a 
          href="#main-content" 
          className="skip-link" 
          onClick={skipToContent}
          onFocus={(e) => e.target.classList.add('skip-link-visible')}
          onBlur={(e) => e.target.classList.remove('skip-link-visible')}
        >
          {t('skip_to_content')}
        </a>
        
        <Navbar AtTop={isAtTop} scrollToRef={scrollToRef} aboutRef={aboutRef as RefObject} projectsRef={projectsRef as RefObject} contactRef={contactRef as RefObject} />
        
        <main id="main-content" ref={contentRef} tabIndex={-1}>
          <Header />
          <About aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </main>
        
        <Footer />
        <Analytics />
    </LocaleContext.Provider>
  )
}
