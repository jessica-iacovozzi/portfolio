import { Spinner } from 'flowbite-react';

function Loading () {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Spinner size="xl" />
    </div>
  )
}

export default Loading;
