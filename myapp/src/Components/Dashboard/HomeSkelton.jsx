import { Box } from '@chakra-ui/react'
import {  SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'





export const HomeSkelton = () => {


  return (
    <>
      <Box>
        <Box padding="8" boxShadow="lg" bg="white" width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
        <Box padding="8" boxShadow="lg" bg="white"  width={{base:"70vw",md:"50vw",lg:"40vw"}} margin="auto">
          <SkeletonCircle size="16" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="8" />
        </Box>
      </Box>
    </>
  );
};


