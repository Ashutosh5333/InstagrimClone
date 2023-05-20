import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUserData } from '../../Redux/AppReducer/action'

const Avatar = () => {
  const [data,SetData] = useState([])
  const dispatch  = useDispatch()
  

  //  console.log(data)
   
    useEffect(() =>{
      dispatch(AllUserData)
       .then((res) =>{
          SetData(res.payload)
     
       }).catch((err) =>{
          console.log(err)
       })
    },[])



  return (
     <>

   {
       data.length>0  && data.map((el) =>{
        return <section className='avatar-detail' key={el._id} >
      <div className='avatar-box'>
        <img className="avatar-profile-image" src={el.image} alt="" />
      </div>
      
      <p className='avatar-name'>{el.name}</p>

    </section>
       })



   }

    
    </>
  )
}

export default Avatar;