import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";


const DotuserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
    

  return (
    <>
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      ></Box>

      <Text fontSize={"30px"} onClick={onOpen}>
        <AiOutlineEllipsis />
      </Text>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={{ base: "80%", md: "80%", lg: "90%" }}>
          <ModalBody>
            <Box textAlign={"center"}>
              <Text color={"red"} fontWeight="600" p={5}>
                {" "}
                Report{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} color={"red"} fontWeight="600">
                {" "}
                Unfollow{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600">
                {" "}
                Add To favorites{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600">
                {" "}
                Go to post{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600">
                {" "}
                Share to{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600">
                {" "}
                Copy Link{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600">
                {" "}
                Embeded{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600" onClick={onClose}>
                Cancel
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal> 
        
    
    </>
  )
}

export default DotuserModal