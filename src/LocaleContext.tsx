import { createContext } from 'react'

interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
}

const defaultValue: LocaleContextType = {
  locale: 'en',
  setLocale: () => {}
}

// eslint-disable-next-line react-refresh/only-export-components
export default createContext<LocaleContextType>(defaultValue)
