import ReactDOM from 'react-dom'
import { ReactElement, useEffect, useState } from 'react'

interface IPortal {
  children: ReactElement
}

const Portal = ({ children }: IPortal): ReactElement => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
