import React from 'react'
import {Link} from "react-router-dom"
import "../Style/home.css"


const Home = () => {


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
    
    </div>
  )
}

export default Home