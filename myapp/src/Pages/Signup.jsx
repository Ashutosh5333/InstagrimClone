import {FormControl, Box,  FormLabel,  Input,  Heading,  Button,} from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { useNavigate }from "react-router-dom"
import { Signupdata } from '../Redux/AuthReducer/action'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()

   const [post ,SetPost]=useState({
       email:"",
       password:"",
   })

    
    const handleChange = (e) =>{
        const {name,value}=e.target
        SetPost({...post,[name]:value})
    }
//  console.log(post)

    const handleSubmit = () => {
         dispatch(Signupdata(post))
         .then((res)=>{
           console.log(res.payload)
           console.log("res",res)
            if(res.type === "GET_SIGNUP_SUCCESS" && res.payload.data !== "user is alredy present" ){
                alert("user created Successfully Account")
                    navigate("/login")
            }
            else{
              alert(res.payload.data)
            }
         })
    }



  return (
    <Box width="400px" m="auto" textAlign="center" px={8} mt={10} borderwidth={1}
    borderRadius={8} boxshadow="lg" mb={10}
     >
      
        <Heading textAlign="center" my="10px">
          Signup
        </Heading>
    
        <FormControl>
          <FormLabel variant="filled" my="10px"   >Email </FormLabel>
          <Input type="email" placeholder="Email" 
        
         
          onChange={handleChange} 
           name="email"
           isRequired/>
        </FormControl>
       
        
        <FormControl>
          <FormLabel variant="filled" my="10px">Password</FormLabel>
          <Input type='password' placeholder="Password"
           
         
          onChange={handleChange} 
           name="password"
           isRequired/>
        </FormControl>
     
        
        <Button type="submit" onClick={handleSubmit} textAlign="center" colorScheme="teal">Sign up </Button>

   
    </Box>
  )
}

export default Signup