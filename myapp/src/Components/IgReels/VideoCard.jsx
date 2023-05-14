import React, { useState } from "react";
import "./video.css";
import { AspectRatio } from "@chakra-ui/react";
import { useRef } from "react";
import Videoheader from "./Videoheader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({avatarSrc,like, share ,channel,song,url}) => {
  const [videoplay,SetVideoplay] = useState(false);


   const videoref = useRef(null)

     const onPresss = () => {
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
          <VideoFooter
             avatarSrc={avatarSrc}
             like={like}
             share={share}  
             channel={channel} 
             song={song}
             url={url}
          />

        </div>


{/* ------------------------ */}

     </>
  


  );
};

export default VideoCard;
