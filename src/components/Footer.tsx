import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { SiBuymeacoffee } from 'react-icons/si'
import { useContext } from 'react'
import LocaleContext from '../LocaleContext'
import i18n from '../i18n'

export default function Footer(): JSX.Element {
  const { locale } = useContext(LocaleContext)

  function changeLocale(l: string): void {
    if (locale !== l) {
      i18n.changeLanguage(l)
    }
  }

  return (
    <footer className='flex flex-col sm:flex-row items-center justify-center text-gray-200 text-sm pt-8 pb-4 px-4 border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm'>
      <div className='hidden md:flex justify-center flex-1 text-center text-xs sm:text-sm text-gray-400 mt-4 sm:mt-0 sm:ml-4'>
        &copy; {new Date().getFullYear()} Jessica Iacovozzi
      </div>
      <div className='flex items-center justify-center space-x-12 sm:space-x-4 mb-4 sm:mb-0 flex-1'>
        <a href='https://www.linkedin.com/in/jessica-iacovozzi-8a7a8a1b9/' target='_blank' rel='noreferrer' aria-label='Visit my LinkedIn profile (opens in a new tab)'>
          <BsLinkedin className='hover:text-pink text-xl sm:text-2xl transition-colors duration-200 min-h-[24px] min-w-[24px]' aria-hidden="true" />
        </a>
        <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer' aria-label='Check out my GitHub repositories (opens in a new tab)'>
          <BsGithub className='hover:text-pink text-xl sm:text-2xl transition-colors duration-200 min-h-[24px] min-w-[24px]' aria-hidden="true" />
        </a>
        <a href='mailto:iacovozzi.jessica@gmail.com' aria-label='Send me an email at iacovozzi.jessica@gmail.com'>
          <TfiEmail className='hover:text-pink text-xl sm:text-2xl transition-colors duration-200 min-h-[24px] min-w-[24px]' aria-hidden="true" />
        </a>
        <a href='https://www.buymeacoffee.com/jiacovozzi' target='_blank' rel='noreferrer' aria-label='Support me by buying me a coffee (opens in a new tab)'>
          <SiBuymeacoffee className='hover:text-pink text-xl sm:text-2xl transition-colors duration-200 min-h-[24px] min-w-[24px]' aria-hidden="true" />
        </a>
      </div>
      <div className='hidden md:flex justify-center flex-1 gap-1'>
        <button 
          onClick={() => changeLocale(locale === 'en' ? 'fr' : 'en')} 
          className='hover:font-bold transition-all duration-200 hover:text-pink' 
          aria-label={`Switch language to ${locale === 'en' ? 'French' : 'English'}`}
        >
          {locale === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </footer>
  )
}
