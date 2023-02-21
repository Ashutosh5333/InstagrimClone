import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Stories = () => {
  return (
    <>
      <Box
        border="1px solid black"
        display="flex"
        justifyContent={"space-around"} m="10px"
        p="10px"
      >

        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>

        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />{" "}
            </WrapItem>
          </Wrap>
        </Box>
       
       {/* ---------------------------------------- */}


      </Box>
    </>
  );
};

export default Stories;
