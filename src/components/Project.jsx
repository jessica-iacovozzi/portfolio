import Button from './Button';
import { BiCodeAlt } from 'react-icons/bi';

export default function Project({ project }) {
  return (
    <div className='inline lg:flex items-center lg:h-5/6 pb-10'>
      <div className="lg:w-1/2 flex-1 flex flex-col items-center lg:items-start p-10 lg:p-28">
        <div className="flex flex-col justify-evenly text-center lg:text-start">
          <h3 className="text-5xl text-white font-bold">{project.name}</h3>
          <p className="text-gray-400 text-xl font-semibold mt-8 lg:me-8" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <div className="text-xl flex flex-col items-center w-fit">
          <Button link={project.appLink} target={true} text="Visit the website" />
          <a className="text-white w-fit link mt-3 flex items-center" href={project.codeLink} target="_blank" rel="noreferrer">
            Source code
            <BiCodeAlt className='ms-2 mt-0.5'/>
          </a>
        </div>
      </div>
      <div className='flex-1 flex lg:h-3/4'>
        <img src={project.image} alt="mockup" className='project-img' />
      </div>
    </div>
  )
}
