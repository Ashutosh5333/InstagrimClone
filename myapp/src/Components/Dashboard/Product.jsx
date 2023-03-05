import {Box,  Flex,  Image,  Input,  Text,  Wrap,  WrapItem,} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { TfiHeart } from "react-icons/tfi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import Ashu from "../../assets/Ashu.jpg";
import { DotModal } from "../modal/DotModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData, getDeleteData } from "../../Redux/AppReducer/action";
import { Addcomment, likepost, Unlikepost } from "./ProductFetch";
import { Link } from "react-router-dom";

export const Product = () => {
  const dispatch = useDispatch();
  const [like, Setlike] = useState("");
  const [com,Setcom] = useState([])

  const userdetail = useSelector((store) => store.AppReducer.productData);
   console.log(userdetail)
  
  useEffect(() => {
    dispatch(getData);
  }, []);



  const handleDelete = (_id) => {
    dispatch(getDeleteData(_id)).then((res) => {
      console.log("dlete data");
    });
  };

 
  

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
        {userdetail.length > 0 &&
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
                      //  border={"1px solid red"}
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

                  <Flex
                  // border={"1px solid green"}
                  >
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
                    <Link to={`/userprofile/${el.userId}`} > 
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
                    
                      {
                        (el.likes.length>0) ?
                      
                      <FaHeart color={"red"} onClick={() => Unlikepost(el._id)} />
                     :
                      <TfiHeart onClick={() => likepost(el._id)} />

                      }

                        

                        
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
                 <form onSubmit={(e) =>{
                    e.preventDefault()
                     Addcomment(e.target[0].value,el._id)
                 }}>

            <Input  width={{ base: "100%", md: "100%", lg: "100%" }} 
            placeholder="Add a comment......." border={"none"} />
   
     </form>
                </Flex>
              </Box>
            );
          })}





                {/* ------------------- Static -------------  */}

        <Box border={"1px solid black"} p={4} gap="10px">
          <Flex display={"flex"} justifyContent="space-between">
            <Flex
            // border={"1px solid green"}
            >
              <Wrap>
                <WrapItem>
                  <Avatar
                    mr={8}
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <Image />

              <Text
                //  border={"1px solid red"}
                alignItems="center"
                m="auto"
                fontWeight={600}
                width={{ base: "80%", md: "60%", lg: "90%" }}
              >
                {" "}
                The viral gyan{" "}
              </Text>
            </Flex>

            {/* -------------- */}
            <Flex
      
            >
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
            >
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
                gap="18px"
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
                Ashutosh lakshakar
              </span>{" "}
              Be your own kind of beautiful{" "}
            </Text>
          </Box>

    
          <Flex
           
            margin={"auto"}
            mt="10px"
            width="80%"
            display={"flex"}
          >
        

            <Input placeholder="Add a comment......." border={"none"} />
          
          </Flex>
        </Box>

        {/* ---------------------- whole div ---------------------  */}
      </Box>
    </>
  );
};
