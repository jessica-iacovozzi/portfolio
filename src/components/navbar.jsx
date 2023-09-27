import MovingComponent from 'react-moving-text';
import './Navbar.css';

function Navbar({ aboutAtTop, scrollToAbout }) {
  const divClassnames = aboutAtTop ? 'backdrop-blur border-b-2.5 border-gray-950 transition-all ease duration-250 bg-transparent' : 'border-b-0.5 transition-all ease border-transparent bg-transparent'

  return (
    <header className='w-full fixed top-0 z-40'>
      <div className={divClassnames}>
        <MovingComponent
          type="fadeInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="both">
          <ul className='flex text-gray-200 text-xl px-14 py-7'>
            <button onClick={scrollToAbout} className='me-16'>ABOUT</button>
            <button className='me-12'>PROJECTS</button>
            <button>CONTACT</button>
          </ul>
        </MovingComponent>
      </div>
    </header>
 )
}

export default Navbar;
