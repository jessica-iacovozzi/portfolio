interface ButtonProps {
  link: string
  text: string
  target?: boolean
}

export default function Button({ link, text, target }: ButtonProps): JSX.Element {
  return (
    <a 
      href={link} 
      target={target ? "_blank" : ""} 
      rel={target ? "noreferrer" : ""} 
      className="w-fit text-lg relative inline-flex border-2 mt-10 border-white hover:border-gray-950 justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group"
      aria-label={`${text}${target ? ' (opens in a new tab)' : ''}`}
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-950">{text}</span>
    </a>
  )
}
