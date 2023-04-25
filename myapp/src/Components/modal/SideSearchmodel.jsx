import React from 'react'
import { Drawer,DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,    DrawerContent,    DrawerCloseButton, useDisclosure, Text, Button, Input, Tooltip,  } from '@chakra-ui/react'
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

        <DrawerContent  border="1px solid green"   >
          <DrawerCloseButton />
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Search' fontSize={"1rem"} variant="unstyled" bgColor={"gray.100"} colorScheme='gray' p="2" />
          </DrawerBody>

       

        </DrawerContent>
      </Drawer>
    </>
    

  )
}

export default SideSearchmodel