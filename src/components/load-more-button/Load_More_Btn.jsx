import React, { useEffect, useState,useRef } from 'react'
import './index.css'

function Load_More_Btn() {
  
  const [loading,setLoading] = useState(true);
  const [products,setProducts] = useState([]);
  const [count,setCount] = useState(1);
  const [disableBtn, setDisableBtn] = useState(false)
  const containerRef = useRef(null);

  async function dummyDataFetch(){

    try{
      setLoading(true);
      let response = await fetch(`https://dummyjson.com/products?limit=12&skip=${count==0 ? 0 : count*12}`)
  
      let data = await response.json();
      // console.log(response)
      console.log(data)
  
      if(data && data.products && data.products.length){
        setProducts((prevData)=>[...prevData, ...data.products])
        setLoading(false)
      }
      console.log(data)
    }catch(e){
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    dummyDataFetch();
  },[count])

  useEffect(()=>{
    if(count==10) setDisableBtn(true)
  },[count])

  useEffect(() => {
    if (!loading && products.length > 0 && containerRef.current) {
      const lastImage = containerRef.current.querySelector('img:last-child');
      if (lastImage) {
        lastImage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [products, loading]);

  if(loading){
    return <div>Loading True</div>
  }

  return (
    <div className='container'>
      {
        products && products.length ?
        products.map((product,index)=>(
          <div className="eachCard" key={index}>
            <img src={product.images[0]} alt="" />
            <h2>{product.title}</h2>
          </div>
        ))
        : null
      }

      <button disabled={disableBtn} onClick={()=>setCount(count+1)}>
        Load More
      </button>
    </div>
  )
}

export default Load_More_Btn