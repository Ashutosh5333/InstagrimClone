import React from "react";

import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons"


import {statusCarousel} from "../Stories/data"
import Avatar from "./Avatar"
import "./styles/carousel.css"

const Stories = () => {

  const handleSlide = (direction)=>{
    const slider = document.getElementsByClassName('carousel-body')[0];
    if (direction === "left")
        slider.scrollBy(-400, 0);
    else 
        slider.scrollBy(400,0);
}

  return (
    <>
      <section className='check'>
            <div className='arrow-btn left-icon' onClick={()=>handleSlide('left')}>
             
                <ArrowLeftIcon/>
            </div>
            <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')} >
            
                <ArrowRightIcon/>

            </div>
            <div className="carousel-body">
                {
                    statusCarousel.map((item,index)=>{
                        return <Avatar key={index} image={item} />
                    })
                }
            </div>
        </section>

    </>
  );
};

export default Stories;
