import { Spinner } from 'flowbite-react'

export default function Loading(): JSX.Element {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Spinner size="xl" />
    </div>
  )
}
