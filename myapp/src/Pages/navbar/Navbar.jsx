import React, { useCallback, useEffect, useState } from 'react'
import { Box, Flex, Input, isChakraTheme, Text } from '@chakra-ui/react';
import {BsSearch} from "react-icons/bs"
import {FaRegHeart} from "react-icons/fa"

import Instagramlogo from "../../assets/Instagramlogo.png"
import { GetUserData } from '../../Redux/AppReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from './Searchbar';


const Navbar = () => {

  const dispatch = useDispatch()
  const Data = useSelector((store) => store.AppReducer.UserData)
  //  console.log(Data) 

    useEffect(()=>{
    dispatch(GetUserData)
    },[])
    // =========== 

  

  return (
    <Box w='100%' p={4} border="1px solid black" color='Black'>
      <Flex h={38}  alignItems={'center'} justifyContent={'space-between'}>
           <Flex  padding='5px'  width={{base : "20%", md :'13%', lg : '10%'}} >
               <h4 style={{fontSize:"25px", fontWeight:"500", fontStyle:"italic" }}> Instagram </h4>
           </Flex>
         
         {/* For Searchbar */}
             
              <Searchbar Data={Data} />

       
        {/* ==================== */}

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


{/* 
         <Flex width={{base : '40%', md : '60%', lg :'40%'}} border={'1px solid black'} padding='5px' alignItems='center'>
                <Text ml='10px'><BsSearch/></Text>
                <Input     
                // value={inputtext}   
                //  onChange={handleInputChange}
                outline="none"    
                fontSize= "var(--system-16-font-size)"  
                  background="rgb(var(--ig-highlight-background))"
                   borderRadius='0px' border='0px' 
                   placeholder='SEARCH' 
                   variant="unstyled" padding='5px'/>
            </Flex> */}
               
