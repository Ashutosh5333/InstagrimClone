import { FormControl,  FormLabel,  Input,  Box,  Heading,  Button, Text}from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate,Link} from "react-router-dom"
import { Loginupdata } from '../Redux/AuthReducer/action';



const Login = () => {
 const dispatch= useDispatch()
 const navigate= useNavigate()
 const toast = useToast()

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
         console.log(res)
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
              navigate("/dash")
             }
         }
      })
  }

    
  return (
    <> 
 <Box 

     width={{base : "100%", md :'50%', lg : '40%'}} 
      
     margin={"auto"} mt="20px">  


    <Box width="400px" m="auto" textAlign="center" px={8} mt={10} borderwidth={1}
    borderRadius={8} boxshadow="lg"
     >
   
      

        <Heading style={{fontSize:"1.8em", fontWeight:"600", fontFamily:"sans-serif", fontStyle:"italic" }}> 
        Instagram
       </Heading>
       <br/>
       <br/>
         <Button fontSize={"1.2em"} fontWeight="600" width="full" background={"blue.500"}  colorScheme="blue" color="#fff" > Login in with Facebook </Button>
         <br/><br/>
                <Text>  OR   </Text> 
         <br/>  
        <FormControl>
          <FormLabel variant="filled" my="10px"   > </FormLabel>
          <Input type="email" placeholder="Email" 
         
          onChange={handleChange}
           name="email"
           />
        </FormControl>
        <br/>  
        <FormControl>
          <FormLabel variant="filled" my="10px"></FormLabel>
          <Input type='password' placeholder="Password" 
      
          onChange={handleChange}
           name="password"
           />
        </FormControl>
        <br/>
        <Button type="submit" fontWeight="700" width="full" colorScheme="blue" color="#fff" onClick={handleSubmit}  textAlign="center" >Log in</Button>
        <br/>
        <br/>
          <Text style={{fontSize:"1em", color:"blue", fontWeight:"600" }}> Forgot password ? 
           <Link to="/sign">
          <span> Create an Account</span> 
           </Link>
          </Text>
          <br/>
    </Box>


</Box>

    </>
    
  )
}

export default Login