import React from 'react'
import { Drawer,DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,    DrawerContent,    DrawerCloseButton, useDisclosure, Text, Button, Input, Tooltip,  } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SideSearchmodel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
    
      <Text onClick={onOpen}>
    {/* <Tooltip hasArrow label='Right' placement='auto'> */}
           <BsSearch/>      
    {/* </Tooltip> */}

      </Text>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />

        <DrawerContent  border="1px solid green"   >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    

  )
}

export default SideSearchmodel