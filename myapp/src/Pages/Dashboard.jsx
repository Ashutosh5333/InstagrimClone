import React, { useEffect } from 'react'
import "./Style/Dash.css"
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from './../Redux/AppReducer/action';

const Dashboard = () => {
        const dispatch = useDispatch()
      const Data = useSelector((store) => store.AppReducer.UserData)
       console.log(Data) 

        useEffect(()=>{
        dispatch(GetUserData)
        },[])

  return (
    <div className='dashboard'>

       <div className='Sidebar'> Sidebar </div>

       <div className='database'> Dashboard </div>
          
       <div className='Suggest'> Suggestions</div>

    </div>
  )
}

export default Dashboard