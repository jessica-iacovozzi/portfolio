import './header.css'

function Header() {
  return (
    <div className='header-bg h-screen flex flex-col sticky inset-0'>
      <div className='flex justify-center items-center flex-col flex-1 px-52'>
        <h1 className='header-text text-8xl text-white my-6'>Hi, I&apos;m Jessica Iacovozzi</h1>
        <h2 className='header-text text-5xl text-white mb-16'>and I&apos;m a web developer</h2>
        <a href="#_" className="w-fit text-lg relative inline-flex items-center border-2 border-white hover:border-gray-950 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-950">Check out my work</span>
        </a>
      </div>
    </div>
  )
}

export default Header
