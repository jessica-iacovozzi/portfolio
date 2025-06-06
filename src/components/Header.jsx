import './Header.css';
import MovingComponent from 'react-moving-text';
import Grid from './Grid.jsx';
import Button from './Button.jsx';
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className='bg-gray-950 lg:h-screen flex flex-col sticky inset-0'>
      <Grid />
      <div className='header-div flex justify-center flex-col flex-1 px-3 lg:px-52 items-center lg:items-start mt-64 lg:mt-0'>
        <header>
          <MovingComponent
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            className='header-text text-5xl md:text-7xl lg:text-9xl text-white text-center lg:text-start'
            fillMode="both">
            <h2 className="header-text text-5xl md:text-7xl lg:text-9xl text-white text-center lg:text-start">{t('hi')}</h2>
          </MovingComponent>
          <MovingComponent
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="both">
            <h1 className='header-text text-5xl md:text-7xl lg:text-9xl text-white leading-tight text-center lg:text-start'>
              Jessica Iacovozzi
            </h1>
          </MovingComponent>
        </header>
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0ms"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="both">
          <Button link="#projects" target={false} text={t('header_btn')} />
        </MovingComponent>
      </div>
    </div>
  )
}
