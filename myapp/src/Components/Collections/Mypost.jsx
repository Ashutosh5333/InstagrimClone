import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetMypost } from '../../Redux/AppReducer/action';

export const Mypost = () => {
 const dispatch = useDispatch()
   const  Mypost = useSelector((store) => store.AppReducer.Mypost)
    // console.log("Mypost", Mypost)

      useEffect(() =>{
        // dispatch(GetMypost())
      },[])


  return (
    <div>
    Mypost
    
    </div>
  )
}
