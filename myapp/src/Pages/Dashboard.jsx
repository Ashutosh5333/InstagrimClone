import React, { useEffect, useState } from "react";
import "./Style/Dash.css";

import Side from "./Side";
import { Suggestions } from "./Suggestions";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import Loading from "../Loading";
import InstaPost from "../Components/Dashboard/InstaPost";

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
      {
        isLoading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <div className="Sidebar">
            <Side />
          </div>
      

          <div className="database">
            {/* <Product /> */}
            <InstaPost/>
          </div>

          <div className="Suggest">
            <Suggestions />
          </div>

        </div>
      )
      
      }
    </>
  );
};

export default Dashboard;
