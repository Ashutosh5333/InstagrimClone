import React from 'react'
import { Box } from '@chakra-ui/react';
import Side from '../Pages/Side';

const Explore = () => {
    

  return (
    <>
    <Box border="3px solid red" width="100vw" display={"flex"} justifyContent={"space-between"} gap="5" m="auto" height={"100vh"}>

      <Box  width="15%"> 
          <Side/>
      </Box>

      <Box border="2px solid blue" width="80%">

      </Box>
    </Box>
    </>
  )
}

export default Explore