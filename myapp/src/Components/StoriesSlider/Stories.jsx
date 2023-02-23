// import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import {angleleftsolid} from "./images/angleleftsolid.svg"
import {anglerightsolid} from "./images/anglerightsolid.svg"
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons"


import {statusCarousel} from "../StoriesSlider/data"
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
                {/* <img src={"./images/angle-left-solid.svg"} alt="left-angle" /> */}
                <ArrowLeftIcon/>
            </div>
            <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')} >
                {/* <img src={"./images/angle-right-solid.svg"} alt="left-angle" /> */}
                <ArrowRightIcon/>

            </div>
            <div className="carousel-body">
                {
                    statusCarousel.map((item)=>{
                        return <Avatar key={item} image={item} />
                    })
                }
            </div>
        </section>

    </>
  );
};

export default Stories;
