import React, { useState } from "react";
import "./video.css";
import { AspectRatio } from "@chakra-ui/react";
import { useRef } from "react";
import Videoheader from "./Videoheader";
import VideoFooter from "./VideoFooter";

const VideoCard = () => {
  const [videoplay,SetVideoplay] = useState(false);


   const videoref = useRef(null)

     const onPresss = () =>{
       if(videoplay){
         videoref.current.pause()
         SetVideoplay(false)
       }else{
         videoref.current.play();
         SetVideoplay(true)
       }
     }


  return (
     <>
  <div className="card">
  <Videoheader/>

<video
  className='videoplyer'
  ref={videoref}
   onClick={onPresss}
   src="https://www.statuslagao.com/whatsapp/videos/new/new-whatsapp-status-video-330.mp4"
   alt='igreels'
   loop
 /> 
<VideoFooter/>

</div>


{/* ------------------------ */}


{/* <div className="card">
<video
  className='videoplyer'
  ref={videoref}
   onClick={onPresss}
   src="https://www.statuslagao.com/whatsapp/videos/new/new-whatsapp-status-video-376.mp4"
   alt='igreels'
   loop
 /> 
</div> */}

{/* ----------------- */}
{/* 
<div className="card">
<video
  className='videoplyer'
  ref={videoref}
   onClick={onPresss}
   src="https://www.statuslagao.com/whatsapp/videos/new/new-whatsapp-status-video-644.mp4"
   alt='igreels'
   loop
 /> 
</div> */}

{/* ------------- */}
{/* 
<div className="card">
<video
  className='videoplyer'
  ref={videoref}
   onClick={onPresss}
   src="https://www.statuslagao.com/whatsapp/videos/new/new-whatsapp-status-video-585.mp4"
   alt='igreels'
   loop
 /> 
</div> */}

     </>
  


  );
};

export default VideoCard;
