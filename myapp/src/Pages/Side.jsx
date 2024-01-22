import { Box, Image, Tooltip, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { Text } from "@chakra-ui/react";
import SideSearchmodel from "../Components/modal/SideSearchmodel";
import { Link } from "react-router-dom";
import Create from "../Components/Create";
import Notifications from "../Components/Notifications";
import "./Style/Dash.css";
import Menubar from "../Components/Menubar";

const Side = () => {
  const [isLargeScreen] = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box p={1} border={"2px solid red"} 
      display="flex" gap={2} position="fixed">
        <Box gap="8px">
          <Box
            p={1}
            display={"flex"}
            gap="8px"
            justifyContent={"space-between"}
          >
            <Box fontSize={"2.2em"}>
              <Link to="/">
                <Image
                  width={"100px"}
                  src="https://github.com/mihir0699/Instagram-Clone/blob/master/src/images/insta_image.png?raw=true"
                />
              </Link>
            </Box>
            <Box> </Box>
          </Box>

          <Box
            borderRadius={"10px"}
            // _hover={{
            //   bgGradient: "linear(to-r, gray.200, gray.200)",
            // }}
            _hover={
              isLargeScreen
                ? {
                    bgGradient: "linear(to-r, gray.200, gray.200)",
                  }
                : {}
            }
            width="100%"
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Home"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Box fontSize={"1.5rem"}>
                <AiFillHome />
              </Box>
            </Tooltip>

            <Box
              className="sidename"
              fontSize="1.1em"
              fontWeight={"600"}
              margin={"auto"}
            >
              <Text textAlign={"left"}>Home </Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
                display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Search"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Box fontSize={"1.5rem"}>
                <SideSearchmodel />
              </Box>
            </Tooltip>

            <Box
              className="sidename"
              // border={"2px solid red"}
              fontSize="1.1em"
              margin={"auto"}
            >
              <Text textAlign="left">Search </Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Explore"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Link to="/explore">
                <Box fontSize={"1.5rem"}>
                  <MdExplore />
                </Box>
              </Link>
            </Tooltip>
            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text textAlign={"left"}> Explore</Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Reels"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Link to="/reel">
                <Box fontSize={"1.5rem"}>
                  {" "}
                  <TfiVideoClapper />{" "}
                </Box>
              </Link>
            </Tooltip>

            <Box className="sidename" margin="auto" fontSize="1.1em">
              <Text textAlign={"left"}> Reels </Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Create"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Box fontSize={"1.5rem"}>
                <Create />
              </Box>
            </Tooltip>

            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text textAlign="left">Create </Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Notifications"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Box fontSize={"1.5rem"}>
                <Notifications />
              </Box>
            </Tooltip>

            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text textAlign="left">Notifications</Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Profile"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Link to="/profile">
                <Box fontSize={"1.5rem"}>
                  <CgProfile />
                </Box>
              </Link>
            </Tooltip>

            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text textAlign={"left"}> Profile </Text>
            </Box>
          </Box>

          <Box
            p={2}
            display={"flex"}
            mt={4}
            gap="8px"
            justifyContent={"space-between"}
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
          >
            <Tooltip
               display={{sm:"block",md:"block",lg:"none"}}
              hasArrow
              label="Menu"
              placement="right"
              bg="#ffffff"
              color="black"
              p="2"
              ml="4"
            >
              <Box fontSize={"1.5rem"}>
                <Menubar />
              </Box>
            </Tooltip>
            <Box fontSize="1.1em" className="sidename" margin={"auto"}>
              <Text textAlign={"left"}> Menu </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Side;
