import { useTranslation } from "react-i18next"
import { useState, useEffect, useContext, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LocaleContext from '../LocaleContext'

interface RefObject {
  current: HTMLDivElement | null
  focus?: () => void
  offsetTop: number
}

interface MobileMenuProps {
  aboutRef?: RefObject
  projectsRef?: RefObject
  contactRef?: RefObject
  scrollToRef: (ref: RefObject) => void
}

export default function MobileMenu({ aboutRef, projectsRef, contactRef, scrollToRef }: MobileMenuProps): JSX.Element {
  const { t, i18n } = useTranslation()
  const { locale } = useContext(LocaleContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [_isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const firstNavButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLocale = (l: string): void => {
    if (locale !== l) {
      i18n.changeLanguage(l)
    }
  }

  // Body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && firstNavButtonRef.current) {
      firstNavButtonRef.current.focus()
    }

    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus()
    }
  }, [isOpen])

  const toggleMenu = (event?: React.MouseEvent): void => {
    if (isAnimating) return
    event?.preventDefault()
    event?.stopPropagation()
    setIsAnimating(true)
    setIsOpen(!isOpen)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const closeMenu = (event?: React.MouseEvent): void => {
    if (isAnimating) return
    event?.preventDefault()
    event?.stopPropagation()
    setIsAnimating(true)
    setIsOpen(false)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleNavigation = (ref: RefObject, event?: React.MouseEvent): void => {
    event?.preventDefault()
    event?.stopPropagation()
    scrollToRef(ref)
    closeMenu()
  }

  return (
    <>
    {/* Hamburger Menu Button */}
    <button
      ref={triggerRef}
      onClick={(e) => toggleMenu(e)}
      className={`sm:hidden fixed top-4 right-4 p-3 text-pink transition-all duration-300 outline-none ring-2 ring-pink min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 touch-manipulation rounded-lg z-50 ${
        isOpen ? 'bg-gray-950' : 'backdrop-blur-sm bg-gray-950/90'
      }`}
      aria-label={isOpen ? t('close_menu') : t('open_menu')}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <FaTimes className="w-6 h-6" aria-hidden="true" />
      ) : (
        <FaBars className="w-6 h-6" aria-hidden="true" />
      )}
    </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`sm:hidden h-screen fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => closeMenu(e)}
          aria-hidden="true"
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-gray-950 shadow-2xl transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            {/* Menu Title */}
            <h2 id="mobile-menu-title" className="sr-only">
              {t('main_navigation')}
            </h2>
            
            {/* Navigation Links */}
            <nav aria-label={t('main_navigation')} className="flex-1">
              <ul className="space-y-2">
                <li>
                  <button
                    ref={firstNavButtonRef}
                    onClick={(e) => handleNavigation(aboutRef!, e)}
                    className="w-full text-left text-lg text-gray-200 hover:text-pink transition-all duration-200 py-4 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink focus:bg-gray-900 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
                    aria-label={t('about')}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {t('about')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavigation(projectsRef!, e)}
                    className="w-full text-left text-lg text-gray-200 hover:text-pink transition-all duration-200 py-4 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink focus:bg-gray-900 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
                    aria-label={t('projects')}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {t('projects')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavigation(contactRef!, e)}
                    className="w-full text-left text-lg text-gray-200 hover:text-pink transition-all duration-200 py-4 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink focus:bg-gray-900 transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
                    aria-label={t('contact')}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {t('contact')}
                  </button>
                </li>
              </ul>
            </nav>
            
            {/* Locale Switcher */}
            <div className="border-t border-gray-800 pt-6" role="none">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => changeLocale('en')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] active:scale-95 touch-manipulation ${
                    locale === 'en' 
                      ? 'bg-pink text-gray-950 font-semibold' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  aria-label="Switch to English"
                  aria-pressed={locale === 'en'}
                  tabIndex={isOpen ? 0 : -1}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLocale('fr')}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] active:scale-95 touch-manipulation ${
                    locale === 'fr' 
                      ? 'bg-pink text-gray-950 font-semibold' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  aria-label="Switch to French"
                  aria-pressed={locale === 'fr'}
                  tabIndex={isOpen ? 0 : -1}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
