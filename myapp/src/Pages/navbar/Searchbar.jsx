import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {BsSearch} from "react-icons/bs"
// return value&&value?.email.toLowerCase().includes(searchWord.toLowerCase());

const Searchbar = ({queryHandler,Suggestions}) => {
  const [inputtext,SetinputText]= useState("")
 
  const handleInputTextChange = (e) =>{
    SetinputText(e.target.value)
  }

useEffect(()=>{
  queryHandler(inputtext)
},[inputtext,queryHandler])

 console.log("suggets",Suggestions)
  


// width={{base : '60%', md : '60%', lg :'40%'}} 

  return (
     <> 
      <Box width={{base : '60%', md : '60%', lg :'40%'}}
      //  border={'1px solid yellow'} 
       height="50px"
       > 

    <Flex 
    border={'1px solid black'}
     padding='5px' alignItems='center'
  
     >

    <Text ml='10px'><BsSearch/></Text>
    <Input    
         value={inputtext} 
          onChange={handleInputTextChange}
       outline="none"    
      //  border={'1px solid blue'}
      fontSize= "var(--system-16-font-size)"  
       background="rgb(var(--ig-highlight-background))"
       borderRadius='0px' 
       placeholder='SEARCH' 
       variant="unstyled" padding='5px'/>
     

</Flex>

     <Box 
     border={".5px solid black"} 
  bg='white'

  zIndex={2}
  textAlign='center'
  rounded='lg'
  color='black.800'
  // boxShadow='xl' 
  boxShadow='lg'
     > 

       {
        Suggestions.length> 0 && Suggestions.map((item)=>{
          return <Box ml={"30px"} textAlign={"left"} >{item}</Box>
        })
       }

     </Box>


</Box>

{/*       
      <Box border="1px solid black">
                {
                  Suggestions.map((item,index) =>{
                       <Box key={index}>{item}</Box>
                  })
                }
       </Box> */}

     

</>
   
  )
}

export default Searchbar
