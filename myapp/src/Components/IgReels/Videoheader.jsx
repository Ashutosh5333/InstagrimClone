import React from 'react'
import "./videoheader.css"
import { Box, Text } from '@chakra-ui/react';
 import IoChevronBackOutline from "react-icons/io"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';



const Videoheader = () => {

  return (
    <Box display={"flex"} justifyContent={"space-between"}
    alignItems={"center"} position={"absolute"} width={"100%"} color={"white"} p="4"
     >

     <ArrowLeftIcon/>
     <Text fontWeight={"600"}> Reels </Text>
     <ArrowRightIcon/>
    </Box>
  )
}

export default Videoheader