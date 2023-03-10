import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {

  return (
    <>
     <Box  margin={"auto"} height="90vh">
           
           <Box margin={"auto"} width="50%" marginTop={"120px"} justifyContent="center"  >  
              <Image m="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oR3ZbhlJtuMNg0Wc9AwPG5m85GjYXqhUcl1waig&s" />
           </Box>

         
            
            <Box 
           margin={"auto"} width="50%" marginTop={"220px"}> 
                <Text textAlign={"center"} color="gray"  letterSpacing="2px" fontWeight={"600"}> from </Text>
                 <Text fontSize={"1.2rem"} letterSpacing="2px" color="red" textAlign={"center"} fontWeight={"500"}> Ashutosh lakshakar </Text>
            </Box>
     </Box>
    </>
  )
}

export default Loading