import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail} from 'react-icons/tfi';

export default function Footer() {
  return (
    <>
      <div className='flex justify-center relative bg-gray-950/80 backdrop-blur border-t-1.5 border-pink text-gray-400'>
        <div className='flex justify-evenly items-center h-[70px] w-[150px]'>
          <a href='https://www.linkedin.com/in/jessica-iacovozzi/' target='_blank' rel='noreferrer'><BsLinkedin className='hover:text-pink text-2xl'/></a>
          <a href='https://github.com/jessica-iacovozzi/' target='_blank' rel='noreferrer'><BsGithub className='hover:text-pink text-2xl'/></a>
          <a href='mailto:iacovozzi.jessica@gmail.com'><TfiEmail className='hover:text-pink text-2xl'/></a>
        </div>
      </div>
    </>
  )
}
