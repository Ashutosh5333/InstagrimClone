import { Box } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import React from 'react'

const VideoCard = () => {

  return (
    <Box border="2px solid " >
        <video
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          alt='naruto'
          loop
        />
    
    
    </Box>
  )
}

export default VideoCard