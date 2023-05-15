import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AllUserData } from "../Redux/AppReducer/action";


export const Suggestions = () => {
   const [data,SetData] = useState([])
   const dispatch  = useDispatch()
   const userdata = JSON.parse(localStorage.getItem("user"))


    
     useEffect(() =>{
       dispatch(AllUserData)
        .then((res) =>{
           SetData(res.payload)
      
        }).catch((err) =>{
           console.log(err)
        })
     },[])



  return (
    <>
      <Box width="90%" margin={"auto"} 
      >

{/* --------------------------------------- */}

        <Box
          mt="4"
          display="flex"
          justifyContent={"space-between"}
        >
        
          {/* --------------------------- */}

            <Box 
             display={"flex"} justifyContent="center" alignContent={"center"} textAlign="center" > 
            <Wrap p="2">
              <WrapItem>
                <Avatar
                  size="lg"
                  name={userdata?.name}
                />{" "}
              </WrapItem>
            </Wrap>
             
             <Box 
             margin="auto" textAlign={"start"} > 
             <Text alignItems={"center"}  fontWeight="600" textAlign="center" margin={"auto"} > {userdata?.email} </Text>
             <Text fontSize="15" color={"gray"} > {userdata?.name} </Text>
             </Box>

            </Box>


          <Box margin={"auto"} fontWeight="400" color="#27c4f5" > Switch </Box>

        </Box>

        {/* ============ */}
        

          <Box
  
            display="flex" mt={6}
            justifyContent={"space-between"}
          >
            <Box>
              <Text color={"gray"} fontWeight="500" fontSize={"1em"}  > Suggestions for you </Text>{" "}
            </Box>

            <Box fontWeight="450" > See All </Box>

          </Box>


        {/* ---------------------------------- */}

        {

data.length >0 && data.map((el) =>{
 return  <Box key={el._id}>

 <Box
            display="flex"
            justifyContent={"space-between"}
          >
         
        
            <Box  display={"flex"} justifyContent="center" alignContent={"center"} textAlign="center" > 

            <Wrap p="4">
              <WrapItem>
                <Avatar
                  size="md"
                  name= {el.name}
                   src={el.image}
                  
                />{" "}
              </WrapItem>
            </Wrap>
             
             <Box 
             textAlign="start" margin={"auto"}> 
             <Text alignItems={"center"} fontWeight="600" margin={"auto"} >{el.name} </Text>
             <Text color={"gray"} > New on Instagram </Text>
            </Box>

            </Box>


            <Box margin={"auto"}  color="#27c4f5"> Follow </Box>

          </Box>

 </Box>

})

}


{/* ----------------- */}






      </Box>
    </>
  );
};
