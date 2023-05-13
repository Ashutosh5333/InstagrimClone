import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import {SiApplemusic} from "react-icons/si"

import React from 'react'


const VideoFooter = ({avatarSrc,channel,song}) => {


  return (
    <Box >
       
        <Box  position={"absolute"} bottom={"4"}
        color="white" display={"flex"}   width={"100%"} mb="10" p="2"
        >
          <Avatar  src={avatarSrc} size="xs" m="5" />
           <Text m="2"> {channel} - <Button color="black" 
           textTransform={"inherit"}
           > Follow </Button>  </Text>
        </Box>

  

        <Box className='videofooter_ticker'  position={"absolute"} 
        bottom={"8"} color="white"
         width="100%" mt="20"  
           display={"flex"} justifyContent={"space-around"}
        >
        <SiApplemusic  fontSize={"2rem"}  mt="5" />


          <Box  width={"60%"} bg="none" >
          <Ticker isNewsTicker={true}>
          
        <NewsTicker   title={song}   />

         </Ticker>
          </Box>
        
        {/* --------------------- */}

        </Box>
        
         <Box border="2px solid black" position={"absolute"}>


         </Box>
    
    
    </Box>
  )
}

export default VideoFooter