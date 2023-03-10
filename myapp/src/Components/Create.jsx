import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Box,  Text,Button, useDisclosure,Input, Switch, Divider,} from '@chakra-ui/react'
import { MdOutlineCreateNewFolder } from 'react-icons/md'
import {TiTickOutline} from "react-icons/ti"
import {BiArrowBack} from "react-icons/bi"
// import "./style/create.css"
import { ADDProducts } from '../Redux/AppReducer/action'


const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

   const [description ,SetDescription] = useState("")
   const [ image ,SetImage] = useState("")
   const [url ,SetUrl] = useState("")
   const [title ,SetTitle] = useState("")

 const [post ,newPost] = useState({
   description:"",
   image:"",
 })
 const token = JSON.parse(localStorage.getItem("token"))

 useEffect(() =>{
     if(url){
      fetch("https://sore-cyan-llama-robe.cyclic.app/product/create",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
          description,
          pic:url,
        })
     }) .then(res =>res.json())
     .then(dat =>{
       console.log(dat)
     }).catch(err =>{
       console.log(err)
     })
     }
 },[url])


   const postDetails = () =>{
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","insta-Clone")
      data.append("cloud_name","dgvfiwlap")
      fetch("https://api.cloudinary.com/v1_1/dgvfiwlap/image/upload",{
        method:"post",
        body:data
      })
      .then(res =>res.json())
      .then(data =>{
         SetUrl(data.url)
        console.log(data.url)
      }).catch(err =>{
        console.log(err)
      })
      
   }


  
 const handleSubmit = () =>{
  postDetails()
 
}

  



  return (
    <>
   
       <Box onClick={onOpen} >
       <MdOutlineCreateNewFolder/> 
       </Box> 

    

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" >
        <ModalOverlay />

        <ModalContent  >
       
           <Box 
          //  border={"1px solid red"} 
           display="flex" justifyContent={"space-between"}>
            <Box fontSize={"35px"}  >
            <BiArrowBack/>
            </Box>
              <Text fontWeight={"600"} fontSize="25px" fontFamily={"sans-serif"} fontStyle={"italic"} > New Post  </Text>
             <Button fontSize={"35px"} color="blue" onClick={handleSubmit} >
            <TiTickOutline  />
             </Button>
           </Box>

          <ModalBody >
            <Box>

              <Box 
              //  border="1px solid black" 
                 height="80px" >  
                 <Input placeholder='Write a caption' height="80px"  
                 border="none"  
                 name="description"
                  // onChange={handleChange}
                  onChange={(e) =>SetDescription(e.target.value)}
                   />
               </Box>

              <Box 
               // border="1px solid black"
                borderRadius={10}
               margin={"auto"} mt="4" fontWeight={"500"} color="#fff" fontSize={"1em"}  backgroundColor={"blue.500"}  > 
                <label style={{margin:"auto" , textAlign:"center"  }}  > 
                      <h4 > Select from gallery  </h4>
                
               <input type="file" style={{display:"none" , margin:"auto" }}  
                name="image"
                // onChange={handleChange}
                  onChange={(e) =>SetImage(e.target.files[0])}
                 />

                  
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