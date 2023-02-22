import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import Stories from "./StoriesSlider/Stories";
import Collection from "./Collections/Collection";
import "./style/Profile.css";

const Profile = () => {
  return (
    <>
      <Box
        border="1px solid red"
        width={{ base: "100%", md: "80%", lg: "80%" }}
        margin="auto"
      >
        <Box
          border="1px solid black"
          p={4}
          display="flex"
          justifyContent={"space-between"}
        >
          <Box
            className="profileimage"
            width={{ base: "60%", md: "40%", lg: "30%" }}
            margin={"auto"}
          >
            <Wrap m="auto" justifyContent={"center"}>
              <WrapItem>
                <Avatar
                  className="image"
                  m="auto"
                  ml="20px"
                  // size="2xl"
                  size={{ base: "xl", md: "xl", lg: "2xl" }}
                  name="Segun Adebayo"
                  src="https://bit.ly/ryan-florence"
                />
              </WrapItem>
            </Wrap>

            <Box
              border="1px solid black"
              width={{ base: "70%", md: "80%", lg: "80%" }}
              margin={"auto"}
            >
              <Box className="wish">
                <Text className="desc" textAlign={"start"}> 👑Official Account🖤 </Text>
                <Text  className="desc" textAlign={"start"}> 💟Wish Me On 11 January🎂 </Text>
                <Text className="desc" textAlign={"start"}> ⚡My Life My Rules💪</Text>
                <Text className="desc"  textAlign={"start"}> 🎶Music ka Diwana💥 </Text>
                <Text  className="desc" textAlign={"start"}>🕉️Mahadev Bhakt🕉️</Text>
              </Box>
            </Box>
          </Box>

          <Box border="1px solid green" width={"70%"}>
            <Box
              className="Edit"
              border="1px solid blue"
              display={"flex"}
              justifyContent="space-evenly"
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
            >
              <Box className="username" border="1px solid blue" margin="auto">
                <Text className="textname" fontWeight="600">
                  {" "}
                  _Ashutoshlakshkara7985{" "}
                </Text>
              </Box>

              <Box
                className="Editprofile"
                display={"flex"}
                justifyContent="space-evenly"
                gap="10px"
              >
                <Box border="1px solid blue" margin="auto">
                  <Button className="button"> Edit Profile </Button>
                </Box>

                <Box border="1px solid blue" margin="auto">
                  <Button className="button">Ad Tools</Button>
                </Box>
              </Box>

              <Box className="setting" border="1px solid blue" margin="auto">
                <Text
                  fontSize={"30px"}
                  textAlign="center"
                  alignItems={"center"}
                  margin="auto"
                  justifyContent={"center"}
                >
                  <MdOutlineSettings />
                </Text>
              </Box>
            </Box>

            {/* ----------------------------- */}

            <br />

            <Box
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
              display={"flex"}
              justifyContent="space-evenly"
            >
              <Box border="1px solid blue" className="follwer" margin="auto">
                <Text> 25 Post </Text>
              </Box>

              <Box border="1px solid blue" className="follwer" margin="auto">
                <Text> 170 Followers </Text>
              </Box>

              <Box border="1px solid blue" className="follwer" margin="auto">
                <Text> 498 Following </Text>
              </Box>
            </Box>

            <br />
            <Box
              // border="1px solid black"
              width={{ base: "60%", md: "90%", lg: "80%" }}
              margin={"auto"}
            >
              <Box className="wishme">
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
          {/* <Stories /> */}
        </Box>

        <Divider orientation="horizontal" />

        {/* ----------------------- */}

        <Box border="1px solid yellow">
          {/* <Collection /> */}
        </Box>
      </Box>
    </>
  );
};

export default Profile;
