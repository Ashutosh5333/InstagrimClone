import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = ({ queryHandler, Suggestions }) => {
  const [inputtext, SetinputText] = useState("");

  const handleInputTextChange = (e) => {
    SetinputText(e.target.value);
  };

  useEffect(() => {
    queryHandler(inputtext);
  }, [inputtext, queryHandler]);

  return (
    <>
      <Box
        width={{ base: "70%", md: "60%", lg: "40%" }}
        height="50px"
        marginRight={"20px"}
      >
        <Flex border={"1px solid black"} padding="5px" alignItems="center">
          <Text ml="10px">
            <BsSearch />
          </Text>
          <Input
            value={inputtext}
            onChange={handleInputTextChange}
            outline="none"
            borderRadius="0px"
            placeholder="SEARCH"
            variant="unstyled"
            padding="5px"
          />
        </Flex>

        <Box
          border={"1px solid black"}
          bg="white"
          zIndex={2}
          textAlign="center"
          rounded="lg"
          color="black.800"
          boxShadow="lg"
        >
          {Suggestions.length > 0 &&
            Suggestions.map((item, index) => {
              return (
                <Box ml={"30px"} textAlign={"left"} key={index}>
                  {item}
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default Searchbar;
