import me from '../assets/me.png';
import Image from './Image';
import { TypeAnimation } from 'react-type-animation';
import './About.css';

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} id='about' className='lg:h-screen'>
      <div className='about-div lg:h-5/6 flex relative bg-[#ffc0cb] m-5 md:m-10 my-20 lg:my-0 rounded-lg'>
        <div className='rounded-s-lg overflow-hidden flex-1 justify-center items-center hidden lg:flex'>
          <Image name={me} />
        </div>
        <div className='flex-1 flex flex-col justify-center text-gray-950 bg-transparent backdrop-blur-md m-10 lg:m-24 text-center lg:text-start'>
          <h2 className='text-md mb-8'>ABOUT ME</h2>
          <p className='text-2xl'>I am a full-stack developer from Quebec, Canada, aiming to make positive change in the world.
          <TypeAnimation
            sequence={[
              " I develop web applications with React.",
              1000,
              " I develop web applications with Stimulus.",
              1000,
              " I develop web applications with Ruby on Rails.",
              1000,
              " I develop web applications with Tailwind CSS.",
              1000,
              " I develop web applications with Bootstrap.",
              1000
            ]}
            className='text-2xl'
            speed={50}
            repeat={Infinity}
          />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
