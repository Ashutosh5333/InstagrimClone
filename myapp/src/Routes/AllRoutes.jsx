import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import Dashboard from './../Pages/Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import Explore from '../Components/Explore';
import Reels from '../Components/Reels';
import Messanger from '../Components/Messanger';
import Notifications from '../Components/Notifications';
import Menu from '../Components/Menu';

export const AllRoutes = () => {


  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route  path="/reel" element={<Reels/>} />
        <Route  path="/msng" element={<Messanger/>} />
        <Route  path="/notify" element={<Notifications/>} />
        <Route path="/menu" element={<Menu/>} />
        
        <Route path="/dash" element={
          <PrivateRoute>
        <Dashboard/>
          </PrivateRoute>     } />
        
      </Routes>
    
  )
}
