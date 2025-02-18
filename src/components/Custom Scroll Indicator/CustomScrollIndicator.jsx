import React, { useState } from 'react'
import { useEffect } from 'react';

function CustomScrollIndicator({url}) {

  const [data,setData] = useState()
  const [loading,setloading] = useState(true);
  // const [] = useState()

  async function fetchData(url){
    
    try{
      let response = await fetch(url)
      let data = await response.json()
      
      if(data && data.products && data.products.length>0){
        setloading(false)
        setData(data.products)
      }
    }catch(e){
      console.log(e)
    }
    
  }

  useEffect(()=>{
    fetchData(url)
  },[url])

  return (
    <div>
        
    </div>
  )
}

export default CustomScrollIndicator