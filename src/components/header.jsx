import './Header.css';
import MovingComponent from 'react-moving-text';
import Grid from './Grid';

function Header() {
  return (
    <div className='bg-gray-950 h-screen flex flex-col sticky inset-0'>
     <Grid />
      <div className='flex justify-center flex-col flex-1 px-52'>
        <MovingComponent
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          className='header-text text-9xl text-white'
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
          className='header-text text-9xl text-white leading-tight'
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
          <a href="#_" className="w-fit text-lg relative inline-flex border-2 mt-20 border-white hover:border-gray-950 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-950">Check out my work</span>
          </a>
        </MovingComponent>
      </div>
    </div>
  )
}

export default Header;
