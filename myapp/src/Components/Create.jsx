import React from 'react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,  Box,  Text,Button, useDisclosure,Input, Switch, Divider,} from '@chakra-ui/react'
import { MdOutlineCreateNewFolder } from 'react-icons/md'
import {TiTickOutline} from "react-icons/ti"
import {BiArrowBack} from "react-icons/bi"
// import "./style/create.css"

const Create = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

       <Box onClick={onOpen} >
       <MdOutlineCreateNewFolder/> 
       </Box> 

    
       {/* width={{ base: "40%", md: "80%", lg: "90%" }} */}

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" >
        <ModalOverlay />

        <ModalContent  >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
           <Box 
          //  border={"1px solid red"} 
           display="flex" justifyContent={"space-between"}>
            <Box fontSize={"35px"}  >
            <BiArrowBack/>
            </Box>
              <Text fontWeight={"600"} fontSize="25px" fontFamily={"sans-serif"} fontStyle={"italic"} > New Post  </Text>
             <Box fontSize={"35px"} color="blue">
            <TiTickOutline  />
             </Box>
           </Box>

          <ModalBody >
            <Box 
            // border={"1px solid red"}
             >

              <Box 
              //  border="1px solid black" 
                 height="80px" >  
                 <Input placeholder='Write a caption' height="80px"  
                 border="none" />
               </Box>

              <Box 
               // border="1px solid black"
                borderRadius={10}
               margin={"auto"} mt="4" fontWeight={"500"} color="#fff" fontSize={"1em"}  backgroundColor={"blue.500"}  > 
                <label style={{margin:"auto" , textAlign:"center"  }}  > 
                      <h4 > Select from gallery  </h4>
                
               <input type="file" style={{display:"none" , margin:"auto" }}    />
                </label>

              </Box>
               {/* ------------------- */}

              <Box 
              // border="1px solid blue"
              >
               
              
              <Box textAlign={"left"}     >
               <Text fontWeight="600" p={3}> Tag people </Text>
               <Divider orientation='horizontal' />
               <Text fontWeight="600" p={3}> Add message button </Text>
               <Divider orientation='horizontal' />
               <Text p={3} fontWeight="600" > Add Location </Text>
               <Divider orientation='horizontal' />
               <Text p={3}  fontWeight="600" > Add Reminder </Text>
               <Divider orientation='horizontal' />
               <Text p={3}  fontWeight="600" >Add music</Text>
               <Divider orientation='horizontal' />
             </Box>

              </Box>

        {/* -------------------- bottom ------------- */}

              <Box 
              // border="1px solid yellow"
              > 
              
              <Box
              // border="1px solid green"
              display="flex" fontWeight="600" justifyContent={"space-between"} p={4} >
                     <Box 
                    //  border="1px solid brown"
                     > 
                     <Text  >
                       Boost post
                     </Text> </Box>
                      <Box 
                      // border="1px solid yellow"
                      >
                      <Switch id='email-alerts' />
                      </Box>
               </Box>

              </Box>
              <Divider orientation='horizontal' />
          {/* ---------------------- */}
          <Box 
          // border="1px solid green"
          display="flex"  fontWeight="600" justifyContent={"space-between"} p={4} >
                     <Box 
                    //  border="1px solid brown"
                     > 
                     <Text>
                      Share to Facebook
                     </Text> </Box>
                      <Box 
                      // border="1px solid yellow"
                      >
                      <Switch id='email-alerts' />
                      </Box>
               </Box>
               <Box 
              // border="1px solid green"
              
                display="flex"  fontWeight="600" justifyContent={"space-between"} p={4} >
                     <Box 
                    //  border="1px solid brown"
                     > 
                     <Text>
                      Share to Twitter
                     </Text> </Box>
                      <Box 
                      // border="1px solid yellow"
                      >
                      <Switch id='email-alerts' />
                      </Box>
               </Box>
               <Box 
              // border="1px solid green"
               
               display="flex"  fontWeight="600" justifyContent={"space-between"} p={4} >
                     <Box 
                    //  border="1px solid brown"
                     > 
                     <Text>
                     Share to Tumblr
                     </Text> </Box>
                      <Box 
                      // border="1px solid yellow"
                      >
                      <Switch id='email-alerts' />
                      </Box>
               </Box>
               <Box 
              //  
              // border="1px solid green"
               
               display="flex"  fontWeight="600" justifyContent={"space-between"} p={4} >
                     <Box 
                    //  border="1px solid brown"
                     > 
                     <Text>
                       Advanced settings 
                     </Text> </Box>
                      <Box 
                      // border="1px solid yellow"
                      >
                      <Switch id='email-alerts' />
                      </Box>
               </Box>



            </Box>
          </ModalBody>

          <ModalFooter>
            
       
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Create