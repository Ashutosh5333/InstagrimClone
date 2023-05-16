import React, { useEffect, useState } from "react";
import {  Avatar,  Box,  Button,  Divider,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import { HiUserAdd } from "react-icons/hi";
import "./prof.css";
import Side from './../../Pages/Side';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleUserData, SingleUserprofile } from "../../Redux/AppReducer/action";
import Stories from "./Stories/Stories";
import Collection from "./Collections/Collection";
import DotuserModal from "./DotuserModal";
const token = JSON.parse(localStorage.getItem("token"))

export const UserProfile = () => {
  const [isLoading, SetLoading] = useState(false);
   const [data,SetData] = useState("")
  const [Userprofile,SetUserprofile] = useState("")
     const dispatch = useDispatch()
    const {userId} = useParams()
       
      
        useEffect(() =>{
          dispatch(SingleUserData(userId))
          .then((res) =>{
            // console.log(res)
          }).catch((err) =>{
             console.log(err)
          })
        },[userId])

   
      
   useEffect(() =>{
     SetLoading(true)
      dispatch(SingleUserprofile(userId))
       .then((res) =>{
        //  console.log(res)
         SetUserprofile(res.payload)
         SetData(res.payload)
         SetLoading(false)
       }).catch((err) =>{
        console.log(err)
       })
   },[userId])
   
    // const data = Singleuser
    //  console.log(data)
  

     const FollowUser = () =>{
        fetch(`https://sore-cyan-llama-robe.cyclic.app/follow`,{
           method:"put",
           headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          },
        })
     }
   

  return (
    <>

      <Box
      className="container"
      display="flex"
      gap="10px"
      justifyContent={"space-between"}
      width={{ base: "100%", md: "100%", lg: "100%" }}
      m="auto"
    >
      <Box
      width="15%"  className="side">
        <Side />
      </Box>


      <Box
        width="85%"  margin={"auto"}>
       
           <Box   display="flex"  justifyContent={"space-between"}
          gap="10px"  className="partion">

          {/*------------- partition of profile section ----------- */}

          <Box
            width={{ base: "90%", md: "40%", lg: "30%" }}>
      
            <Box       
              width="90%"
              m="auto"
              mt="10px"
              alignContent={"center"}
            >
              <Wrap  m="auto" alignContent={"center"}
                justifyContent={"center"}
              >
                <WrapItem>
                  <Avatar className="image"
                    
                    size={{ base: "2xl", md: "2xl", lg: "2xl" }}
                    name={data?.name}
                  />
                </WrapItem>
              </Wrap>
            </Box>
            {/* --------------------- */}
            <Box
              width={{ base: "90%", md: "90%", lg: "80%" }}
              margin={"auto"}
              mt="20px"   justifyContent={"center"}
            >
              <Box className="wish">
                <Text textAlign={"start"} fontWeight="600">
                  {data?.name}
                </Text>
                <Text textAlign={"start"}> 👑Official Account🖤 </Text>
                <Text textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                <Text textAlign={"start"}> ⚡My Life My Rules💪</Text>
                <Text textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                <Text textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
              </Box>
            </Box>

           
          </Box>

          {/* ------------------- profile ------------------ */}

          <Box
            width={{ base: "90%", md: "80%", lg: "100%" }}>
           
            <Box
              className="Edit"
              display={"flex"}  justifyContent="space-evenly"
              width={{ base: "100%", md: "100%", lg: "100%" }}
              margin={"auto"}  mt="20px"
              gap="10px"    >
              <Box className="username" margin="auto">
                <Text className="textname">
                {data?.name}
                </Text>
              </Box>

              <Box
                display={"flex"}
                justifyContent="space-between"
                className="bothbutton"
                gap="10px"
              >
                <Box margin="auto">
                  <Button className="editbutton" colorScheme="blue" color="#fff" > Follow </Button>
                </Box>

                <Box margin="auto">
                  <Button className="editbutton">Message</Button>
                </Box>
              </Box>

              <Box className="setting" margin="auto">
                <Text
                  fontSize={"25px"}
                  margin="auto"
                  justifyContent={"center"}
                >
                  <HiUserAdd />
                </Text>
              </Box>


               <Box className="setting" margin="auto">
               <Text
                  fontSize={"25px"}
                  margin="auto"
                  justifyContent={"center"}
                >
                  <DotuserModal />
                </Text>
               </Box>


            </Box>

            {/* ---------------------------------- */}
            <Box
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
              mt="20px"
              display={"flex"}
              justifyContent="space-evenly"
              gap={10}
            >
              <Box className="follwer" margin="auto" fontSize={"1rem"}>
                <Text>
                  <span style={{ fontWeight: "600" }}> 25 </span> Post{" "}
                </Text>
              </Box>

              <Box className="follwer" margin="auto" fontSize={"1rem"}>
                <Text>
                  <span style={{ fontWeight: "600" }}>
                    865
                  </span> Followers
                </Text>
              </Box>

              <Box className="follwer" margin="auto" fontSize={"1rem"}>
                <Text>
                  
                  <span style={{ fontWeight: "600" }}>
                    
                    50
                  </span> Following
                </Text>
              </Box>
            </Box>

            <Box
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
              mt="10px"
            >
              <Box className="wishme">
                <Text textAlign={"start"} fontWeight="600">
                {data?.name}
                </Text>
                <Text textAlign={"start"}> 👑Official Account🖤 </Text>
                <Text textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                <Text textAlign={"start"}> ⚡My Life My Rules💪</Text>
                <Text textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                <Text textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
              </Box>
            </Box>
          </Box>

        </Box>
        
    

    
        
        
           
      {/* --------------------- Data upar part ---------------- */}


  

        <Divider orientation="horizontal" />

        <Box 
          mt="20px">
             <Stories/>
        </Box>

        <Divider orientation="horizontal" />

        <Box mt="20px">
          <Collection  />
        </Box>

      </Box>

    
    </Box>
  


  </>
  )
}
