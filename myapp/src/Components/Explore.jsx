import React from 'react'
import { Box } from '@chakra-ui/react';
import Side from '../Pages/Side';
import ExploreCard from './Explorec/ExploreCard';

const Explore = () => {
    

  return (
    <>
    <Box  width="100vw" display={"flex"} justifyContent={"space-between"} gap="5" m="auto" >

      <Box  width="15%"> 
          <Side/>
      </Box>

      <Box  width="80%">
          <ExploreCard/>
      </Box>
           
    </Box>
    </>
  )
}

export default Explore