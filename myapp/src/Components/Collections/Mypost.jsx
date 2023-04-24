import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetMypost } from '../../Redux/AppReducer/action';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ImageSkelton from './ImageSkelton';

export const Mypost = () => {
  const dispatch = useDispatch()
  const  data = useSelector((store) => store.AppReducer.Mypost)
  

     useEffect(() =>{
       dispatch(GetMypost)
     },[])


  return (
    <>
      {
        data.length>0 ?
        <Box>

<SimpleGrid columns={{base:1,md:2,lg:3}} spacing={6}>
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
:<ImageSkelton/>


      }
    
    </>
  )
}
