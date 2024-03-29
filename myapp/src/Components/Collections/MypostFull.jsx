import {  Avatar,  Box,   Flex,    Image,   Input,     Text,  Wrap,  WrapItem} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card,  CardBody } from "@chakra-ui/react";
import { DotModal } from "../modal/DotModal";
import { TfiHeart } from "react-icons/tfi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetMypost  } from "../../Redux/AppReducer/action";
import { HomeSkelton } from './../Dashboard/HomeSkelton';
import { Addcomment, Unlikepost, likepost } from "../Dashboard/ProductFetch";
import { UserDeleteModal } from "./UserDeleteModal";

const MypostFull = () => {
    const dispatch = useDispatch()
    const [isLoading, SetLoading] = useState(false);
    const  userdetail = useSelector((store) => store.AppReducer.Mypost)
 
       useEffect(() =>{
         dispatch(GetMypost)
       },[])
  
  



  return (
    <>
       {
        isLoading ? <HomeSkelton/>
        :
        userdetail.length >0 && userdetail.map((el) => {
         return  <Box key={el._id} >
    <Card  maxW={{base:"4xl", md:"4xl",lg:"2xl"}}  m="auto" >
          <CardBody>
          <Flex display={"flex"} justifyContent="space-between"  mb="10">
                    <Flex>
                      <Wrap>
                        <WrapItem>
                          <Avatar
                            size={{ base: "xs", md: "sm" }}
                            mr={8}
                            name={el.postedby.name}
                            src={el.image}                            
                          />
                        </WrapItem>
                      </Wrap>
                      <Text
                        alignItems="center"
                        m="auto"
                        fontWeight={600}
                        fontSize={{base: ".6rem", md: ".6rem", lg: "1rem" }}
                      >
                        {el.postedby.name}
                      </Text>
                      <Text
                        alignItems="center"
                        m="auto"
                        fontWeight={600}
                        fontSize={{ base: ".6rem", md: ".6rem", lg: ".8rem" }}
                       ml="10"
                      >
                        {new Date(el.createdAt).toDateString()} 
                        
                      </Text>
                    </Flex>

                    <Flex>
                      <Text fontSize={"30px"}>
                        <UserDeleteModal _id={el._id} />
                      </Text>
                    </Flex>
                  </Flex>

            <Box >
            <Image
              objectFit="cover"
          
              width="100%"
              boxSize={{ base: "600px", md: "600px", lg: "600px" }}
                          m={"auto"}
                // src="https://images.unsplash.com/photo-1681097228666-f65d459530f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                 src={el.pic}
                        alt="PostImage"
              borderRadius="lg"
              margin={"auto"} 
            />
            
            </Box>

       {/* ------------------------- */}

       <Flex
                    margin={"auto"}
                    mt="10px"
                    width="80%"
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Flex>
                      <Box
                        fontSize={{ base: "15px", md: "18px", lg: "25px" }}
                        display={"flex"}
                        justifyContent="space-between"
                        gap="18px"
                      >
                        {el.likes.length > 0 ? (
                          <FaHeart
                            color={"red"}
                            onClick={() => Unlikepost(el._id)}
                          />
                        ) : (
                          <TfiHeart onClick={() => likepost(el._id)} />
                        )}
                        <FaRegComment />
                        <FiNavigation />
                      </Box>
                    </Flex>
                    {/* ---------------------- */}

                    <Flex fontSize={{ base: "15px", md: "18px", lg: "25px" }}>
                      <FaRegBookmark />
                    </Flex>
                  </Flex>

                  <Box
                    margin={"auto"}
                    width={{ base: "80%", md: "80%", lg: "80%" }}
                    mt="10px"
                    gap={10}
                  >
                    <Text
                      textAlign={"left"}
                      m="2px"
                      fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                    >
                      <Text>
                      {el.likes.length} 
                       likes</Text>
                      Liked by
                      <span
                        className="span"
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                      >
                        Aadil_khan
                      </span>
                      and
                      <span
                        className="span"
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                      >
                        110 others
                      </span>
                    </Text>

                    <Text
                      textAlign={"left"}
                      fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                    >
                      <span
                        className="span"
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                        style={{ fontWeight: "600" }}
                      >
                        {el.postedby.name}
                    
                      </span>
                      {el.description}
                    </Text>
                  </Box>

                  <Flex
                    margin={"auto"}
                    mt="10px"
                    width={{ base: "60%", md: "70%", lg: "80%" }}
                    display={"flex"}
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        Addcomment(e.target[0].value, el._id);
                      }}
                    >
                      <Input
                        width={{ base: "100%", md: "100%", lg: "100%" }}
                        placeholder="Add a comment......."
                        border={"none"}
                        variant={"unstyled"}
                      />
                    </form>
                  </Flex>
                  
           

          </CardBody>
      

        </Card>


    </Box>
    
          })
    }

    
    </>
  );
};

export default MypostFull;
