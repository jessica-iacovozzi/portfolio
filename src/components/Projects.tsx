import projects from '../projects_data'
import './Projects.css'
import { Suspense, lazy } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "react-i18next"

const Project = lazy(() => import('./Project'))

interface ArrowProps {
  className?: string
  onClick?: () => void
}

interface ProjectsProps {
  projectsRef?: React.RefObject<HTMLDivElement>
}

export default function Projects({ projectsRef }: ProjectsProps): JSX.Element {
  const { t } = useTranslation()

  // Custom arrow components to avoid DOM warnings
  const NextArrow = ({ className, onClick }: ArrowProps): JSX.Element => {
    return (
      <button 
        type="button" 
        className={className}
        onClick={onClick}
        aria-label={t('next_project')}
      />
    )
  }

  const PrevArrow = ({ className, onClick }: ArrowProps): JSX.Element => {
    return (
      <button 
        type="button" 
        className={className}
        onClick={onClick}
        aria-label={t('previous_project')}
      />
    )
  }

  const settings = {
    dots: true,
    speed: 750,
    swipeToSlide: true,
    className: "slider",
    accessibility: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    settings: {
      dots: true,
      speed: 750,
      swipeToSlide: true,
      className: "slider",
      accessibility: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots: JSX.Element[]) => {
        return (
          <div className="slick-dots-container">
            <ul className="slick-dots">
              {dots}
            </ul>
          </div>
        )
      },
      customPaging: (i: number) => (
        <button 
          type="button"
          aria-label={`${t('go_to_slide')} ${i + 1}`}
          tabIndex={0}
        >
          <span className="sr-only">{i + 1}</span>
        </button>
      ),
    },
    appendDots: (dots: JSX.Element[]) => {
      return (
        <div className="slick-dots-container">
          <ul className="slick-dots">
            {dots}
          </ul>
        </div>
      )
    },
    customPaging: (i: number) => (
      <button 
        type="button"
        aria-label={`${t('go_to_slide')} ${i + 1}`}
        tabIndex={0}
      >
        <span className="sr-only">{i + 1}</span>
      </button>
    ),
  }

  return (
    <div ref={projectsRef} id='projects' className='h-screen lg:h-5/6'>
      <div className='flex flex-col items-center relative bg-gray-950/25 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-2xl font-semibold mt-12 mb-6'>{t('my_work')}</h2>
        <Slider {...settings}>
          {projects.map(project => {
            return (
              <Suspense 
                key={project.name} 
                fallback={
                  <div className='inline lg:flex items-center lg:h-5/6 pb-10'>
                    <div className="lg:w-1/2 flex-1 flex flex-col items-center lg:items-start px-10 py-5 lg:p-28">
                      <div className="flex flex-col justify-evenly text-center lg:text-start">
                        <div className="h-12 w-48 bg-gray-800 rounded animate-pulse mb-4"></div>
                        <div className="h-20 w-full bg-gray-800 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className='flex-1 flex lg:h-3/4 lg:me-20 pt-16 px-10'>
                      <div className="w-full h-64 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                  </div>
                }
              >
                <Project project={project}/>
              </Suspense>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
