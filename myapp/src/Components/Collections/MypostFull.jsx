import React, { useEffect } from "react";

import { Box, Button, Flex, Image, Input, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'
import { AiOutlineEllipsis } from "react-icons/ai";
import { TfiHeart } from "react-icons/tfi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

import { DotModal } from "../modal/DotModal";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetMypost } from "../../Redux/AppReducer/action";
const MypostFull = () => {
    const dispatch = useDispatch()
    const  userdetail = useSelector((store) => store.AppReducer.Mypost)
     console.log("Mypost", userdetail)
  
       useEffect(() =>{
         dispatch(GetMypost)
       },[])
  
  



  return (
    <>
      <Box
        border={"1px solid red"}
        padding={4}
        marginTop={"10px"}
        m="auto"
        width={{ base: "60%", md: "70%", lg: "50%" }}
      >
        {userdetail.length > 0 &&
          userdetail.map((el) => {
            return (
              <Box border={"1px solid black"} key={el._id} p={4} gap="10px">
                <Flex display={"flex"} justifyContent="space-between">
                  <Flex
                  // border={"1px solid green"}
                  >
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size={{base:'xs',md:"sm"}}
                         mr={8} name={el.postedby.name} src={el.image} />
                      </WrapItem>
                    </Wrap>
                    <Image />

                    <Text
                      //  border={"1px solid red"}
                      alignItems="center"
                      m="auto"
                      fontWeight={600}
                      fontSize={{base:"10px", md:"15px", lg:"20px"}}
                      width={{ base: "80%", md: "70%", lg: "90%" }}
                    >
                      {el.postedby.name}
                    </Text>
                  </Flex>

                  {/* ----^^^^ upper section ^^^---------- */}

                  <Flex
                  // border={"1px solid green"}
                  >
                    <Text fontSize={"30px"}>
                    
                      <DotModal  />
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
                    height={"30%"}
                       width={{ base: "80%", md: "70%", lg: "90%" }}
                  >
                    <Image
                      src={el.pic}
                      alt="image"
                    //   height="500px"
                    boxSize={{base:'200px',md:"300px",lg:"400px"}}
                      m={"auto"}
                      justifyContent={"center"}
                      alignItems="center"
                    />
                  </Box>
                </Flex>

                {/* ------------- bottom line save ------------------ */}
                {/* <br /> */}
                <Flex
                  // border={"1px solid black"}
                  // p={2}
                  margin={"auto"}
                  mt="10px"
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

                {/* <br /> */}
                <Box
                  // border={"1px solid black"}
                  //  p={2}
                  margin={"auto"}
                  width="80%"
                  mt="10px"
                  gap={10}
                >
                  <Text textAlign={"left"}>
                    {" "}
                    Liked by{" "}
                    <span style={{ fontSize: "15px", fontWeight: "600" }}>
                      {" "}
                      Aadil_khan{" "}
                    </span>{" "}
                    and{" "}
                    <span style={{ fontSize: "15px", fontWeight: "600" }}>
                      {" "}
                      110 others{" "}
                    </span>{" "}
                  </Text>

                  <Text textAlign={"left"}>
                    {" "}
                    <span style={{ fontSize: "15px", fontWeight: "600" }}>
                      {el.postedby.name}
                    </span>{" "}
                    {el.description}
                  </Text>
                </Box>

                {/* <br /> */}
                <Flex
                  // border={"1px solid black"}
                  // p={2}
                  margin={"auto"}
                  mt="10px"
                  width="80%"
                  display={"flex"}
                >
                  <Input placeholder="Add a comment......." border={"none"} />
                </Flex>
              </Box>
            );
          })}

        {/* ---------------------- whole div ---------------------  */}
      </Box>
    </>
  );
};

export default MypostFull;
