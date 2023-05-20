import { FormControl,  FormLabel,  Input,  Box,  Heading,  Button, Text, Image,}from '@chakra-ui/react'
import {  VStack, InputGroup,  InputRightElement,  useToast,   InputLeftElement,  Card,  CardBody, useColorModeValue,} from "@chakra-ui/react";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate,Link} from "react-router-dom"
import { Loginupdata } from '../Redux/AuthReducer/action';
import { ViewIcon, ViewOffIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";


const Login = () => {
 const dispatch= useDispatch()
 const navigate= useNavigate()
 const toast = useToast()
 const [show, setShow] = useState(false);
 const colorScheme = useColorModeValue("blue", "green");
   const [post ,SetPost] = useState({
     email:"",
     password:"",
   })


    const handleChange = (e) =>{
      const {name,value}=e.target
      SetPost({...post,[name]:value})
    }

  const handleSubmit = () =>{
      dispatch(Loginupdata(post))
      .then((res) =>{
        //  console.log(res)
         if(res.type === "GET_LOGIN_SUCCESS"){
             if(res.payload.data.msg !== "Login sucessfull"){
                toast({
                  position : 'top',
                  colorScheme : 'red',
                  bg:"red",
                  status : "error",
                  description:res.payload.data
                })
          
             }else{
              toast({
                position : 'top',
                colorScheme : 'green', 
                status : "success",
                title:res.payload.data.msg
              })
            
              localStorage.setItem("token", JSON.stringify(res.payload.data.token))
              localStorage.setItem("user",JSON.stringify(res.payload.data.data))
              navigate("/")
             }
         }
      })
  }

  const handleClickShow = () => {
    setShow(!show);
  };
    
  return (
    <> 
      <Card py="3"  maxW="lg" m="auto" mt="20" >
          
      <CardBody  >

      <Box mt="10" >
           {/* <Image height="12vh" m="auto" mb="5"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Intagram_logo_2016.svg.png" /> */}
           <Image width={"200px"} height="12vh" m="auto" mb="5" src="https://github.com/mihir0699/Instagram-Clone/blob/master/src/images/insta_image.png?raw=true" />
              <Text color={"#FFFFFF"} textAlign={"center"} fontWeight={"600"} > Login </Text>
       </Box>

         <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" mb="10" > Login in with Facebook </Button>

        <VStack maxW={"2xl"} spacing={5} >
          <InputGroup position="relative" >
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="1"
              children={<EmailIcon color="gray.400" boxSize={5} />}
            />
            <Input
              placeholder="Email*"
              type="email"
              name="email"
              size="lg"
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup position="relative">
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="1"
              children={<UnlockIcon color="gray.400" boxSize={5} />}
            />
            <Input
              type={show ? "text" : "password"}
              placeholder="Password*"
              name="password"
              size="lg"
              onChange={handleChange}
              
            />
            <InputRightElement width="4.5rem" position="absolute" top="1">
              <Button
                h="1.75rem"
                size="lg"
                variant="link"
                onClick={handleClickShow}
              >
                {show ? (
                  <ViewOffIcon color="gray.400" boxSize={5} />
                ) : (
                  <ViewIcon color="gray.400" boxSize={5} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            width="100%"
            size="lg"
            onClick={handleSubmit}
            colorScheme={colorScheme}
            loadingText={"Login"}
            isDisabled={
                 post.email=="" || post.password ==""
             }
          >
            Login
          </Button>

        </VStack>

        <Text m="auto" mt="10" textAlign={"center"}  style={{fontSize:"1em", color:"blue", fontWeight:"600" }}> Forgot password ? 

           <Link to="/sign">
          <span style={{fontSize:"1em", color:"black", fontWeight:"500" }}> Create an Account</span> 
           </Link>

        </Text>

      </CardBody>


      </Card>

    </>
    
  )
}

export default Login

