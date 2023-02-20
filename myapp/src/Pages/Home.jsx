import React from 'react'
import {Link} from "react-router-dom"
import "../Style/home.css"
import {  Button, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const {colorMode, toggleColorMode}= useColorMode()

  return (
    <div className='Home'>

      <Link to="/sign">
         <div>Signup  </div>
      </Link>

      <Link to="/login">
         <div>Login  </div>
      </Link>

      <Link to="/dash">
         <div>Dashboard </div>
      </Link>
        <div>
          <Button  onClick={toggleColorMode}> 
          {colorMode === "light" ? "Dark" : "Light" }
          </Button>
        </div>
    
    </div>
  )
}

export default Home