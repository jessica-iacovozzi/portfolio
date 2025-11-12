import './Header.css'
import Grid from './Grid'
import Button from './Button'
import { useTranslation } from "react-i18next"

export default function Header(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='bg-gray-950 lg:h-screen flex flex-col sticky inset-0'>
      <Grid />
      <div className='header-div flex justify-center flex-col flex-1 px-3 lg:px-52 items-center lg:items-start mt-64 lg:mt-0'>
        <header>
          <div className="animate-fade-in-up animation-delay-0">
            <h2 className="header-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white text-center lg:text-start leading-tight">{t('hi')}</h2>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <h1 className='header-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white leading-tight text-center lg:text-start'>
              Jessica Iacovozzi
            </h1>
          </div>
        </header>
        <div className="animate-fade-in-up animation-delay-400">
          <Button link="#projects" target={false} text={t('header_btn')} />
        </div>
      </div>
    </div>
  )
}
