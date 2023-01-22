import { FormControl,  FormLabel,  Input,  Box,  Heading,  Button}from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { Loginupdata } from '../Redux/AuthReducer/action';



const Login = () => {
 const dispatch= useDispatch()
 const navigate= useNavigate()

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
        // console.log(res.payload.data.token)
         if(res.type === "GET_LOGIN_SUCCESS"){
             if(res.payload.data.msg !== "Login sucessfull"){
               alert("wrong Credential")
             }else{
              alert("Login Successfully")
              localStorage.setItem("token", JSON.stringify(res.payload.data.token))
              navigate("/dash")
             }
         }
      })
  }

    
  return (
    <Box width="400px" m="auto" textAlign="center" px={8} mt={10} borderwidth={1}
    borderRadius={8} boxshadow="lg"
     >
   
        <Heading textAlign="center" my="10px">
          Login
        </Heading>
        <FormControl>
          <FormLabel variant="filled" my="10px"   >Email </FormLabel>
          <Input type="email" placeholder="Email" 
         
          onChange={handleChange}
           name="email"
           />
        </FormControl>
        <FormControl>
          <FormLabel variant="filled" my="10px">Password</FormLabel>
          <Input type='password' placeholder="Password" 
      
          onChange={handleChange}
           name="password"
           />
        </FormControl>
        <Button type="submit"  onClick={handleSubmit}  textAlign="center" colorScheme="teal">Log in</Button>
    </Box>
    
  )
}

export default Login