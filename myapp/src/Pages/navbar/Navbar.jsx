import React from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import {BsSearch} from "react-icons/bs"
import {FaRegHeart} from "react-icons/fa"

import Instagramlogo from "../../assets/Instagramlogo.png"


const Navbar = () => {



  return (
    <Box w='100%' p={4} border="1px solid black" color='Black'>
      <Flex h={38}  alignItems={'center'} justifyContent={'space-between'}>
           <Flex  padding='5px'  width={{base : "20%", md :'13%', lg : '10%'}} >
               <h4 style={{fontSize:"25px", fontWeight:"500", fontStyle:"italic" }}> Instagram </h4>
           </Flex>
         
         {/* For Searchbar */}
   

         <Flex width={{base : '40%', md : '60%', lg :'40%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input       outline="none"    fontSize= "var(--system-16-font-size)"    background="rgb(var(--ig-highlight-background))" borderRadius='0px' border='0px' placeholder='SEARCH' variant="unstyled" padding='5px'/>
               </Flex>

           <Flex  mr={20} justifyContent={'left'}>  
                <Text mt={10} color='black' alignItems={"center"} h="50">
              
            
                <FaRegHeart/>
                </Text>
           </Flex>
        

           
         

      </Flex>
   
  </Box>

  )
}

export default Navbar


/**
 *  <Grid templateColumns='repeat(3, 1fr)' gap={4}>
    <Box w='70px' >
         <Image src={Instagramlogo} alt="Instagram" />
    </Box>
    <Box w='170px' h='10' bg='blue.500' />
    <Box w='180px' h='10' bg='blue.500' />
   </Grid>

 */