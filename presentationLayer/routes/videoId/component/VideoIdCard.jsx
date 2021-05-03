import React from 'react'

const VideoIdCard = (props) => {
  return (
    <div className='videoIdCardContainer'>
      <div className='videoIdCardContent'>
        {props.children}
      </div>
    </div>
  )
}

export default VideoIdCard
