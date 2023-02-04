import { Box } from '@chakra-ui/react'
import React from 'react'
import {BsInstagram , BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import {MdExplore,MdOutlineCreateNewFolder} from "react-icons/md"
import {TfiVideoClapper} from "react-icons/tfi"
import {BiMessageRoundedDetail} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"


const Side = () => {
  
    return (
    <>
     <Box border={"1px solid yellow"} display="flex" gap={2} justifyContent="space-evenly"  >
          
          <Box  border={"1px solid blue"} gap="10px"  > For icon  

              <Box fontSize={"25px"} marginTop={10}> <BsInstagram/> </Box>
          
              <Box fontSize={"25px"} marginTop={10}> <AiFillHome/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <BsSearch/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <MdExplore/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <TfiVideoClapper/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <MdOutlineCreateNewFolder/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <AiOutlineHeart/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <MdOutlineCreateNewFolder/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <CgProfile/> </Box>

              <Box fontSize={"25px"} marginTop={10}> <AiOutlineMenu/> </Box>
          </Box>

          <Box  border={"1px solid Brown"}> decription </Box>
    
     </Box>
    </>
  )

}

export default Side