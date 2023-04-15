import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { FaRegHeart } from "react-icons/fa";

import { GetUserData } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [Suggestions, Setsuggetsion] = useState([]);

  const dispatch = useDispatch();
  const Data = useSelector((store) => store.AppReducer.UserData);
  //  console.log(Data)

  useEffect(() => {
    dispatch(GetUserData);
  }, []);

  const queryHandler = (val) => {
    setQuery(val);
  };

  useEffect(() => {
    if (query === "") {
      Setsuggetsion([]);
    } else {
      let inputText = query.toLowerCase();
      let newSuggestion = Data.filter((item) => {
        return item.email.toLowerCase().indexOf(inputText) !== -1
          ? true
          : false;
      }).map((item) => item.email);
      Setsuggetsion(newSuggestion);
    }
  }, [query]);

  return (
    <Box w="100%" p={4} border="1px solid green" color="Black">
      <Flex
        h={38}
        m="auto"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex padding="5px" width={{ base: "40%", md: "23%", lg: "20%" }}>
          <h4
            style={{ fontSize: "25px", fontWeight: "500", fontStyle: "italic" }}
          >
            {" "}
            Instagram{" "}
          </h4>
        </Flex>

        <Searchbar queryHandler={queryHandler} Suggestions={Suggestions} />

        {/* ==================== */}

        <Flex mr={10} justifyContent={"right"}>
          <Text mt={10} color="black" alignItems={"center"} h="50">
            <FaRegHeart />
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
