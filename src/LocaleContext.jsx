import { createContext } from "react";

const defaultValue = {
  locale: 'en',
  setLocale: () => {}
}

// eslint-disable-next-line react-refresh/only-export-components
export default createContext(defaultValue);
