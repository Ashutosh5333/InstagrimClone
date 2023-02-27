import React, { useEffect } from 'react'
import "./Style/Dash.css"
import { Navigate } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import { Product } from '../Components/Dashboard/Product';
import Side from './Side';
import { Suggestions } from './Suggestions';

const Dashboard = () => {
      
     
        useEffect(()=>{
       
        },[])
   
        

  return (
      <>   
          {/* <Button onClick={handleLogOut}> logout </Button> */}
          
       <div className='dashboard'>

       <div className='Sidebar'>
           
            <Side/>
       </div>
            <Divider orientation='vertical' />

       <div className='database'> 
          <Product/>
       </div>
          
       <div className='Suggest'> 
        
        <Suggestions/>
       </div>

    </div>
    </>

 
  )
}

export default Dashboard