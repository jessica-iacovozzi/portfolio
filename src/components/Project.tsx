import { FiExternalLink } from 'react-icons/fi'
import Button from './Button'
import LazyImage from './LazyImage'
import { useTranslation } from "react-i18next"

interface Project {
  name: string
  appLink: string
  codeLink: string
  image: any
  description: string
}

interface ProjectProps {
  project: Project
}

export default function Project({ project }: ProjectProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col lg:flex-row items-center lg:h-5/6 pb-6 lg:pb-10 px-4 lg:px-0'>
      <div className="lg:w-1/2 flex-1 flex flex-col items-center lg:items-start px-4 lg:px-10 py-6 lg:py-5 lg:p-28 order-2 lg:order-1">
        <div className="flex flex-col justify-evenly text-center lg:text-start w-full">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 lg:mb-8">{project.name}</h3>
          <p className="text-gray-400 text-lg lg:text-xl font-semibold mb-6 lg:mb-8 lg:me-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <div className="text-lg lg:text-xl flex flex-col sm:flex-row lg:flex-col w-full items-center justify-center lg:items-start gap-4 sm:gap-6 lg:gap-0">
          <Button link={project.appLink} target={true} text={t('visit_website')} />
          <a 
            className="text-gray-400 text-sm lg:text-base w-fit link flex items-center hover:text-pink transition-colors duration-200 min-h-[44px]" 
            href={project.codeLink} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`${t('source_code')} ${project.name} (opens in a new tab)`}
          >
            {t('source_code')}
            <FiExternalLink className='ms-2' aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className='flex-1 flex lg:h-3/4 lg:me-20 pt-6 lg:pt-16 px-4 lg:px-10 order-1 lg:order-2 mb-8 lg:mb-0'>
        <LazyImage 
          src={project.image} 
          alt={`Mockup of ${project.name}`} 
          className='project-img w-full h-auto max-h-64 lg:max-h-none object-contain' 
        />
      </div>
    </div>
  )
}
