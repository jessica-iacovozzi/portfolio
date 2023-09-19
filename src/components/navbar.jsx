function Navbar() {
  return (
    <header className='w-full fixed top-0 z-40'>
      <div className='border-b-0.5 py-2 transition-colors duration-500 border-transparent bg-transparent'>
        <div className='flex text-white text-xl px-16 py-7'>
          <a href='#' className='me-5'>ABOUT</a>
          <a href='#' className='me-5'>PROJECTS</a>
          <a href='#' className='me-5'>CONTACT</a>
        </div>
      </div>
    </header>
 )
}

export default Navbar
