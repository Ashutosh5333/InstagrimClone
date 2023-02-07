import { Box } from '@chakra-ui/react'
import React from 'react'
import {BsInstagram , BsSearch} from "react-icons/bs"
import {AiFillHome, AiOutlineHeart, AiOutlineMenu} from "react-icons/ai"
import {MdExplore,MdOutlineCreateNewFolder} from "react-icons/md"
import {TfiVideoClapper} from "react-icons/tfi"
import {BiMessageRoundedDetail} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import { Text } from '@chakra-ui/react';


const Side = () => {
  
    return (
    <>
     <Box 
    //  border={"1px solid yellow"} 
          p={1}
          display="flex" gap={2}  
           position="fixed" 
          //  position="sticky"
          >
          
                {/* <br/> */}

          <Box 
          //  border={"5px solid blue"} 
              gap="8px"  width={"60%"}  > 

               <Box 
              //  border="1px solid yellow"  
               p={1}
               display={"flex"}  gap="8px" justifyContent={"space-between"}> 
              <Box fontSize={"2.2em"} 
                  > <BsInstagram/> </Box>
                <Box  >   </Box>
               </Box>

               <Box 
              //  border="1px solid yellow"
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <AiFillHome/> </Box>
                
                <Box   fontSize="1.1em" fontWeight={"600"} margin={"auto"} > 
                <Text textAlign={"left"}>Home </Text>  
                </Box>
               </Box>

               <Box 
              //  border="1px solid yellow" 
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <BsSearch/> </Box>
                <Box  
                // border={"2px solid red"}   
                fontSize="1.1em" margin={"auto"}  >
                <Text textAlign="left">Search </Text>
                  </Box>
               </Box>

               <Box 
              //   border="1px solid yellow"
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"}  > <MdExplore/> </Box>
                <Box 
                //  border={"2px solid red"}  
                fontSize="1.1em"  margin={"auto"} >
                <Text textAlign={"left"}>  Explore</Text>
                  </Box>
               </Box>

               <Box 
                // border="1px solid yellow"
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <TfiVideoClapper/> </Box>
                <Box  
                // border={"2px solid red"} 
                margin="auto" fontSize="1.1em" > 
                <Text  textAlign={"left"}>  Reels </Text> 
                  </Box>
               </Box>

               <Box 
                // border="1px solid yellow"
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <MdOutlineCreateNewFolder/> </Box>
                <Box   fontSize="1.1em" margin={"auto"}  >
                <Text 
                //  border={"2px solid red"} 
                textAlign="left" > Create  </Text>
                  </Box>
               </Box>

               <Box 
                // border="1px solid yellow"
                p={1}
                display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <AiOutlineHeart/> </Box>
                <Box    fontSize="1.1em" margin={"auto"} >
                <Text 
                //  border={"2px solid red"} 
                 textAlign="left"> Notifications  </Text>
                </Box>

               </Box>

  

               <Box 
                // border="1px solid yellow" 
               p={1}
               display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"} > <CgProfile/> </Box>
                <Box  fontSize="1.1em" margin={"auto"}   >
                <Text textAlign={"left"}> Profile </Text>
                  </Box>
               </Box>

               <Box 
              //  border="1px solid yellow" 
               p={1}
               display={"flex"} mt={6} gap="8px" justifyContent={"space-between"}> 
               <Box fontSize={"2.2em"}  > <AiOutlineMenu/> </Box>
                <Box 
                //  border={"2px solid red"} 
                fontSize="1.1em" margin={"auto"}> 
                <Text textAlign={"left"}> Menu </Text>
                  </Box>
               </Box>
         

          
          </Box>

        {/* ----------------- */}

          {/* <Box  border={"1px solid Brown"} width="50%">  */}
          
          {/* <Box fontSize={"1.2em"}  > Insta </Box>

          <Box fontSize={"1.2em"}  > Home </Box>

          <Box fontSize={"1.2em"}  > Search </Box>

          <Box fontSize={"1.2em"}  > Explore </Box>

          <Box fontSize={"1.2em"}  > Reels </Box>

          <Box fontSize={"1.2em"}  > Message </Box>

          <Box fontSize={"1.2em"}  > Notifications </Box>

          <Box fontSize={"1.2em"}  > Create </Box>

          <Box fontSize={"1.2em"}  > Profile </Box>

          <Box fontSize={"1.2em"}  > More </Box> */}

          {/* <Box fontSize={"1.2em"}  > Home </Box> */}

          {/* </Box> */}
    
     </Box>
    </>
  )

}

export default Side