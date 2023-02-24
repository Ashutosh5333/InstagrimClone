import React, { useState } from "react";
import {Tabs,  TabList,  TabPanels,  Tab,  TabPanel,  useColorModeValue,  Box,Text,} from "@chakra-ui/react";
import { AiOutlineTable } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { TfiVideoClapper } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { Mypost } from "./Mypost";

const Collection = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
//   const bg = colors[tabIndex];

  return (
    <>
      <Tabs onChange={(index) => setTabIndex(index)} gap="10px" textAlign="center">
        <TabList justifyContent={"center"}>

          <Box 
        //   
        //   border="1px solid black"
// 
           m="10px" display={"flex"} 
            justifyContent="space-between"
           alignContent="center" >
            <Box alignItems={"center"} 
            //   border="1px solid yellow"
               m="auto" >
             <Text fontSize={"1.2rem"}>
              <AiOutlineTable />
             </Text>
            </Box>
            <Box>
              <Tab>Post</Tab>
            </Box>
          </Box>

         
         
          <Box
        //    
        //   border="1px solid black" 

           m="10px"
           display={"flex"} 
            justifyContent="space-between"
           alignContent="center" >
            <Box alignItems={"center"} 
            //   border="1px solid yellow"
               m="auto" >
             <Text fontSize={"1.2rem"}>
             <TfiVideoClapper />
             </Text>
            </Box>
            <Box>
              <Tab>Reels</Tab>
            </Box>
          </Box>


          <Box 
        
        //   border="1px solid black"
// 
           m="10px" display={"flex"} 
            justifyContent="space-between"
           alignContent="center" >
            <Box alignItems={"center"} 
            //   border="1px solid yellow"
               m="auto" >
             <Text fontSize={"1.2rem"}>
             <FaRegBookmark />
             </Text>
            </Box>
            <Box>
              <Tab>Saved</Tab>
            </Box>
          </Box>

          
          <Box 
        //   
        //   border="1px solid black" 

          m="10px"
           display={"flex"} 
            justifyContent="space-between"
           alignContent="center" >
            <Box alignItems={"center"} 
            //   border="1px solid yellow"
               m="auto" >
             <Text fontSize={"1.2rem"}>
              <CgProfile />
             </Text>
            </Box>
            <Box>
              <Tab>Tagged</Tab>
            </Box>
          </Box>
        </TabList>

        <TabPanels p="2rem">
          <TabPanel>
            <Mypost/>
           </TabPanel>
          <TabPanel> my Reels</TabPanel>
          <TabPanel>Saved data </TabPanel>
          <TabPanel>Tagged Data </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Collection;
