import { Box, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import "./Ig.css";
import VideoCard from './VideoCard';

const Igreel = () => {


  return (
    <Box  display={"grid"} placeItems={"center"} height="100vh"
     backgroundColor={"black"}
    >
      
       <Box mt="5" >
           <Image height="12vh"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Intagram_logo_2016.svg.png" />
              <Text color={"#FFFFFF"} textAlign={"center"} fontWeight={"600"} >Reels</Text>
       </Box>
       
       {/* ---------- videos--------- */}

 
        <Box className='videos'  position={"relative"}
         height={"75vh"} width={"60%"} borderRadius={"20px"}
          maxWidth={"400px"} 
          maxHeight={"1200px"}
          backgroundColor={"white"}
          overflow={"scroll"}
           scrollSnapType={"y mandatory"}
        >

          <VideoCard 
           channel="Ashutosh"
           avatarSrc="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/121253649_1267759750228509_9143388720803043988_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=5aywxqSzBHwAX--88g1&_nc_ht=scontent.flko7-1.fna&oh=00_AfC9d0iVBTDxNswMPGmdSOFuzPpoyF5NXlrJ8jkOEnf2Sw&oe=6486A7CB"
           song="ye dil tum bin "
           url="khkhlkh"
           like="5392"
           share="7.3k"
           />
      
        </Box>
    
    </Box>
  )
}

export default Igreel