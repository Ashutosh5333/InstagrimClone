import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {BsSearch} from "react-icons/bs"
// return value&&value?.email.toLowerCase().includes(searchWord.toLowerCase());

const Searchbar = ({queryHandler,Suggestions}) => {
  const [inputtext,SetinputText]= useState("")
  const [active ,SetActive] = useState(0)
 console.log(Suggestions)

  const handleInputTextChange = (e) =>{
    SetinputText(e.target.value)
  }

useEffect(()=>{
  queryHandler(inputtext)
},[inputtext,queryHandler])

   console.log(inputtext)




  return (
     <> 
    <Flex width={{base : '40%', md : '60%', lg :'40%'}} border={'1px solid black'} padding='5px' alignItems='center'>

    <Text ml='10px'><BsSearch/></Text>
    <Input    
         value={inputtext} 
          onChange={handleInputTextChange}
    outline="none"    
    fontSize= "var(--system-16-font-size)"  
      background="rgb(var(--ig-highlight-background))"
       borderRadius='0px' border='0px' 
       placeholder='SEARCH' 
       variant="unstyled" padding='5px'/>

</Flex>

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


// const handleFilter = (event) => {
//   const searchWord = event.target.value;
//   setWordEntered(searchWord);
//   const newFilter = Data.filter((value) => {
//     // console.log(value.name)
//     // return value&&value?.email.toLowerCase().includes(searchWord.toLowerCase());
//   });

//   if (searchWord === "") {
//     setFilteredData([]);
//   } else {
//     setFilteredData(newFilter);
//   }
// };