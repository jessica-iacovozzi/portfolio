import './About.css';
import me from '../assets/me.png';
import Image from './Image';
import { TypeAnimation } from 'react-type-animation';

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} id='about' className='h-screen'>
      <div className='h-5/6 flex relative bg-[#ffc0cb] m-10 rounded-lg'>
        <div className='rounded-s-lg overflow-hidden flex-1 flex justify-center items-center'>
          <Image name={me} />
        </div>
        <div className='flex-1 flex flex-col justify-center text-gray-9500 bg-transparent backdrop-blur-md m-24'>
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
