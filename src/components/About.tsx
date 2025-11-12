import './About.css'
import { useTranslation } from 'react-i18next'
import { forwardRef } from 'react'

interface AboutProps {
  aboutRef?: React.RefObject<HTMLDivElement>
}

const About = forwardRef<HTMLDivElement, AboutProps>(function About({ aboutRef }, ref) {
  const { t } = useTranslation()

  return (
    <div ref={aboutRef || ref} id='about' className='lg:h-screen xl:h-1/2 xl:mb-28'>
      <div className='flex flex-col items-center relative xl:px-20 bg-gray-950/25 backdrop-blur border-y-1.5 border-pink px-4'>
        <h2 className='text-gray-400 text-xl lg:text-2xl font-semibold mt-8 lg:mt-12 mb-4 lg:mb-6'>{t('about_me')}</h2>

        <div className='flex-1 flex flex-col justify-center text-white bg-transparent backdrop-blur-md m-6 lg:m-20 text-center px-4 lg:px-0'>
          <p className='text-base leading-relaxed sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed max-w-3xl mx-auto'>
            {t('me_description')}
          </p>
        </div>
      </div>
    </div>
  )
})

export default About
