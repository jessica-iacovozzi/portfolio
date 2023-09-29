import './Header.css';
import MovingComponent from 'react-moving-text';
import Grid from './Grid';
import Button from './Button';

function Header() {
  return (
    <div className='bg-gray-950 sm:h-screen flex flex-col sticky inset-0'>
     <Grid />
      <div className='flex justify-center flex-col flex-1 px-3 sm:px-52 items-center sm:items-start mt-64 sm:mt-0'>
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          className='header-text text-6xl sm:text-9xl text-white text-center sm:text-start'
          fillMode="both">
          Hi, my name is
        </MovingComponent>
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0ms"
          direction="normal"
          timing="ease"
          iteration="1"
          className='header-text text-6xl sm:text-9xl text-white leading-tight text-center sm:text-start'
          fillMode="both">
          Jessica Iacovozzi
        </MovingComponent>
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0ms"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="both">
          <Button link="#projects" target={false} text="Check out my work" />
        </MovingComponent>
      </div>
    </div>
  )
}

export default Header;
