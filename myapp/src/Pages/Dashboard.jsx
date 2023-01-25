import React, { useEffect } from 'react'
import "./Style/Dash.css"
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from './../Redux/AppReducer/action';
import { Navigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';

const Dashboard = () => {
        const dispatch = useDispatch()
      const Data = useSelector((store) => store.AppReducer.UserData)
      //  console.log(Data) 

        useEffect(()=>{
        // dispatch(GetUserData)
        },[])
   
         const handleLogOut =()=>{
             localStorage.clear()
              Navigate("/login")
         }


  return (
      <>   
          {/* <Button onClick={handleLogOut}> logout </Button> */}
          
       <div className='dashboard'>

       <div className='Sidebar'> Sidebar 
           <Sidebar/>
       </div>

       <div className='database'> Dashboard </div>
          
       <div className='Suggest'> Suggestions</div>

    </div>
    </>

 
  )
}

export default Dashboard