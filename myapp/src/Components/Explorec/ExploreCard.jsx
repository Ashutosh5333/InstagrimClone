import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/AppReducer/action'
import { Box, Card, Image, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ImageSkelton from '../Collections/ImageSkelton'


const ExploreCard = () => {
    const dispatch = useDispatch()
    const  data = useSelector((store) => store.AppReducer.productData)
    //  console.log( "Explore",data)
  
       useEffect(() =>{
         dispatch(getData)
       },[])


  return (
    <>
        {
        data.length>0 ?
        <Box>
<SimpleGrid columns={{base:1,md:2,lg:3}} spacing={6}>
    {
       data.length > 0 && data.map((el) =>{
        return   <Card maxW="xl" key={el._id}>
        <Link to="/profiledata">
           <Image  src={el.pic}
           alt="Mypost"
                  //  objectFit="cover"
                     width="100%"
                      height={"400px"}
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


      }
    
    
    </>
  )
}

export default ExploreCard