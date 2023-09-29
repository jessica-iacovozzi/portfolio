import { projects } from '../projects_data.js';
import './Projects.css'
import Project from './Project.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

export default function Projects({ projectsRef }) {
  var settings = {
    dots: true,
    speed: 750,
    swipeToSlide: true,
    className: "slider"
  };

  return (
    <div ref={projectsRef} id='projects' className='h-screen lg:h-5/6'>
      <div className='flex flex-col items-center relative bg-gray-950/80 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-lg mt-12'>MY WORK</h2>
        <Slider {...settings}>
          {projects.map(project => {
            return <Project key={project.name} project={project}/>
          })}
        </Slider>
      </div>
    </div>
  )
}

Projects.propTypes = {
  projectsRef: PropTypes.object
}
