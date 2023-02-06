import { Box } from '@chakra-ui/react'
import React from 'react'
import {BsInstagram , BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import {MdExplore,MdOutlineCreateNewFolder} from "react-icons/md"
import {TfiVideoClapper} from "react-icons/tfi"
import {BiMessageRoundedDetail} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import { Text } from '@chakra-ui/react';


const Side = () => {
  
    return (
    <>
     <Box border={"1px solid yellow"} display="flex" gap={2}   >
          
                {/* <br/> */}

          <Box  border={"1px solid blue"} gap="8px"  width={"150%"} > 

               <Box border="1px solid yellow" display={"flex"} t={8} gap="8px" justifyContent={"space-around"}> 
              <Box fontSize={"2.2em"} > <BsInstagram/> </Box>
                <Box  >   </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <AiFillHome/> </Box>
                <Box   fontSize="1.1em" fontWeight={"600"} textAlign="start" alignItems={"center"} > Home </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <BsSearch/> </Box>
                <Box   textAlign="start"  fontSize="1.1em"  > Search </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"}  textAlign="start"  > <MdExplore/> </Box>

                <Box   textAlign="start" fontSize="1.1em" > Explore </Box>
               </Box>
               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <TfiVideoClapper/> </Box>
                <Box   textAlign="start" fontSize="1.1em"  > Reels </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <MdOutlineCreateNewFolder/> </Box>
                <Box  fontSize="1.1em" alignItems="flex-start"  > Create </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <AiOutlineHeart/> </Box>
                <Box   alignItems="flex-start" fontSize="1.1em" > Notifications </Box>
               </Box>

               {/* <Box border="1px solid yellow" display={"flex"} ap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <MdOutlineCreateNewFolder/> </Box>
                <Box  > Instagram </Box>
               </Box> */}

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"} > <CgProfile/> </Box>
                <Box  fontSize="1.1em" textAlign="start"   > Profile </Box>
               </Box>

               <Box border="1px solid yellow" display={"flex"} mt={8} gap="8px" justifyContent={"space-around"}> 
               <Box fontSize={"2.2em"}  > <AiOutlineMenu/> </Box>
                <Box   textAlign="start" fontSize="1.1em" > Menu </Box>
               </Box>
         

          
          </Box>

        {/* ----------------- */}

          {/* <Box  border={"1px solid Brown"} width="50%">  */}
          
          {/* <Box fontSize={"1.2em"}  > Insta </Box>

          <Box fontSize={"1.2em"}  > Home </Box>

          <Box fontSize={"1.2em"}  > Search </Box>

          <Box fontSize={"1.2em"}  > Explore </Box>

          <Box fontSize={"1.2em"}  > Reels </Box>

          <Box fontSize={"1.2em"}  > Message </Box>

          <Box fontSize={"1.2em"}  > Notifications </Box>

          <Box fontSize={"1.2em"}  > Create </Box>

          <Box fontSize={"1.2em"}  > Profile </Box>

          <Box fontSize={"1.2em"}  > More </Box> */}

          {/* <Box fontSize={"1.2em"}  > Home </Box> */}

          {/* </Box> */}
    
     </Box>
    </>
  )

}

export default Side