import React, { useState } from 'react'

function RandomColorGenerator() {

    const [typeColor, setTypeColor] = useState('hex')
    const [color, setColor] = useState("#000000")

    function randomNumber(length){
        return Math.floor(Math.random()*length)
    }

    function handleHexColor(){
        const hexString = "0123456789ABCDE";
        let hexColor = "#"
        for(let i=0 ; i<6 ; i++){
            hexColor += hexString[randomNumber(15)]
        }
        // console.log(hexColor)
        setColor(hexColor)
    }
    
    function handleRGBColor(){
        let r = randomNumber(256)
        let g = randomNumber(256)
        let b = randomNumber(256)
        
        // console.log(`rgb(${r},${g},${b})`);
        setColor(`rgb(${r},${g},${b})`)
    }

  return (
    <div style={{backgroundColor:color}} className='h-[800px] w-[800px] rounded-md' >
        <div className="m-3 flex gap-3">
            <button onClick={handleRGBColor} className='bg-amber-100 p-2 w-[90px] h-[90px] rounded-sm'>rgb color</button>
            <button onClick={handleHexColor} className='bg-amber-100 p-2 w-[90px] h-[90px] rounded-sm'>Hex color</button>
        </div>
    </div>
  )
}

export default RandomColorGenerator