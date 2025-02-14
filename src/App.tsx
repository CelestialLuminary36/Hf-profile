import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { OrbitingCirclesDemo } from './components/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OrbitingCirclesDemo />
    </>
  )
}

export default App
