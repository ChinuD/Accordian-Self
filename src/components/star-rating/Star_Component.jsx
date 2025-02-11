import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './index.css'

function Star_Component({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }

  function handleMouseMove(getCurrentIndex){
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(getCurrentIndex){
    setHover(rating)
  }

  return <div className="flex flex-row">{
      [...Array(noOfStars)].map((_,index)=>{
        return (
          <FaStar
          key={index}
          className={index<=(hover || rating) ? 'active' : 'not-active'}
          onClick={()=>handleClick(index)}
          onMouseMove={()=>handleMouseMove(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
          size={40}
          />
        )
      })
  }
    </div>;
}

export default Star_Component;
