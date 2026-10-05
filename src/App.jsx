import { useState } from 'react'
import { Navigation } from './components/navigation_bar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navigation />


    <h1>Hello world!</h1>



    </>
  )
}

export default App
