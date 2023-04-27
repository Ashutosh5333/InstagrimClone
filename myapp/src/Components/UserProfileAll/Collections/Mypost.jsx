import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const Mypost = () => {


  const Singleuser = useSelector((store) => store.AppReducer.Singleuser)
  console.log("Singleuser" ,Singleuser)

   const data = Singleuser.pos
   console.log(data)

  return (
    <>
     {
       data.length >0 ? 
      <Box >
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
     </Box> : <Box>
        loading ................
        
        </Box>

     }
    
    </>
  )
}
