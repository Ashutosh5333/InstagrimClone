import {FormControl, Box,  FormLabel,  Input,  Heading,  Button, Text,} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { useNavigate }from "react-router-dom"
import { Signupdata } from '../Redux/AuthReducer/action'
import "./Style/Signup.css"

const Signup = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const toast=useToast()

   const [post ,SetPost]=useState({
       email:"",
       password:"",
   })

    
    const handleChange = (e) =>{
        const {name,value}=e.target
        SetPost({...post,[name]:value})
    }


    const handleSubmit = () => {
         dispatch(Signupdata(post))
         .then((res)=>{
           console.log(res.payload)
           console.log("res",res)
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
                status : "success",
                title:res.payload.data
            })
            }
         })
    }



  return (
    <> 
    
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
          {/* <FormLabel variant="filled" my="10px"   >Email </FormLabel> */}
          <Input type="email" placeholder="Email" 
          
          onChange={handleChange} 
           name="email"
           isRequired/>
        </FormControl>
        <br/>
        <FormControl>
          {/* <FormLabel variant="filled" my="10px"   >Full Name </FormLabel> */}
          <Input type="name" placeholder="Full Name" 
          
           isRequired/>
        </FormControl>
        <br/>
        <FormControl>
          {/* <FormLabel variant="filled" my="10px"   >UserName</FormLabel> */}
          <Input type="text" placeholder="UserName" 
    
           isRequired/>
        </FormControl>
       
        <br/>
        <FormControl>
          {/* <FormLabel variant="filled" my="10px">Password</FormLabel> */}
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

    </> 

  )
}

export default Signup