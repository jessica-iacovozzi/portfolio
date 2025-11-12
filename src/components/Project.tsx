import { FiExternalLink } from 'react-icons/fi'
import Button from './Button'
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
    <div className='inline lg:flex items-center lg:h-5/6 pb-10'>
      <div className="lg:w-1/2 flex-1 flex flex-col items-center lg:items-start px-10 py-5 lg:p-28">
        <div className="flex flex-col justify-evenly text-center lg:text-start">
          <h3 className="text-5xl text-white font-bold">{project.name}</h3>
          <p className="text-gray-400 text-xl font-semibold mt-8 lg:me-8" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <div className="text-xl flex flex-col w-fit items-center lg:items-start">
          <Button link={project.appLink} target={true} text={t('visit_website')} />
          <a 
            className="text-gray-400 text-sm w-fit link mt-8 flex items-center" 
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
      <div className='flex-1 flex lg:h-3/4 lg:me-20 pt-16 px-10'>
        <img src={project.image} alt={`Mockup of ${project.name}`} className='project-img' />
      </div>
    </div>
  )
}
