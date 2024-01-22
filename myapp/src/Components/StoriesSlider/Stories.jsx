import React from "react";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons"
import {statusCarousel} from "../StoriesSlider/data"
import Avatar from "./Avatar"
import "./styles/carousel.css"
import { Box } from "@chakra-ui/react";

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
      <Box 
      //  width={"auto"}
      width={{sm:"100%",md:"100%",lg:"100%"}} 
      className='check'>
            <div className='arrow-btn left-icon' onClick={()=>handleSlide('left')}>
             
                <ArrowLeftIcon/>
            </div>
            <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')} >
            
                <ArrowRightIcon/>

            </div>
            <div className="carousel-body">
        
                 <Avatar />
                  
            </div>
        </Box>

    </>
  );
};

export default Stories;
