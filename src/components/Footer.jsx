import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { RxSlash } from 'react-icons/rx';
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
      <div className='flex justify-around items-center relative bg-gray-950/25 backdrop-blur border-t-1.5 border-pink text-gray-400 mt-20'>
        <div className='flex items-center'>
          <MdKeyboardArrowLeft className='text-xl mt-0.5 -me-0.5' />
          <p>Jessica Iacovozzi</p>
          <RxSlash />
          <MdKeyboardArrowRight className='-ms-2 text-xl mt-0.5' />
        </div>
        <div className='flex justify-evenly items-center h-[70px] w-[150px]'>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' target='_blank' rel='noreferrer'><BsLinkedin className='hover:text-pink text-2xl'/></a>
          <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer'><BsGithub className='hover:text-pink text-2xl'/></a>
          <a href='mailto:iacovozzi.jessica@gmail.com'><TfiEmail className='hover:text-pink text-2xl'/></a>
        </div>
        <div className='flex'>
          <button href='#' onClick={() => changeLocale('en')} className={locale === 'en' ? 'font-bold' : ''}>EN</button>
          |
          <button href='#' onClick={() => changeLocale('fr')} className={locale === 'fr' ? 'font-bold' : ''}>FR</button>
        </div>
      </div>
    </>
  )
}
