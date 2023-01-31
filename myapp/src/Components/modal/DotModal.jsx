import React from 'react'
import {    Modal,    ModalOverlay,    ModalContent,    ModalHeader,    ModalFooter,    ModalBody,    ModalCloseButton, useDisclosure, Box, Button, Text,  } from '@chakra-ui/react'
import { AiOutlineEllipsis } from "react-icons/ai";
import { Divider } from '@chakra-ui/react'


export const DotModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
    <> 
     <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
    
  </Box>


  <Text fontSize={"30px"} onClick={onOpen}>
              <AiOutlineEllipsis />
    </Text>

  <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      {/* <ModalHeader>Modal Title</ModalHeader> */}
      {/* <ModalCloseButton /> */}
      <ModalBody>
             <Box border="1px solid black"  textAlign={"center"}>
               <Text p={5}> Report </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Unfollow </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Add To favorites </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Go to post </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Share to... </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Copy Link </Text>
               <Divider orientation='horizontal' />
               <Text p={5}> Embeded </Text>
               <Divider orientation='horizontal' />
               <Text p={5}   onClick={onClose}> 
                     Cancel
               </Text>

             </Box>
     
      </ModalBody>

     
    </ModalContent>
  </Modal>
  
  </>
  )


}
