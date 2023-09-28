import MovingComponent from 'react-moving-text';
import './Navbar.css';

function Navbar({ aboutRef, projectsRef, aboutAtTop, scrollToRef }) {
  const divClassnames = aboutAtTop ? 'backdrop-blur border-b-2.5 border-gray-950 transition-all ease duration-250 bg-gray-950/70' : 'border-b-0.5 transition-all ease border-transparent bg-transparent'

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
            <button onClick={() => scrollToRef(aboutRef)} className='me-16 link'>ABOUT</button>
            <button onClick={() => scrollToRef(projectsRef)} className='me-12 link'>PROJECTS</button>
            <button className='link'>CONTACT</button>
          </ul>
        </MovingComponent>
      </div>
    </header>
 )
}

export default Navbar;
