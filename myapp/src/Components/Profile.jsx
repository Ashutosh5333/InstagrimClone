import React, { useEffect, useState } from "react";
import {  Avatar,  Box,  Button,  Divider,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import Stories from "./StoriesSlider/Stories";
import Collection from "./Collections/Collection";
import "./style/prof.css";
import Side from "./../Pages/Side";

import Changeprofile from "./Changeprofile";


const Profile = () => {
 
      const user = JSON.parse(localStorage.getItem("user"))
       
  


  return (
    <>
      <Box
        className="container"
        height={"100vh"}
        display="flex"
        gap="10px"
        justifyContent={"space-between"}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        m="auto"
      >
        <Box
          width="15%"
          className="side"
        >
          <Side />
        </Box>

       
        <Box
          width="85%" margin={"auto"}
        >
         
           <Box key={user?._id}
        
            display="flex"
            justifyContent={"space-between"}
            gap="10px"
            className="partion"
          >
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
                <Wrap
                  m="auto"
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <WrapItem>
                   <Changeprofile 
                      name={user?.name}
                      src={user?.image}
                   />
                    {/* <Avatar
                      className="image"
                      // m="auto"
                      ml=".6em"
                      size={{ base: "xl", md: "xl", lg: "2xl" }}
                      name={user?.name}
                      src={user?.image}
                    /> */}
                  </WrapItem>
                </Wrap>
              </Box>
              {/* --------------------- */}
              <Box width={{ base: "90%", md: "90%", lg: "80%" }}
                margin={"auto"}
                mt="20px"
                justifyContent={"center"}
              >
                <Box className="wish">
                  <Text textAlign={"start"} fontWeight="600">
                    {user?.name}
                  </Text>
                  <Text textAlign={"start"}> 👑Official Account🖤 </Text>
                  <Text textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                  <Text textAlign={"start"}> ⚡My Life My Rules💪</Text>
                  <Text textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                  <Text textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
                </Box>
              </Box>

              {/* - */}
            </Box>

            {/* ------------------- profile ------------------ */}

            <Box
              
              width={{ base: "90%", md: "80%", lg: "100%" }}
            >
             
              <Box
                className="Edit"
                display={"flex"}
                justifyContent="space-evenly"
                width={{ base: "100%", md: "100%", lg: "100%" }}
                margin={"auto"}
                mt="20px"
                gap="10px"
              >
                <Box className="username" margin="auto">
                  <Text className="textname"> {user?.name}</Text>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  className="bothbutton"
                  gap="10px"
                >
                  <Box margin="auto">
                    <Button className="editbutton"> Edit Profile </Button>
                  </Box>

                  <Box margin="auto">
                    <Button className="editbutton">Ad Tools</Button>
                  </Box>
                </Box>

                <Box className="setting" margin="auto">
                  <Text
                    fontSize={"25px"}
                    margin="auto"
                    justifyContent={"center"}
                  >
                    <MdOutlineSettings />
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
                    {" "}
                    <span style={{ fontWeight: "600" }}> 25 </span> Post{" "}
                  </Text>
                </Box>

                <Box className="follwer" margin="auto" fontSize={"1rem"}>
                  <Text>
                    {" "}
                    <span style={{ fontWeight: "600" }}>
                      {" "}
                      865{" "}
                    </span> Followers{" "}
                  </Text>
                </Box>

                <Box className="follwer" margin="auto" fontSize={"1rem"}>
                  <Text>
                    {" "}
                    <span style={{ fontWeight: "600" }}>
                      {" "}
                      50{" "}
                    </span> Following{" "}
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
                  {user?.name}
                  </Text>
                  <Text textAlign={"start"}> 👑Official Account🖤 </Text>
                  <Text textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                  <Text textAlign={"start"}> ⚡My Life My Rules💪</Text>
                  <Text textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                  <Text textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
                </Box>
              </Box>
            </Box>

            {/* --------------------- Data upar part ---------------- */}
          </Box>
             
          




          {/* ----------------- */}

          <Divider orientation="horizontal" />

          <Box  mt="20px" >
            <Stories />
          </Box>

          <Divider orientation="horizontal" />

          <Box mt="20px">
            <Collection />
          </Box>
          
        </Box>

        {/* --------- container whole -------- */}

      </Box>

  
     

    </>
  );
};

export default Profile;
