import { Box, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import "./Ig.css";
import VideoCard from './VideoCard';

const Igreel = () => {


  return (
    <Box  display={"grid"} placeItems={"center"} height="100vh"
     backgroundColor={"black"}
    >
      
       <Box mt="20" >
           <Image height="12vh"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Intagram_logo_2016.svg.png" />
              <Text color={"#FFFFFF"} textAlign={"center"} fontWeight={"600"} >Reels</Text>
       </Box>
       
       {/* ---------- videos--------- */}

 
        <Box className='videos' border={"3px solid white"} position={"relative"}
         height={"65vh"} width={"60%"} borderRadius={"20px"}
          maxWidth={"400px"} 
          maxHeight={"1200px"}
          backgroundColor={"white"}
          overflow={"scroll"}
           scrollSnapType={"y mandatory"}
        >

          <VideoCard/>

        </Box>
    
    </Box>
  )
}

export default Igreel