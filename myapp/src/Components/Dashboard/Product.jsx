import {  Box,  Flex,  Image,  Input,  Text,Wrap,  WrapItem,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TfiHeart } from "react-icons/tfi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { DotModal } from "../modal/DotModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData,  } from "../../Redux/AppReducer/action";
import { Addcomment, likepost, Unlikepost } from "./ProductFetch";
import { Link } from "react-router-dom";
import Loading from "../../Loading";

import { HomeSkelton } from "./HomeSkelton";
import Stories from "../StoriesSlider/Stories";

export const Product = () => {
  const [isLoading, SetLoading] = useState(false);
  const dispatch = useDispatch();
  const userdetail = useSelector((store) => store.AppReducer.productData);

      
      

  useEffect(() => {
    SetLoading(true);
    dispatch(getData)
      .then((res) => {
        SetLoading(false);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <>
      <Box>
        
       <Stories/>

      </Box>


      <br />
      {isLoading ? (
        <HomeSkelton />
      ) : (
        <Box
       
          padding={4}
          marginTop={"10px"}
          m="auto"
          width={{ base: "100%", md: "80%", lg: "90%" }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            userdetail.length > 0 &&
            userdetail.map((el) => {
              return (
                <Box
                  //    border={"1px solid black"}
                  borderBottom={"1px solid gray"}
                  m="auto"
                  key={el._id}
                  p={4}
                  gap="10px"
                >
                  <Flex display={"flex"} justifyContent="space-between">
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
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                        width={{ base: "80%", md: "70%", lg: "90%" }}
                      >
                        {el.postedby.name}
                      </Text>
                    </Flex>

                    {/* ------ upper section ------- */}

                    <Flex>
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
                      height={"30%"}
                      width={{ base: "70%", md: "70%", lg: "90%" }}
                    >
                      <Link to={`/userprofile/${el.userId}`}>
                        <Image
                          src={el.pic}
                          alt="image"
                          boxSize={{ base: "250px", md: "350px", lg: "400px" }}
                          m={"auto"}
                          justifyContent={"center"}
                          alignItems="center"
                        />
                      </Link>
                    </Box>
                  </Flex>

                  {/* ------------- bottom line save ------------------ */}

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
                      <Text>{el.likes.length} likes</Text>
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
                      />
                    </form>
                  </Flex>
                </Box>
              );
            })
          )}

          {/* ---------------------- whole div ---------------------  */}
        </Box>
      )}
    </>
  );
};
