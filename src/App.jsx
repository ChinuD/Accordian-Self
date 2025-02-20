import { useState } from 'react'
import './App.css'
import menus from './components/Tree_View/Data'
import Accordian from './components/accordian/accordian'
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator'
import Star_Component from './components/star-rating/Star_Component'
import Image_Slider from './components/Image-Slider/Image_Slider'
import Load_More_Btn from './components/load-more-button/Load_More_Btn'
import TreeView from './components/Tree_View'
import QrCodeGenerator from './components/QR_Code Generator'
import LightDarkMode from './components/Light_Dark Mode/LightDarkMode'
import CustomScrollIndicator from './components/Custom Scroll Indicator/CustomScrollIndicator'
import TabTest from './components/Tabs/Tab-Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {/* <Accordian/> */}
      {/* <RandomColorGenerator/> */}
      {/* <Star_Component/> */}
      {/* <Image_Slider url={'https://picsum.photos/v2/list?page=1&limit=10'}  /> */}
      {/* <Load_More_Btn/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCodeGenerator/> */}
      {/* <CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      <TabTest/>

    </div >
  )
}

export default App
