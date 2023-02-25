import { Box} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
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
  return (
    <>
      <Box
        //  border={"1px solid yellow"
         border-right="1px solid gray"
        p={1}
        display="flex"
        gap={2}
        position="fixed"
      >
        <Box
          //  border={"5px solid blue"}
          gap="8px"
         
        >
          <Box
            //  border="1px solid yellow"
            p={1}
            display={"flex"}
            gap="8px"
            justifyContent={"space-between"}
          >
            <Box fontSize={"2.2em"}>
              <Link to="/dash">
                <BsInstagram />
              </Link>
            </Box>
            <Box> </Box>
          </Box>

          <Box
            //  border="1px solid yellow"
            borderRadius={"10px"}
            _hover={{
              bgGradient: "linear(to-r, gray.200, gray.200)",
            }}
            width="100%"
            p={1}
            display={"flex"}
            mt={6}
            gap="8px"
            justifyContent={"space-between"}
          >
            <Box fontSize={"2.2em"}>
              {" "}
              <AiFillHome />{" "}
            </Box>

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
            //  border="1px solid yellow"
            p={1}
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
         
            <Box fontSize={"2.2em"}>
              <SideSearchmodel />
            </Box>
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
        
            p={1}
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
            <Link to="/explore">
              <Box fontSize={"2.2em"}>
                <MdExplore />
              </Box>
            </Link>
            <Box
              className="sidename"
       
              fontSize="1.1em"
              margin={"auto"}
            >
              <Text textAlign={"left"}> Explore</Text>
            </Box>
          </Box>

          <Box
            // border="1px solid yellow"
            p={1}
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
            <Link to="/reel">
              <Box fontSize={"2.2em"}>
                {" "}
                <TfiVideoClapper />{" "}
              </Box>
            </Link>

            <Box
              className="sidename"
             
              margin="auto"
              fontSize="1.1em"
            >
              <Text textAlign={"left"}> Reels </Text>
            </Box>
          </Box>

          <Box
    
            p={1}
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
            <Box fontSize={"2.2em"}>
              <Create />
            </Box>

            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text
        
                textAlign="left"
              >
                Create{" "}
              </Text>
            </Box>
          </Box>

          <Box
      
            p={1}
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
            <Box fontSize={"2.2em"}>
              <Notifications />
            </Box>
            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text
           
                textAlign="left"
              >
                Notifications
              </Text>
            </Box>
          </Box>

          <Box
        
            p={1}
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
            <Link to="/profile">
              <Box fontSize={"2.2em"}>
                <CgProfile />
              </Box>
            </Link>

            <Box className="sidename" fontSize="1.1em" margin={"auto"}>
              <Text textAlign={"left"}> Profile </Text>
            </Box>
          </Box>

          <Box
          
            p={1}
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
            <Box fontSize={"2.2em"}>
           
              <Menubar />
              {/* <AiOutlineMenu/>  */}
            </Box>
            <Box
         
              fontSize="1.1em"
              className="sidename"
              margin={"auto"}
            >
              <Text textAlign={"left"}> Menu </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Side;
