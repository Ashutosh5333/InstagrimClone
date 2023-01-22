import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
     const token = JSON.parse(localStorage.getItem("token"))
   console.log( "token" ,token)

       if(token == null){
         return  <Navigate to={"/login"} />
       }

   return children
}

export default PrivateRoute