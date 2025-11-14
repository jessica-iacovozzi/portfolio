import './About.css'
import { useTranslation } from 'react-i18next'
import { forwardRef, useState } from 'react'
import LazyImage from './LazyImage'
import me from '../assets/me.png'
import meFunny from '../assets/me_funny.png'

// Front card component
const ProfileFrontCard = () => (
  <div className="profile-front">
    <LazyImage 
      src={me} 
      alt="Jessica Iacovozzi - Professional headshot" 
      className="w-full h-full rounded-full object-cover border-1.5 border-pink shadow-xl shadow-pink/20"
    />
  </div>
)

// Back card component
const ProfileBackCard = () => (
  <div className="profile-back">
    <LazyImage 
      src={meFunny} 
      alt="Alternative image" 
      className="w-full h-full rounded-full object-cover border-1.5 border-pink shadow-xl shadow-pink/20"
    />
  </div>
)

interface AboutProps {
  aboutRef?: React.RefObject<HTMLDivElement>
}

const About = forwardRef<HTMLDivElement, AboutProps>(function About({ aboutRef }, ref) {
  const { t } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const flipCardBody = (
    <>
      <ProfileFrontCard />
      <ProfileBackCard />
    </>
  )

  return (
    <div ref={aboutRef || ref} id='about' className='h-screen xl:h-1/2 xl:mb-28'>
      <div className='flex flex-col items-center relative xl:px-20 bg-gray-950/25 backdrop-blur border-y-1.5 border-pink px-4 py-6'>
        <h2 className='text-gray-400 text-xl lg:text-2xl font-semibold mt-8 lg:mt-12 mb-4 lg:mb-6'>{t('about_me')}</h2>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 m-6 lg:m-20 text-center lg:text-left px-4 lg:px-0 w-full max-w-6xl'>
          {/* Profile Flip Card */}
          <div className='flippable-profile-container'>
            <div 
              className={`profile-card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardClick}
            >
              {flipCardBody}
            </div>
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
