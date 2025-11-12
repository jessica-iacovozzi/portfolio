import { useTranslation } from "react-i18next"
import { Suspense, lazy } from 'react'

const MobileMenu = lazy(() => import('./MobileMenu'))

interface RefObject {
  current: HTMLDivElement | null
  focus?: () => void
  offsetTop: number
}

interface NavbarProps {
  aboutRef?: RefObject
  projectsRef?: RefObject
  contactRef?: RefObject
  AtTop: boolean
  scrollToRef: (ref: RefObject) => void
}

export default function Navbar({ aboutRef, projectsRef, contactRef, AtTop, scrollToRef }: NavbarProps): JSX.Element {
  const { t } = useTranslation()
  const divClassnames = AtTop ? 'border-b-0.5 transition-all ease border-transparent bg-transparent' : 'backdrop-blur border-b-2.5 border-gray-950 transition-all ease duration-250 bg-gray-950/70'

  return (
    <header className='w-full fixed top-0 z-40'>
      <div className={divClassnames}>
        <div className="animate-fade-in-down">
          <nav aria-label={t('main_navigation')}>
            <ul className='hidden sm:flex text-gray-200 text-lg sm:text-xl lg:text-xl justify-center lg:justify-start lg:px-14 py-7' role="menu">
              <li role="none"><button onClick={() => scrollToRef(aboutRef!)} className='me-4 lg:me-16 link focus:outline-none text-base sm:text-lg lg:text-xl' role="menuitem" aria-label={t('about')}>{t('about')}</button></li>
              <li role="none"><button onClick={() => scrollToRef(projectsRef!)} className='me-4 lg:me-12 link focus:outline-none text-base sm:text-lg lg:text-xl' role="menuitem" aria-label={t('projects')}>{t('projects')}</button></li>
              <li role="none"><button onClick={() => scrollToRef(contactRef!)} className='link focus:outline-none text-base sm:text-lg lg:text-xl' role="menuitem" aria-label={t('contact')}>{t('contact')}</button></li>
            </ul>
          </nav>
        </div>
        
        <Suspense fallback={<div className="sm:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-gray-800 rounded-lg animate-pulse"></div>}>
          <MobileMenu 
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            scrollToRef={scrollToRef}
          />
        </Suspense>
      </div>
    </header>
 )
}
