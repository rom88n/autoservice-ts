import { createContext } from 'react'

type ContextProps = {
  mobile?: boolean
};

const ReactContext = createContext<Partial<ContextProps>>({})

export default ReactContext
