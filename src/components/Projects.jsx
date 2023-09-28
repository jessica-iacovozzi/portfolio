import { projects } from '../projects_data.js';
import './Projects.css'
import Project from './Project';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects({ projectsRef }) {
  var settings = {
    dots: true,
    speed: 750,
    swipeToSlide: true,
    fade: true,
    className: "slider"
  };

  return (
    <div ref={projectsRef} id='projects' className='h-screen'>
      <div className='flex flex-col items-center relative bg-gray-950/80 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-300 text-lg mt-12'>MY WORK</h2>
        <Slider {...settings}>
          {projects.map(project => {
            return <Project key={project.name} project={project}/>
          })}
        </Slider>
      </div>
    </div>
  )
}
