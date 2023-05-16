import React from 'react'
import { Box } from '@chakra-ui/react';
import Igreel from './IgReels/Igreel';
import Side from '../Pages/Side';



const Reels = () => {


  return (
    <Box  display={"flex"} justifyContent={"space-between"}
    //  bg="black"
    >

         <Box  width={"20%"}>
           <Side/>
         </Box>

          <Box   width={"80%"}>
          
             <Igreel/>

          </Box>
         

    </Box>
  )
  
}

export default Reels