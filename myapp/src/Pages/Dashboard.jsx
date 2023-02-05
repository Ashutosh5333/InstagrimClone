import React, { useEffect } from 'react'
import "./Style/Dash.css"
import { Navigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import { Product } from '../Components/Dashboard/Product';
import Side from './Side';
import { Suggestions } from './Suggestions';

const Dashboard = () => {
      
     
        useEffect(()=>{
       
        },[])
   
         const handleLogOut =()=>{
             localStorage.clear()
              Navigate("/login")
         }

  return (
      <>   
          {/* <Button onClick={handleLogOut}> logout </Button> */}
          
       <div className='dashboard'>

       <div className='Sidebar'>
           {/* Sidebar  */}
           {/* <Sidebar/> */}
            <Side/>
       </div>

       <div className='database'> 
          <Product/>
       </div>
          
       <div className='Suggest'> 
         Suggestions
        <Suggestions/>
       </div>

    </div>
    </>

 
  )
}

export default Dashboard