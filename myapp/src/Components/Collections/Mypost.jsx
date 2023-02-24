import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetMypost } from '../../Redux/AppReducer/action';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Mypost = () => {
  const dispatch = useDispatch()
  const  data = useSelector((store) => store.AppReducer.Mypost)
   console.log("Mypost", data)

     useEffect(() =>{
       dispatch(GetMypost)
     },[])


  return (
    <>
     <Box 
    //   border={"1px solid gray"}
     >

       <SimpleGrid columns={{base:3,md:2,lg:3}} spacing={6}>
             {
              data.length>0 && data.map((el) =>{
                return <Box key={el._id} > 
                       <Link to='/profiledata'> 
                     <Image src={el.pic} style={{width:"90%" ,height:"40vh" }} />
                       </Link>
                     
                 </Box>
              })

             }

       </SimpleGrid>
     </Box>
    </>
  )
}
