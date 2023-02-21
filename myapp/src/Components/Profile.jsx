import React from "react";
import { Avatar, Box, Button, Divider, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {MdOutlineSettings} from "react-icons/md"
import Stories from "./StoriesSlider/Stories";
import Collection from "./Collections/Collection";


const Profile = () => {
  return (
    <>
      <Box
        border="1px solid red"
        width={{ base: "90%", md: "80%", lg: "80%" }}
        margin="auto"
      >
        <Box
          border="1px solid black"
          p={4}
          display="flex"
          justifyContent={"space-between"}
        >
          <Box border="1px solid yellow"     width={{ base: "60%", md: "40%", lg: "30%" }} margin={"auto"}>
            
            <Wrap m="auto" justifyContent={"center"}>
              <WrapItem>
                <Avatar m="auto" ml="20px"
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/ryan-florence"
                />
              </WrapItem>
            </Wrap>
          </Box>

          <Box border="1px solid green" width={"70%"}>
             <Box  border="1px solid blue" display={"flex"} justifyContent="space-evenly" width={{ base: "60%", md: "90%", lg: "80%" }} margin={"auto"}> 
              
              <Box  border="1px solid blue"  margin="auto">
                  <Text> _Ashutoshlakshkara7985 </Text> 
               </Box>
              
              <Box  border="1px solid blue"  margin="auto"> 
               <Button> Edit Profile </Button>
               </Box>
              
              <Box  border="1px solid blue"  margin="auto"> 
               <Button>Ad Tools</Button>
               </Box>

              <Box  border="1px solid blue" margin="auto" > 
                <Text fontSize={"30px"}  
                textAlign="center" alignItems={"center"} 
                margin="auto" justifyContent={"center"}>
                 <MdOutlineSettings/>
                </Text>
               </Box>
             
             </Box>
               
               {/* ----------------------------- */}

               <br/>

             <Box border="1px solid red" width={{ base: "60%", md: "90%", lg: "80%" }} margin={"auto"}  display={"flex"} justifyContent="space-evenly"> 
             <Box  border="1px solid blue"  margin="auto">
                  <Text> 25  Post  </Text> 
               </Box>
              
              <Box  border="1px solid blue"  margin="auto"> 
               <Text> 170 Followers </Text>
               </Box>
              
              <Box  border="1px solid blue"  margin="auto"> 
               <Text>  498  Following </Text>
               </Box>


             
              </Box>
             

             <br/>
             <Box  border="1px solid black" width={{ base: "60%", md: "90%", lg: "80%" }} margin={"auto"}>

              <Box  border="1px solid yellow">
                 <Text textAlign={"start"}> 👑Official Account🖤 </Text>
                 <Text textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                 <Text textAlign={"start"}> ⚡My Life My Rules💪</Text>
                 <Text textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                 <Text textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
              </Box>

            
           
              </Box>
           
          </Box>
        </Box>

        {/* ---------------- */}

        <Box border="1px solid green"> 

         <Stories/>

        </Box>

       <Divider orientation='horizontal' />

        {/* ----------------------- */}

        <Box border="1px solid yellow"> 
        
         <Collection/>
        
         </Box>
      </Box>
    </>
  );
};

export default Profile;
