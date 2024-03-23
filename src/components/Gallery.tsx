import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./img-slider-styles.css";

type GalleryProps = {
  imageUrls: string[];
};

export function Gallery({ imageUrls }: GalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImg() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevImg() {
    setImageIndex((index) =>
      index === 0 ? imageUrls.length - 1 : index - 1
    );
  }

  return (
    <div  className="pt-20">
      <div className='text-center'>
        <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>
          Rajaham resort
        </div>
        <h2 className='font-primary text-[45px] mb-4'>Gallery</h2>
      </div>

      <div style={{ width: "100%", position: "relative" }}>
        <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
          {imageUrls.map(url => (
            <img key={url} src={url} className='img-slider-img' style={{translate: `${-100* imageIndex}%`}} />
          ))}
        </div>
        
        <button
          onClick={showPrevImg}
          className='img-slider-btn'
          style={{ left: 0 }}
        >
        <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImg}
          className='img-slider-btn'
          style={{ right: 0 }}
        >
          <ArrowBigRight />
        </button>
        <div style={{position: "absolute",
                    bottom: "6rem",
                    translate: "-50%",
                    left: "50%",
                    display: "flex",
                    gap: ".8rem"}}>
          {imageUrls.map((_,index)=> (
            <button key={index} className="img-slider-dot-btn" onClick={()=> setImageIndex(index)}>{index === imageIndex ?   <CircleDot />: <Circle/>}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;