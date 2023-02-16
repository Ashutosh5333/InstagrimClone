import { Avatar, Box, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";



export const ImageSlide = () => {
    const responsive = {
        superLargeDesktop: {
       
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    < >
      <Box border="1px solid darkpink" height={"100px"}  >
      
      <Box  border="1px solid yellow" display="flex" justifyContent={"space-around"} >
        
        {/* ----------------------- */}
        {/* <Carousel  
         responsive={responsive}
                infinite={true}
                // className="owl-carousel owl-theme skill-slider"
                >  */}
                
        <Box>  
        <Wrap>
         <WrapItem>
             <Avatar  size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' >
             </Avatar>
         </WrapItem>
        </Wrap>
        </Box>

        <Box>  
        <Wrap>
         <WrapItem>
             <Avatar  size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' >
             </Avatar>
         </WrapItem>
        </Wrap>
        </Box>
        <Box>  
        <Wrap>
         <WrapItem>
             <Avatar  size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' >
             </Avatar>
         </WrapItem>
        </Wrap>
        </Box>
        <Box>  
        <Wrap>
         <WrapItem>
             <Avatar  size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' >
             </Avatar>
         </WrapItem>
        </Wrap>
        </Box>
        <Box>  
        <Wrap>
         <WrapItem>
             <Avatar  size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' >
             </Avatar>
         </WrapItem>
        </Wrap>
        </Box>
        
       {/* </Carousel> */}
       {/* ------------------------------- */}


      </Box>


      </Box>
    
    </>
  )
}
