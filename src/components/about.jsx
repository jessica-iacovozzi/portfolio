import './About.css';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

export default function About({ aboutRef }) {
  const { t } = useTranslation();

  return (
    <div ref={aboutRef} id='about' className='lg:h-screen xl:h-1/2 xl:mb-28'>
      <div className='flex flex-col items-center relative xl:px-20 bg-gray-950/25 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-lg mt-12'>{t('about_me')}</h2>

        <div className='flex-1 flex flex-col justify-center text-white bg-transparent backdrop-blur-md m-10 lg:m-20 text-center'>
          <p className='text-xl'>{t('me_description')}
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
