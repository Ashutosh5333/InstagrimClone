import { Avatar, Box, Flex ,Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUserData } from "../Redux/AppReducer/action";


export const Suggestions = () => {
  const [data, SetData] = useState([]);
  const dispatch = useDispatch();
  const userdata = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(AllUserData)
      .then((res) => {
        SetData(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box 
       display={{ sm: "none", md: "none", lg: "block" }}
      width="90%" margin={"auto"}>
        {/* --------------------------------------- */}

        <Box mt="4" display="flex" justifyContent={"space-between"}>
          {/* --------------------------- */}

          <Box
            display={"flex"}
            justifyContent="center"
            alignContent={"center"}
            textAlign="center"
          >
            <Wrap p="2">
              <WrapItem>
                <Avatar size="lg" name={userdata?.name} />{" "}
              </WrapItem>
            </Wrap>

            <Box margin="auto" textAlign={"start"}>
              <Text
                alignItems={"center"}
                fontWeight="600"
                textAlign="center"
                margin={"auto"}
              >
                {" "}
                {userdata?.email}{" "}
              </Text>
              <Text fontSize="15" color={"gray"}>
                {" "}
                {userdata?.name}{" "}
              </Text>
            </Box>
          </Box>

        
        </Box>

      

        <Box display="flex" mt={6} justifyContent={"space-between"}>
          <Box>
            <Text color={"gray"} fontWeight="400" fontSize={".9em"}>
              {" "}
              Suggestions for you{" "}
            </Text>{" "}
          </Box>
        </Box>



{data.length > 0 &&
  data.map((el) => {
    return (
      <Flex key={el._id} justifyContent="space-between" width="100%" align="center">
        <Flex align="center">
          <Wrap p="2">
            <WrapItem>
              <Avatar size="md" name={el.name} src={el.image} />
            </WrapItem>
          </Wrap>
          <Box textAlign="start" marginLeft="2">
            <Text
              fontWeight="500"
              fontSize="0.8rem"
            >
              {el.name}
            </Text>
            <Text color="gray" fontSize="0.7rem">
              New on Instagram
            </Text>
          </Box>
        </Flex>

        <Box textAlign={"end"} p={2} color="#27c4f5">
          Follow
        </Box>
      </Flex>
    );
  })}

    
      </Box>
    </>
  );
};
