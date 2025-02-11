import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian/accordian'
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator'
import Star_Component from './components/star-rating/Star_Component'
import Image_Slider from './components/Image-Slider/Image_Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {/* <Accordian/> */}
      {/* <RandomColorGenerator/> */}
      {/* <Star_Component/> */}
      <Image_Slider url={'https://picsum.photos/v2/list?page=1&limit=10'}  />

    </div >
  )
}

export default App
