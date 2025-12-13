import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoadingSpinner from './components/Shared/LoadingSpinner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoadingSpinner/>
    </>
  )
}

export default App
