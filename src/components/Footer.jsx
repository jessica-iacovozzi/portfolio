import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { SiBuymeacoffee } from 'react-icons/si';
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
    <footer role="contentinfo" className='flex items-center relative bg-gray-950/25 backdrop-blur border-t-1.5 border-pink text-gray-400 mt-20 py-6'>
        <div className='items-center justify-center ms-0 flex-1 hidden sm:flex gap-1'>
          <p>Jessica Iacovozzi</p>
        </div>
        <div className='flex items-center justify-center flex-1 gap-3'>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' target='_blank' rel='noreferrer' aria-label='Visit my LinkedIn profile'>
            <BsLinkedin className='hover:text-pink text-2xl' role="img" aria-labelledby="linkedin-title">
              <title id="linkedin-title">LinkedIn</title>
            </BsLinkedin>
            <span className="sr-only">Visit my LinkedIn profile</span>
          </a>
          <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer' aria-label='Check out my GitHub repositories'>
            <BsGithub className='hover:text-pink text-2xl' role="img" aria-labelledby="github-title">
              <title id="github-title">GitHub</title>
            </BsGithub>
            <span className="sr-only">Check out my GitHub repositories</span>
          </a>
          <a href='mailto:iacovozzi.jessica@gmail.com' aria-label='Send me an email at iacovozzi.jessica@gmail.com'>
            <TfiEmail className='hover:text-pink text-2xl' role="img" aria-labelledby="email-title">
              <title id="email-title">Email</title>
            </TfiEmail>
            <span className="sr-only">Send me an email at iacovozzi.jessica@gmail.com</span>
          </a>
          <a href='https://www.buymeacoffee.com/jiacovozzi' target='_blank' rel='noreferrer' aria-label='Support me by buying me a coffee'>
            <SiBuymeacoffee className='hover:text-pink text-2xl' role="img" aria-labelledby="coffee-title">
              <title id="coffee-title">Buy Me a Coffee</title>
            </SiBuymeacoffee>
            <span className="sr-only">Support me by buying me a coffee</span>
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
