import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Image, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ImageSkelton from '../../Collections/ImageSkelton';
import { SingleUserprofile, getData  } from '../../../Redux/AppReducer/action';


export const Mypost = () => {
  const dispatch = useDispatch()

  const  data = useSelector((store) => store.AppReducer.SingleData)
    //  console.log(data)
    
       
     

  return (
    <Box>

     {
       data?.length >0 ?
       <Box>
          <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={6}>
           {

            data?.length>0  && data?.map((el) =>{
           return   <Card key={el._id}>

           <Link to="/profiledata">
         <Image  src={el?.pic}
         alt="Mypost"
                 width="100%"
                  height="80vh"
                 />
         </Link>
           </Card>          
           })

           }
          </SimpleGrid>

        </Box>  :
        <Box>
     <ImageSkelton/>
      </Box>

     }
       
       
            

  
  
    </Box>

  )
}
