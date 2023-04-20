import React, { useEffect } from "react";
import { Box, Flex, Image, Input, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'
import { TfiHeart } from "react-icons/tfi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetMypost } from "../../Redux/AppReducer/action";
import "./my.css"
import { UserDeleteModal } from "./UserDeleteModal";
const MypostFull = () => {

    const dispatch = useDispatch()
    const  userdetail = useSelector((store) => store.AppReducer.Mypost)
 
       useEffect(() =>{
         dispatch(GetMypost)
       },[])
  
  



  return (
    <>
      <Box
     
        padding={4}
        marginTop={"10px"}
        m="auto"
        width={{ base: "60%", md: "70%", lg: "50%" }}
      >
        {userdetail.length > 0 &&
          userdetail.map((el) => {
            return (
              <Box 
            
             borderBottom={"1px solid gray"}
               m="auto" key={el._id} p={4} gap="10px">
                <Flex display={"flex"} justifyContent="space-between">
                  <Flex
                
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
                
                  >
                    <Text fontSize={"30px"}>
                    
                      <UserDeleteModal  />
                    </Text>
                  </Flex>
                </Flex>


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
                  
                    boxSize={{base:'200px',md:"300px",lg:"400px"}}
                      m={"auto"}
                      justifyContent={"center"}
                      alignItems="center"
                    />
                  </Box>
                </Flex>

                {/* ------------- bottom line save ------------------ */}
               
                <Flex
                //   border={"1px solid black"}
                  // p={2}
                  margin={"auto"}
                  mt="10px"
                  width="80%"
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Flex>
                    <Box
                     fontSize={{base:"15px", md:"20px", lg:"25px"}}
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

                  <Flex  fontSize={{base:"15px", md:"20px", lg:"25px"}} >
                    <FaRegBookmark />
                  </Flex>
                </Flex>

             
                <Box
                  margin={"auto"}
                  width={{ base: "80%", md: "80%", lg: "80%" }}
                  mt="10px"
                  gap={10}
                >
                  <Text textAlign={"left"} m="2px"  fontSize={{base:"10px", md:"15px", lg:"20px"}}>
                
                    Liked by
                    <span  className="span"  fontSize={{base:"10px", md:"15px", lg:"20px"}}>
                   
                      Aadil_khan 
                    </span>

                    and
                    <span  className="span"  fontSize={{base:"10px", md:"15px", lg:"20px"}} >
                      
                      110 others
                    </span>
                  </Text>

                  <Text textAlign={"left"}   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
                    
                    <span className="span"   fontSize={{base:"10px", md:"15px", lg:"20px"}} style={{ fontWeight: "600" }}>
                      {el.postedby.name}
                    </span>
                    {el.description}
                  </Text>
                </Box>

           
                <Flex
                  // border={"1px solid black"}
               
                  margin={"auto"}
                  mt="10px"
                  width={{ base: "60%", md: "70%", lg: "80%" }}
                  display={"flex"}
                >
                  <Input  fontSize={{base:"10px", md:"15px", lg:"20px"}} placeholder="Add comment......." border={"none"} />
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
