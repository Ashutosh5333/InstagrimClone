import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import Dashboard from './../Pages/Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import Explore from '../Components/Explore';

export const AllRoutes = () => {


  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path="/dash" element={
          <PrivateRoute>
        <Dashboard/>
          </PrivateRoute>     } />
        
      </Routes>
    
  )
}
