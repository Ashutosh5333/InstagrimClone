import React, { useEffect } from "react";
import {  Modal,  ModalOverlay,  ModalContent,  ModalBody,  useDisclosure,
  Box,  Text,  useToast,} from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { GetMypost, getDeleteData } from "../../Redux/AppReducer/action";

export const UserDeleteModal = ({_id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const dispatch = useDispatch()
  const toast = useToast()

       
  

       const handleDelete = (_id) =>{
         dispatch(getDeleteData(_id))
         .then((res) =>{
            console.log(res)
            if(res.type === "DELETE_DATA_SUCCESS") {
                if(res.type !== "DELETE_DATA_SUCCESS"){
                   toast({
                     position : 'top',
                     colorScheme : 'red',
                     bg:"red",
                     status : "error",
                     title:res.type
                   })
             
                }else{
                 toast({
                   position : 'top',
                   colorScheme : 'green', 
                   status : "success",
                   title:"Delete post "
                 })
                  dispatch(GetMypost)
                }
            }
         })
       
       }

  

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
              <Text color={"red"} fontWeight={600} p={5} onClick={() =>handleDelete(_id)}>
                {" "}
                Delete{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
              Edit
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
               Hide Like Count
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
               Turn off commenting Post
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
                Share to{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
              Go to post
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5} >
                {" "}
                Embeded{" "}
              </Text>
              <Divider orientation="horizontal" />
              <Text p={5}  onClick={onClose}>
                Cancel
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
