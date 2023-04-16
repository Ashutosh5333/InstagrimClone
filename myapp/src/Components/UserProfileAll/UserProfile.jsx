import React, { useEffect, useState } from "react";
import {  Avatar,  Box,  Button,  Divider,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import { HiUserAdd } from "react-icons/hi";
import "./prof.css";
import Side from './../../Pages/Side';

import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SingleUserprofile } from "../../Redux/AppReducer/action";
import Stories from "./Stories/Stories";
import Collection from "./Collections/Collection";
import DotuserModal from "./DotuserModal";
import Loading from "../../Loading";
const token = JSON.parse(localStorage.getItem("token"))

export const UserProfile = () => {
  const [isLoading, SetLoading] = useState(false);
  const [Userprofile,SetUserprofile] = useState([])
     const dispatch = useDispatch()
    const {userId} = useParams()

  
   useEffect(() =>{
     SetLoading(true)
      dispatch(SingleUserprofile(userId))
       .then((res) =>{
         SetUserprofile(res.payload)
         SetLoading(false)
       }).catch((err) =>{
        console.log(err)
       })
   },[userId])
   
  const data = Userprofile.user
      
    console.log(data)

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
      border="1px solid red"
      className="container"
      display="flex"
      gap="10px"
      justifyContent={"space-between"}
      width={{ base: "90%", md: "80%", lg: "100%" }}
      m="auto"
    >
      <Box
      width="15%"  className="side">
        <Side />
      </Box>


      <Box
        width="85%"  margin={"auto"}>
       
           <Box 
          border="1px solid green"
          display="flex"  justifyContent={"space-between"}
          gap="10px"  className="partion">

          {/*------------- partition of profile section ----------- */}

          <Box
         
            width={{ base: "90%", md: "40%", lg: "30%" }}
          >
            {/* --------------------- Image section -------------------  */}

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
                       ml=".6em"
                    size={{ base: "xl", md: "xl", lg: "2xl" }}
                    // name={el.name}
                  />
                </WrapItem>
              </Wrap>
            </Box>
            {/* --------------------- */}
            <Box
              // border="1px solid black"
              width={{ base: "90%", md: "90%", lg: "80%" }}
              margin={"auto"}
              mt="20px"   justifyContent={"center"}
            >
              <Box className="wish">
                <Text textAlign={"start"} fontWeight="600">
                  {/* {el.name} */}
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
            // border="1px solid red"
            width={{ base: "90%", md: "80%", lg: "100%" }}
          >
           
            <Box
              className="Edit"
              // border="1px solid red"
              display={"flex"}  justifyContent="space-evenly"
              width={{ base: "100%", md: "100%", lg: "100%" }}
              margin={"auto"}  mt="20px"
              gap="10px"    >
              <Box className="username" margin="auto">
                <Text className="textname">
                {/* {el.name} */}
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
              // border="1px solid black"
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
              mt="10px"
            >
              <Box className="wishme">
                <Text textAlign={"start"} fontWeight="600">
                {/* {el.name} */}
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
          // border="1px solid brown" 
          mt="20px">
             <Stories/>
        </Box>

        <Divider orientation="horizontal" />

        <Box mt="20px">
          <Collection/>
        </Box>

      </Box>

    
    </Box>
  


  </>
  )
}
