import {FormControl, Box,  Heading,  Text,} from '@chakra-ui/react'
import {  Button,  Card,  CardBody,  Input,  InputGroup,  InputLeftElement,  InputRightElement,  VStack,  useColorModeValue,useToast,} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { useNavigate }from "react-router-dom"
import { Signupdata } from '../Redux/AuthReducer/action'


const Signup = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const toast=useToast()

   const [post ,SetPost]=useState({
       email:"",
       password:"",
       name:""
   })

    
    const handleChange = (e) =>{
        const {name,value}=e.target
        SetPost({...post,[name]:value})
    }
  
    const handleClickShow = () => {
      setShow(!show);
    };

    const handleSubmit = () => {
         dispatch(Signupdata(post))
         .then((res)=>{
         
            if(res.type === "GET_SIGNUP_SUCCESS" && res.payload.data !== "user is alredy present" ){
               
                  toast({
                    position : 'top',
                    colorScheme : 'green', 
                    status : "success",
                    title:"user created Successfully Account"
                })
                    navigate("/login")
            }
            else{  
              toast({
                position : 'top',
                colorScheme : 'green', 
                status : "error",
                title:res.payload.data
            })
            }
         })
    }



  return (
    <> 
  <Card py="3" maxW="lg" m="auto" mt="20">

        <CardBody>
        
       <Heading textAlign={"center"} style={{fontSize:"1.8em", fontWeight:"600", fontFamily:"sans-serif", fontStyle:"italic" }}
       mb="5"
       > Instagram
       
       </Heading>
           <Text  textAlign={"center"}  fontSize="15px" fontWeight="650" color="gray"
           mb="5"
           > Sign up to see photos and videos from your friends </Text>

        
         <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff"
         mb="5" > Login in with Facebook </Button>
         
          <VStack maxW="2xl" spacing={5}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<CiUser color="gray" size="23" />}
              />
              <Input
                placeholder="Name*"
                type="name"
                name="name"
                onChange={handleChange}
                
                size="lg"
              />
            </InputGroup>


            <InputGroup position="relative">
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
                  size="sm"
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
            onClick={handleSubmit}
              width="100%"
              colorScheme={colorScheme}
              size="lg"
            >
              Signup
            </Button>
          </VStack>

         <Text  fontSize="1rem"
           textAlign={"center"} mt={"5"}>
         People who use our service may have uploaded your contact information to Instagram. Learn More

         </Text> 

   <Text fontSize="1rem" fontWeight="500" color="gray"
           textAlign={"center"} mt="2"
   >By signing up, you agree to our Terms </Text>

<Text textAlign={"center"}> <span style={{fontSize:"1rem", fontWeight:"600", color:"gray"}}>
Privacy Policy and Cookies Policy . </span> </Text>


        </CardBody>
      </Card>
    </> 

  )
}

export default Signup

/**
 *   
    <Box  className='Signup'
    // border={"1px solid black"} 
     width={{base : "100%", md :'50%', lg : '40%'}} 
      
     margin={"auto"} mt="20px">  





    <Box width="400px" m="auto" textAlign="center" px={8} mt={5} borderwidth={1}
    borderRadius={8} boxshadow="lg" mb={10}
     >

       <Heading style={{fontSize:"1.8em", fontWeight:"600", fontFamily:"sans-serif", fontStyle:"italic" }}> Instagram
       
       </Heading>
           <Text  style={{fontSize:"15px", fontWeight:"650", color:"gray"}}> Sign up to see photos and videos from your friends </Text>

        
         <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" > Login in with Facebook </Button>
         
         <br/>
         <br/>
        <FormControl>
         
          <Input type="email" placeholder="Email" 
          
          onChange={handleChange} 
           name="email"
           isRequired/>
        </FormControl>
        <br/>
        <FormControl>
        
          <Input type="name" placeholder="Full Name" 
             name="name"
             onChange={handleChange} 
           isRequired/>
        </FormControl>
        <br/>

       
        <FormControl>
    
          <Input type='password' placeholder="Password"
           
          onChange={handleChange} 
           name="password"
           isRequired/>
        </FormControl>
     

              <br/>
        <Button width="full"  fontSize={"1.2em"} fontWeight="600" type="submit" onClick={handleSubmit} textAlign="center" background={"blue.500"}  colorScheme="blue">Sign up </Button>

           <Text style={{fontSize:"15px", fontWeight:"500", color:"gray"}}> By Signing up, you agree to our  </Text>
           <Text> <span style={{fontSize:"20px", fontWeight:"600", color:"gray"}}>Terms & Privacy Policy</span> </Text>
    </Box>

     
</Box>

 */