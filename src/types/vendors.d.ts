// Custom type declarations for third-party libraries without official TypeScript types

declare module 'react-moving-text' {
  import { FC, ReactNode } from 'react'
  
  interface MovingTextProps {
    type: string
    duration: number
    delay: number
    direction: string
    timing: string
    iteration: string
    fill: string
    children: ReactNode
  }
  
  const MovingText: FC<MovingTextProps>
  export default MovingText
}

declare module 'react-slick' {
  import { FC, ReactNode, CSSProperties } from 'react'
  
  interface Settings {
    dots?: boolean
    infinite?: boolean
    speed?: number
    slidesToShow?: number
    slidesToScroll?: number
    autoplay?: boolean
    autoplaySpeed?: number
    arrows?: boolean
    prevArrow?: ReactNode
    nextArrow?: ReactNode
  }
  
  interface SliderProps {
    children: ReactNode
    settings: Settings
    className?: string
    style?: CSSProperties
  }
  
  const Slider: FC<SliderProps>
  export default Slider
}

// Additional type declarations can be added here as needed during migration
