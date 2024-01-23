import React, { useEffect, useState } from "react";
import "./Style/Dash.css";
import Side from "./Side";
import { Suggestions } from "./Suggestions";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import Loading from "../Loading";
import InstaPost from "../Components/Dashboard/InstaPost";
import { Box, Flex } from "@chakra-ui/react";

const Dashboard = () => {
  const [isLoading, SetLoading] = useState(false);
  const dispatch = useDispatch();

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
      {isLoading ? (
        <Loading />
      ) : (
        <Box  width={"100%"} > 

        <Flex
          justifyContent={"space-around"}
          gap={10}
        >
          <Box 
          border={"2px solid red"}
         className="Sidebar"
           display={{ sm: "none", md: "none", lg: "block" }} 
           width={{sm:"",md:"",lg:"20%"}}
           >
            <Side />
          </Box>

          <Box margin={"auto"} width={{ sm: "100%", md: "90%", lg: "60%" }}>
            <InstaPost />
          </Box>

          <Box
          className="Suggest"
            display={{ sm: "none", md: "none", lg: "block" }}
            border={"2px solid black"}
          >
            <Suggestions />
          </Box>

        </Flex>

        </Box>
      )}
    </>
  );
};

export default Dashboard;
