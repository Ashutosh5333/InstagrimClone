import React from 'react'

const Avatar = ({image}) => {
  return (
     <>


    <section className='avatar-detail'>
      <div className='avatar-box'>
        <img className="avatar-profile-image" src={image.src} alt="" />
      </div>
      
      <p className='avatar-name'>{image.name}</p>

    </section>
    </>
  )
}

export default Avatar;