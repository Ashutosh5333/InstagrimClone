import React from "react";
import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";

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
          <Box border="1px solid yellow" width={"20%"} margin={"auto"}>
            {" "}
            profile section
            <Wrap m="auto">
              <WrapItem>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />{" "}
              </WrapItem>
            </Wrap>
          </Box>

          <Box border="1px solid green" width={"70%"}>
            {" "}
            profile section{" "}
          </Box>
        </Box>

        {/* ---------------- */}

        <Box border="1px solid green"> Status theme slider </Box>

        {/* ----------------------- */}

        <Box border="1px solid yellow"> Collections </Box>
      </Box>
    </>
  );
};

export default Profile;
