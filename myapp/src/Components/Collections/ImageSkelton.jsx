import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const ImageSkelton = () => {


  return (
    <Skeleton>
    <div>contents wrapped</div>
    <div>won't be visible</div>
    <div>contents wrapped</div>
    <div>won't be visible</div>
    <div>contents wrapped</div>
    <div>won't be visible</div>
    <div>contents wrapped</div>
    <div>won't be visible</div>
  </Skeleton>
  )
}

export default ImageSkelton