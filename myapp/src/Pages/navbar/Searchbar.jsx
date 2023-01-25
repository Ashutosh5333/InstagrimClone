import { Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {BsSearch} from "react-icons/bs"

const Searchbar = ({Data}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      // console.log(value.name)
      return value&&value?.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


console.log("filter", filteredData)



  return (
   
    <Flex width={{base : '40%', md : '60%', lg :'40%'}} border={'1px solid black'} padding='5px' alignItems='center'>
    <Text ml='10px'><BsSearch/></Text>

    <Input    
     value={wordEntered}   
     onChange={handleFilter}
    outline="none"    
    fontSize= "var(--system-16-font-size)"  
      background="rgb(var(--ig-highlight-background))"
       borderRadius='0px' border='0px' 
       placeholder='SEARCH' 
       variant="unstyled" padding='5px'/>


</Flex>
   
  )
}

export default Searchbar