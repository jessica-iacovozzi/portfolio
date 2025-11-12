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
    <footer role="contentinfo" className='flex items-center relative bg-gray-950/25 backdrop-blur border-t-1.5 border-pink text-gray-400 mt-20 py-6'>
        <div className='items-center justify-center ms-0 flex-1 hidden sm:flex gap-1'>
          <p>Jessica Iacovozzi</p>
        </div>
        <div className='flex items-center justify-center flex-1 gap-3'>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' target='_blank' rel='noreferrer' aria-label='Visit my LinkedIn profile (opens in a new tab)'>
            <BsLinkedin className='hover:text-pink text-2xl' aria-hidden="true" />
          </a>
          <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer' aria-label='Check out my GitHub repositories (opens in a new tab)'>
            <BsGithub className='hover:text-pink text-2xl' aria-hidden="true" />
          </a>
          <a href='mailto:iacovozzi.jessica@gmail.com' aria-label='Send me an email at iacovozzi.jessica@gmail.com'>
            <TfiEmail className='hover:text-pink text-2xl' aria-hidden="true" />
          </a>
          <a href='https://www.buymeacoffee.com/jiacovozzi' target='_blank' rel='noreferrer' aria-label='Support me by buying me a coffee (opens in a new tab)'>
            <SiBuymeacoffee className='hover:text-pink text-2xl' aria-hidden="true" />
          </a>
        </div>
        <div className='flex justify-center flex-1 gap-1'>
          <button onClick={() => changeLocale('en')} className={locale === 'en' ? 'font-bold' : ''} aria-label='Switch language to English' aria-pressed={locale === 'en'}>EN</button>
          |
          <button onClick={() => changeLocale('fr')} className={locale === 'fr' ? 'font-bold' : ''} aria-label='Switch language to French' aria-pressed={locale === 'fr'}>FR</button>
        </div>
    </footer>
  )
}
