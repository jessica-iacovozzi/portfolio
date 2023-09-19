import './about.css';
import meHorseImage from '../assets/me_horse.jpg';


function About() {
  return (
    <div className='h-screen flex bg-gray-950 relative'>
      <div className='flex-1 flex justify-center items-center'>
      <figure className="wave">
        <img src={meHorseImage} alt="Me"></img>
      </figure>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default About
