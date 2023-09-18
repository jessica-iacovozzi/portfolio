import './App.css'

function App() {
  return (
    <div className='header-bg h-screen flex justify-center items-center flex-col'>
      <h1 className='header-text text-9xl font-bold text-center text-white mb-16'>Hello, I&apos;m Jess<br/>Full-Stack developer</h1>
      <a href="#_" className="text-lg relative inline-flex items-center border-2 border-orange-light justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-light absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Check out my work</span>
      </a>
    </div>
  )
}

export default App
