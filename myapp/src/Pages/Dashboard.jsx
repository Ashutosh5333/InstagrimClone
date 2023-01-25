import React, { useEffect } from 'react'
import "./Style/Dash.css"
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from './../Redux/AppReducer/action';
import { Navigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

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
    <div className='dashboard'>

          <Button onClick={handleLogOut}> logout </Button>
       <div className='Sidebar'> Sidebar </div>

       <div className='database'> Dashboard </div>
          
       <div className='Suggest'> Suggestions</div>

    </div>
  )
}

export default Dashboard