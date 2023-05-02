import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,  useDisclosure,Box,  Text, Heading, Avatar, Input, useToast,} from "@chakra-ui/react";
    import { Divider } from "@chakra-ui/react";
import { AiOutlineEllipsis } from 'react-icons/ai';
const Changeprofile = ({name,src}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);
    const toast = useToast()
    const [image, SetImage] = useState("");
    const [url ,SetUrl] = useState("") 

    console.log( "image url",image)

    useEffect((_id) => {
      if (url) {
        fetch(`https://insta-293s.onrender.com/user/edit/${_id}`, {
          method: "patch",
          body: JSON.stringify({
            image: url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
           console.log(data)
            toast({
              position : 'top',
              status : "success",
              description:data.msg
            })
          })
          .catch((err) => {
            console.log(err);
            toast({
              position : 'top',
              colorScheme : 'red', 
              status : "error",
              title:err
            })
          });
      }
    }, [url]);
  

 
     
     useEffect(() =>{
          // if(image){
        const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-Clone");
      data.append("cloud_name", "dgvfiwlap");
      fetch("https://api.cloudinary.com/v1_1/dgvfiwlap/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          SetUrl(data.url);
          console.log( "data url",data.url);
        })
        .catch((err) => {
          console.log(err);
        });
          // }
     },[])
    
  
  return (
    <>
     <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      ></Box>

      <Text fontSize={"30px"} onClick={onOpen}>
        {/* <AiOutlineEllipsis /> */}
         <Avatar 
          ml=".6em"
          size={{ base: "xl", md: "xl", lg: "2xl" }}
                     name={name}
                      src={src}
         />
      </Text>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={{ base: "80%", md: "80%", lg: "90%" }}>
          <ModalBody>
            <Box textAlign={"center"} p="4">
              <Heading fontSize={"1.5rem"} fontWeight={"400"} mb="5"> Change Profile Photo </Heading>
              <Divider orientation="horizontal" />
              <Text color={"skyblue"}  letterSpacing={1} fontWeight="600" p={5}>
             
               <label style={{ margin: "auto", textAlign: "center" }}>
                  <h4>   Upload Photo </h4>
                  <input
                    type="file"
                    style={{ display: "none", margin: "auto" }}
                    name="url"
                    //  onChange={(e) => console.log(e.target.value) }
                    onChange={(e) => SetImage(e.target.files[0])}
                  />
                </label>
              </Text>

              <Divider orientation="horizontal" />
              <Text p={5} color={"red"}  letterSpacing={1} fontWeight="600">
                Remove Current Photo
              </Text>
             
              <Divider orientation="horizontal" />
              <Text p={5} fontWeight="600" letterSpacing={1} onClick={onClose}>
                Cancel
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

    
    
    </>
  )
}

export default Changeprofile