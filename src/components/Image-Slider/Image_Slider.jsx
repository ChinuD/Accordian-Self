import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

function Image_Slider({ url }) {
  const [images, setimages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data) {
        setimages(data);
        setLoading(false);
        console.log(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem,index) => (
            <img 
            key={imageItem.id}
            src={imageItem.download_url} 
            alt={imageItem.download_url}
            className="current-image"
            />
        ))
        : null}
       <BsArrowRightCircleFill className="arrow arrow-right" />
       <span className="circle-indicators">
        {
            images && images.length ? 
            images.map((_,index)=>
                <button key={index} className="current-indicator">

                </button>
            ) : null
        }
       </span>
    </div>
  );
}

export default Image_Slider;
