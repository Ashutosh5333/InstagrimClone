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
import Profile from '../Components/Profile';
import MypostFull from '../Components/Collections/MypostFull';
import Menubar from '../Components/Menubar';
import { UserProfile } from '../Components/UserProfileAll/UserProfile';

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
        <Route path="/menu" element={<Menubar/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route path='/profiledata'  element={<MypostFull/>} />
        <Route path="/userprofile/:userId" element={<UserProfile/>} />
        
        <Route path="/dash" element={
          <PrivateRoute>
        <Dashboard/>
          </PrivateRoute>     } />
        
      </Routes>
    
  )
}
