import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { SiBuymeacoffee } from 'react-icons/si';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useContext } from 'react';
import LocaleContext from '../LocaleContext';
import i18n from '../i18n';

export default function Footer() {
  const { locale } = useContext(LocaleContext);

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <>
      <div className='flex items-center relative bg-gray-950/25 backdrop-blur border-t-1.5 border-pink text-gray-400 mt-20 py-6'>
        <div className='items-center justify-center ms-0 flex-1 hidden sm:flex gap-1'>
          <MdKeyboardArrowLeft className='text-xl mt-0.5' />
          <p>Jessica Iacovozzi</p>
          <MdKeyboardArrowRight className='text-xl mt-0.5' />
        </div>
        <div className='flex items-center justify-center flex-1 gap-3'>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='hover:text-pink text-2xl'/>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer'>
            <BsGithub className='hover:text-pink text-2xl'/>
            <span className="sr-only">GitHub</span>
          </a>
          <a href='mailto:iacovozzi.jessica@gmail.com'>
            <TfiEmail className='hover:text-pink text-2xl'/>
            <span className="sr-only">Send me an email</span>
          </a>
          <a href='https://www.buymeacoffee.com/jiacovozzi'>
            <SiBuymeacoffee className='hover:text-pink text-2xl'/>
            <span className="sr-only">Buy me a coffee</span>
          </a>
        </div>
        <div className='flex justify-center flex-1 gap-1'>
          <button href='#' onClick={() => changeLocale('en')} className={locale === 'en' ? 'font-bold' : ''}>EN</button>
          |
          <button href='#' onClick={() => changeLocale('fr')} className={locale === 'fr' ? 'font-bold' : ''}>FR</button>
        </div>
      </div>
    </>
  )
}
