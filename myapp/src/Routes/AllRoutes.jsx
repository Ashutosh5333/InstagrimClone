import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import Dashboard from './../Pages/Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import Explore from '../Components/Explore';
import Reels from '../Components/Reels';
import Messanger from '../Components/Messanger';
import Notifications from '../Components/Notifications';
import Profile from '../Components/Profile';
import Menubar from '../Components/Menubar';
import { UserProfile } from '../Components/UserProfileAll/UserProfile';
import { MyDashboard } from '../Components/Collections/MyAllpost/MyDashboard';



export const AllRoutes = () => {


  return (
    
      <Routes>
      
      <Route path="/" element={
          <PrivateRoute>
        <Dashboard/>
          </PrivateRoute>     } />
        
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route  path="/reel" element={<Reels/>} />
        <Route  path="/msng" element={<Messanger/>} />
        <Route  path="/notify" element={<Notifications/>} />
        <Route path="/menu" element={<Menubar/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route path='/profiledata'  element={<MyDashboard/>} />
        <Route path="/userprofile/:userId" element={<UserProfile/>} />
        
        
        
      </Routes>
    
  )
}
