import React from 'react'
import { useSelector } from 'react-redux';
import { Box, Card, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ImageSkelton from '../../Collections/ImageSkelton';


export const Mypost = () => {


  const Singleuser = useSelector((store) => store.AppReducer.Singleuser)
  // console.log("Singleuser" ,Singleuser)

   const data = Singleuser?.pos
   console.log(data)

     

  return (
    <>

     {/* {
      data.length>0 ?
      <Box>
<SimpleGrid columns={{base:1,md:2,lg:3}} spacing={6}>
  {
     data.length > 0 && data.map((el) =>{
      return   <Card maxW="xl" key={el._id}>
      <Link to="/profiledata">
         <Image  src={el.pic}
         alt="Mypost"
                 objectFit="cover"  width="100%"
                  height="400px"
                 />
     </Link>
     </Card>
     })

  }
   
</SimpleGrid>
</Box>
:
<Box>
<ImageSkelton/>
</Box>

    }  */}
  
  </>

  )
}
