import React, { useEffect } from "react";
import {  Avatar,  Box,  Button,  Divider,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import Stories from "./StoriesSlider/Stories";
import Collection from "./Collections/Collection";
import "./style/prof.css";
import Side from "./../Pages/Side";
import { useDispatch, useSelector } from "react-redux";
import { GetMypost } from "../Redux/AppReducer/action";

const Profile = () => {
  const dispatch = useDispatch()
  const  userdetail = useSelector((store) => store.AppReducer.Mypost)
   console.log("Mypost", userdetail)
    // console.log(userdetail.postedby.name)
     const data = userdetail.postedby
      // console.log("data", data)

     useEffect(() =>{
       dispatch(GetMypost)
     },[])


  return (
    <>
      <Box
        // border="1px solid red"
        className="container"
        height={"100vh"}
        display="flex"
        gap="10px"
        justifyContent={"space-between"}
        width={{ base: "90%", md: "80%", lg: "100%" }}
        m="auto"
      >
        <Box
          // border="1px solid gray"
          width="15%"
          className="side"
        >
          <Side />
        </Box>

        {/* -------- Side bar -------- */}

        <Box
          // border="1px solid black"
          width="85%"
          margin={"auto"}
        >
         
         {
             userdetail.length> 0 && userdetail.map((el) =>{
              return <Box key={el._id}
            // border="1px solid green"
            display="flex"
            justifyContent={"space-between"}
            gap="10px"
            className="partion"
          >
            {/*------------- partition of profile section ----------- */}

            <Box
              // border="1px solid blue"
              width={{ base: "90%", md: "40%", lg: "30%" }}
            >
              {/* --------------------- Image section -------------------  */}

              <Box
                // border="1px solid red"
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
                    <Avatar
                      className="image"
                      // m="auto"
                      ml=".6em"
                      size={{ base: "xl", md: "xl", lg: "2xl" }}
                      name={el.postedby.name}
                      src={el.image}
                    />
                  </WrapItem>
                </Wrap>
              </Box>
              {/* --------------------- */}
              <Box
                // border="1px solid black"
                width={{ base: "90%", md: "90%", lg: "80%" }}
                margin={"auto"}
                mt="20px"
                justifyContent={"center"}
              >
                <Box className="wish">
                  <Text textAlign={"start"} fontWeight="600">
                    {el.postedby.name}
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
              // border="1px solid red"
              width={{ base: "90%", md: "80%", lg: "100%" }}
            >
             
              <Box
                className="Edit"
                // border="1px solid red"
                display={"flex"}
                justifyContent="space-evenly"
                width={{ base: "100%", md: "100%", lg: "100%" }}
                margin={"auto"}
                mt="20px"
                gap="10px"
              >
                <Box className="username" margin="auto">
                  <Text className="textname">_Ashutoshlakshkara7985</Text>
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
                // border="1px solid black"
                width={{ base: "60%", md: "90%", lg: "80%" }}
                margin={"auto"}
                mt="10px"
              >
                <Box className="wishme">
                  <Text textAlign={"start"} fontWeight="600">
                  {el.postedby.name}
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
             })

         }




          {/* ----------------- */}

          <Divider orientation="horizontal" />

          <Box
            // border="1px solid brown"
            mt="20px"
          >
            <Stories />
          </Box>

          <Divider orientation="horizontal" />

          <Box
            // border="1px solid darkpink"
            mt="20px"
          >
            <Collection />
          </Box>
        </Box>

        {/* --------- container whole -------- */}
      </Box>
    </>
  );
};

export default Profile;
