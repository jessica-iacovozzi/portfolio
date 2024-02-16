import me from '../assets/me.png';
import Image from './Image.jsx';
// import { TypeAnimation } from 'react-type-animation';
import './About.css';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

export default function About({ aboutRef }) {
  const { t } = useTranslation();

  return (
    <div ref={aboutRef} id='about' className='lg:h-screen xl:h-1/2 xl:mb-28'>
      <div className='about-div lg:h-fit flex relative bg-[#ffc0cb] m-5 md:m-10 my-20 lg:my-0 rounded-3xl'>
        <div className='rounded-s-3xl overflow-hidden flex-1 justify-center items-center hidden lg:flex'>
          <Image name={me} />
        </div>
        <div className='flex-1 flex flex-col justify-center text-gray-800 bg-transparent backdrop-blur-md m-10 lg:m-20 text-center lg:text-start'>
          <h2 className='text-lg mb-8'>{t('about_me')}</h2>
          <p className='text-xl'>{t('me_description')}
          {/* <TypeAnimation
            sequence={[
              "Ruby on Rails.",
              1000,
              "React.",
              1000,
              "Next.js.",
              1000,
              "Tailwind.",
              1000
            ]}
            speed={50}
            repeat={Infinity}
          /> */}
          </p>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  aboutRef: PropTypes.object,
  locale: PropTypes.string
};
