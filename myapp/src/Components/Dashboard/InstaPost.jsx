import { Avatar, Box, Flex, Image, Input, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { DotModal } from "../modal/DotModal";
import { TfiHeart } from "react-icons/tfi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData, } from "../../Redux/AppReducer/action";
import { Addcomment } from "./ProductFetch";
import Stories from "../StoriesSlider/Stories";
import { HomeSkelton } from "./HomeSkelton";
import { Link } from "react-router-dom";

const InstaPost = () => {
  const [isLoading, SetLoading] = useState(false);
  const [like, SetLikes] = useState([])
  const dispatch = useDispatch();
  const Instapost = useSelector((store) => store.AppReducer.productData);
  // console.log(
  //   Instapost, "instapost*******"
  // )
  const token = JSON.parse(localStorage.getItem("token"));
  const data = JSON.parse(localStorage.getItem("user"))

  //  console.log( "likes" ,like)   

  useEffect(() => {
    SetLoading(true);
    dispatch(getData)
      .then((res) => {
        SetLoading(false);

      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const likepost = (_id) => {
    fetch(`https://insta-293s.onrender.com/likes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dat) => {

        dispatch(getData)

      })
      .catch((err) => {
        console.log(err);
      });


  };

  const Unlikepost = (_id) => {
    fetch(`https://insta-293s.onrender.com/unlikes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dat) => {

        dispatch(getData)

      })
      .catch((err) => {
        console.log(err);
      });


  };

  const Addcomment = (text, _id) => {
    fetch(`https://insta-293s.onrender.com/comment/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        _id,
        text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getData)
      })
      .catch((err) => {
        console.log(err)
      });

  };

  return (
    <>
      <Box>

        <Stories />

      </Box>
      {
        isLoading ? <HomeSkelton />
          :
          Instapost.length > 0 && Instapost.map((el) => {
            return <Box key={el._id} >
              <Card maxW={{ base: "4xl", md: "4xl", lg: "2xl" }} m="auto" mt="10">
                <CardBody>
                  <Flex display={"flex"} justifyContent="space-between" mb="10">

                    <Link to={`/userprofile/${el.userId}`}>
                      <Flex>
                        <Wrap>
                          <WrapItem>
                            <Avatar
                              size={{ base: "xs", md: "sm" }}
                              mr={8}

                              name={el?.postedby?.name}
                              src={el?.postedby?.image}
                            />
                          </WrapItem>
                        </Wrap>
                        <Text
                          alignItems="center"
                          m="auto"
                          fontWeight={600}
                          fontSize={{ base: ".6rem", md: ".6rem", lg: "1rem" }}
                        >
                          {el?.postedby?.name}
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
                    </Link>

                    <Flex>
                      <Text fontSize={"30px"}>
                        <DotModal />
                      </Text>
                    </Flex>
                  </Flex>


                  <Box >
                    <Image
                      objectFit="cover"

                      width="100%"
                      height={"100%"}
                      // boxSize={{ base: "600px", md: "600px", lg: "600px" }}
                      src={el.pic}
                      alt="PostImage"
                      borderRadius="lg" m={"auto"}
                    //  width="500px"
                    // height={"500px"}

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


                        {el.likes.includes(data?._id) ? (
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
                        {el?.postedby?.name}

                      </span>
                      {el.description}
                    </Text>
                    <Text textAlign={"left"}
                      noOfLines={2} gap="5"
                      fontSize={{ base: "10px", md: "15px", lg: "18px" }}>
                      <span className="span"
                        fontSize={{ base: "10px", md: "15px", lg: "18px" }}
                        style={{ fontWeight: "600" }}  >
                        {el.comments[0]?.postedby.name}
                      </span>
                      {el.comments[0]?.text}
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
  )
}

export default InstaPost