// Temporary type declarations for components that will be migrated in Task 4.0
declare module './components/Navbar' {
  import { FC } from 'react'
  interface NavbarProps {
    AtTop: boolean
    scrollToRef: (ref: any) => void
    aboutRef: any
    projectsRef: any
    contactRef: any
  }
  const Navbar: FC<NavbarProps>
  export default Navbar
}

declare module './components/Header' {
  import { FC } from 'react'
  const Header: FC
  export default Header
}

declare module './components/About' {
  import { FC } from 'react'
  interface AboutProps {
    aboutRef: any
  }
  const About: FC<AboutProps>
  export default About
}

declare module './components/Projects' {
  import { FC } from 'react'
  interface ProjectsProps {
    projectsRef: any
  }
  const Projects: FC<ProjectsProps>
  export default Projects
}

declare module './components/Contact' {
  import { FC } from 'react'
  interface ContactProps {
    contactRef: any
  }
  const Contact: FC<ContactProps>
  export default Contact
}

declare module './components/Footer' {
  import { FC } from 'react'
  const Footer: FC
  export default Footer
}

declare module './components/Loading' {
  import { FC } from 'react'
  const Loading: FC
  export default Loading
}
