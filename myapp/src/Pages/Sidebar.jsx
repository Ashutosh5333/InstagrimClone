import { Drawer, DrawerBody, DrawerFooter,DrawerHeader,DrawerOverlay,  DrawerContent,  DrawerCloseButton,  useDisclosure, Button,Input, Box,  
} from '@chakra-ui/react'

import React from 'react'

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <> 
   <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Open
  </Button>

  <Drawer
   
    border="1px solid red"
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    
    <DrawerOverlay />
    <Box  width="20%"
    //  border="1px solid red" 
     > 
    <DrawerContent border="1px solid red" width={"50px"}
     >
      <DrawerCloseButton />
      <DrawerHeader>Create your account</DrawerHeader>

      <DrawerBody>
        <Input placeholder='Type here...' />
      </DrawerBody>

      <DrawerFooter>
        <Button variant='outline' mr={3} 
        onClick={onClose}
        >
          Cancel
        </Button>
        <Button colorScheme='blue'>Save</Button>
      </DrawerFooter>
    </DrawerContent>

   </Box>

  </Drawer>
</>
  )
}
