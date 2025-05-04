import projects from '../projects_data.js';
import './Projects.css'
import Project from './Project.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

export default function Projects({ projectsRef }) {
  const { t } = useTranslation();

  // Custom arrow components to avoid DOM warnings
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button 
        type="button" 
        className={className}
        onClick={onClick}
        aria-label={t('next_project')}
      />
    );
  };
  
  NextArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button 
        type="button" 
        className={className}
        onClick={onClick}
        aria-label={t('previous_project')}
      />
    );
  };
  
  PrevArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  // Define slider settings
  const settings = {
    dots: true,
    speed: 750,
    swipeToSlide: true,
    className: "slider",
    accessibility: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots",
    focusOnSelect: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }} role="tablist"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button 
        type="button"
        role="tab"
        aria-label={`${t('go_to_slide')} ${i + 1}`}
        aria-selected="false"
        tabIndex="0"
      >
        <span className="sr-only">{i + 1}</span>
      </button>
    )
  };

  return (
    <div ref={projectsRef} id='projects' className='h-screen lg:h-5/6'>
      <div className='flex flex-col items-center relative bg-gray-950/25 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-2xl font-semibold mt-12 mb-6'>{t('my_work')}</h2>
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
