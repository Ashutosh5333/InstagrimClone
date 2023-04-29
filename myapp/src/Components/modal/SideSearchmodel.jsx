import React from 'react'
import { Drawer,DrawerBody, DrawerHeader, DrawerOverlay,    DrawerContent,    DrawerCloseButton, useDisclosure, Text, Button, Input, InputRightElement, InputGroup, InputLeftElement,  } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'


const SideSearchmodel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
    
      <Text onClick={onOpen}>
           <BsSearch/>      
   

      </Text>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />

        <DrawerContent    >
          {/* <DrawerCloseButton border="none" /> */}
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>
          <InputGroup position="relative">
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="1"
            />
            <Input
              size="lg"
              placeholder={"Search"}
            />
            <InputRightElement width="2.5rem" position="absolute" top="-2" fontSize={"1rem"}>
              <Button
                h="1.75rem"
                size="lg"
                variant="link"
              >
                 <DrawerCloseButton border="none" />
               
              </Button>
            </InputRightElement>
          </InputGroup>
              
          </DrawerBody>

       

        </DrawerContent>
      </Drawer>
    </>
    

  )
}

export default SideSearchmodel