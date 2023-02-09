import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Text,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { MdOutlineCreateNewFolder } from 'react-icons/md'

const Create = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

       <Box onClick={onOpen} >
       <MdOutlineCreateNewFolder/> 
       </Box> 

      {/* <Text  onClick={onOpen}>
      <MdOutlineCreateNewFolder/> 
      </Text> */}
             

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            lorem
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Create