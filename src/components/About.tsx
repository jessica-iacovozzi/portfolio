import './About.css'
import { useTranslation } from 'react-i18next'
import { forwardRef } from 'react'
import LazyImage from './LazyImage'
import me from '../assets/me.png'

interface AboutProps {
  aboutRef?: React.RefObject<HTMLDivElement>
}

const About = forwardRef<HTMLDivElement, AboutProps>(function About({ aboutRef }, ref) {
  const { t } = useTranslation()

  return (
    <div ref={aboutRef || ref} id='about' className='h-screen xl:h-1/2 xl:mb-28'>
      <div className='flex flex-col items-center relative xl:px-20 bg-gray-950/25 backdrop-blur border-y-1.5 border-pink px-4 py-6'>
        <h2 className='text-gray-400 text-xl lg:text-2xl font-semibold mt-8 lg:mt-12 mb-4 lg:mb-6'>{t('about_me')}</h2>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 m-6 lg:m-20 text-center lg:text-left px-4 lg:px-0 w-full max-w-6xl'>
          {/* Profile Image */}
          <div className='flex-shrink-0'>
            <LazyImage 
              src={me} 
              alt="Jessica Iacovozzi - Professional headshot" 
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-1.5 border-pink shadow-xl shadow-pink/20"
            />
          </div>
          
          {/* About Text */}
          <div className='flex-1 flex flex-col justify-center text-white bg-transparent backdrop-blur-md'>
            <p className='text-base leading-relaxed sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed max-w-3xl mx-auto lg:mx-0'>
              {t('me_description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
