import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

function LoadSpin() {
  return (
    <Box
      display="flex"
      // alignItems="center"
      justifyContent="center"
      height="100vh" // You may adjust the height as needed
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}

export default LoadSpin;
