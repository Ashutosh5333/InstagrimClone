import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TfiHeart } from "react-icons/tfi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import Ashu from "../../assets/Ashu.jpg";
import { DotModal } from "../modal/DotModal";

export const Product = () => {

    
  return (
    <>
      <br />

      <Box
        border={"1px solid red"}
        padding={4}
        marginTop={"10px"}
        m="auto"
        width={{ base: "100%", md: "80%", lg: "90%" }}
      >
        <Box border={"1px solid black"} p={4} gap="10px">

          <Flex display={"flex"} justifyContent="space-between">
            <Flex border={"1px solid green"}>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <Image />

              <Text p={4}> The viral gyan </Text>
            </Flex>

            {/* -------------- */}
            <Flex border={"1px solid green"}>
              <Text fontSize={"30px"}>
             
                <DotModal />
              </Text>
            </Flex>
          </Flex>

          {/* "Top " */}
          <br />

          <Flex border={"1px solid gray"} margin={"auto"} width="80%">
            <Box
              justifyContent={"center"}
              alignItems="center"
              margin={"auto"}
              height={"30%"}>
              <Image
                src={Ashu}
                alt="image"
                height="500px"
                m={"auto"}
                justifyContent={"center"}
                alignItems="center"
              />
            </Box>
          </Flex>

          <br />

          {/* ------------- bottom line save ------------------ */}

          <Flex
            border={"1px solid black"}
            p={4}
            margin={"auto"}
            width="80%"
            display={"flex"}
            justifyContent="space-between"
          >
            <Flex>
              <Box
                fontSize={"25px"}
                display={"flex"}
                justifyContent="space-between"
                gap="20px"
              >
                <TfiHeart />

                <FaRegComment />
                <FiNavigation />
              </Box>
            </Flex>

            {/* ---------------------- */}

            <Flex fontSize={"25px"}>
              <FaRegBookmark />
            </Flex>
          </Flex>

        </Box>

        {/* ======== */}
      </Box>
    </>
  );
};
