import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Accordian/>
    </div >
  )
}

export default App
