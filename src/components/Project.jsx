import Button from './Button';

export default function Project({ project }) {
  return (
    <div className='flex items-center h-5/6'>
      <div className="w-1/2 flex-1 flex flex-col p-28">
        <div className="flex flex-col justify-evenly">
          <h3 className="text-5xl text-white font-bold">{project.name}</h3>
          <p className="text-gray-200 text-xl font-semibold mt-8 me-8" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        </div>
        <div className="text-xl flex flex-col items-center w-fit">
          <Button link={project.appLink} target={true} text="Visit the website" />
          <a className="text-white w-fit link mt-3" href={project.codeLink} target="_blank" rel="noreferrer">Source code</a>
        </div>
      </div>
      <div className='flex-1 flex h-3/4'>
        <img src={project.image} alt="mockup" />
      </div>
    </div>
  )
}
