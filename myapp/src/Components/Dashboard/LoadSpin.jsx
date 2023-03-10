import { Spinner } from '@chakra-ui/react'
import React from 'react'

function LoadSpin() {

  return (
    <>
     <div style={{margin:"auto" , justifyContent:"center" }}>
     <Spinner
          thickness="4px" 
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />

     </div>

    </>
  )
}

export default LoadSpin