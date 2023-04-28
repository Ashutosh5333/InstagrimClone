import React from "react";
import "./post.css"
import MypostFull from '../MypostFull';
import Side from '../../../Pages/Side';
import { Suggestions } from '../../../Pages/Suggestions';


export const MyDashboard = () => {
  
   

  return (
    <>
    
        <div className="dashboard">
          <div className="Sidebar">
            <Side />
          </div>
      

          <div className="database">
            <MypostFull/>
          </div>

          <div className="Suggest">
            <Suggestions />
          </div>

        </div>
    
    </>
  )
}
