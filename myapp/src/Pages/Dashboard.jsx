import React, { useEffect, useState } from "react";
import "./Style/Dash.css";
import { Divider } from "@chakra-ui/react";
import { Product } from "../Components/Dashboard/Product";
import Side from "./Side";
import { Suggestions } from "./Suggestions";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";
import Loading from "../Loading";

const Dashboard = () => {
  const [isLoading, SetLoading] = useState(false);
  const dispatch = useDispatch();
  const userdetail = useSelector((store) => store.AppReducer.productData);

  useEffect(() => {
    SetLoading(true);
    dispatch(getData)
      .then((res) => {
        SetLoading(false);
        console.log(res);
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
          <Divider orientation="vertical" />

          <div className="database">
            <Product />
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
