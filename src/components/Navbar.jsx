import { useTranslation } from "react-i18next";
import MovingComponent from 'react-moving-text';
import PropTypes from 'prop-types';

export default function Navbar({ aboutRef, projectsRef, contactRef, AtTop, scrollToRef }) {
  const { t } = useTranslation();
  const divClassnames = AtTop ? 'border-b-0.5 transition-all ease border-transparent bg-transparent' : 'backdrop-blur border-b-2.5 border-gray-950 transition-all ease duration-250 bg-gray-950/70'

  return (
    <header className='w-full fixed top-0 z-40'>
      <div className={divClassnames}>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="both">
          <ul className='flex text-gray-200 sm:text-2xl lg:text-xl justify-center lg:justify-start lg:px-14 py-7'>
            <li><button onClick={() => scrollToRef(aboutRef)} className=' me-4 lg:me-16 link'>{t('about')}</button></li>
            <li><button onClick={() => scrollToRef(projectsRef)} className='me-4 lg:me-12 link'>{t('projects')}</button></li>
            <li><button onClick={() => scrollToRef(contactRef)} className='link'>{t('contact')}</button></li>
          </ul>
        </MovingComponent>
      </div>
    </header>
 )
}

Navbar.propTypes = {
  aboutRef: PropTypes.object,
  projectsRef: PropTypes.object,
  contactRef: PropTypes.object,
  AtTop: PropTypes.bool,
  scrollToRef: PropTypes.func
}
