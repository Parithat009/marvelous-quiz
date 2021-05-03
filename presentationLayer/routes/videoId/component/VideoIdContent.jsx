import React from 'react'
import VideoIdCard from './VideoIdCard'
import { sliceString } from '../../../../util/sliceString'

const VideoIdContent = (props) => {
  const { item, id } = props
  return (
    <VideoIdCard>
      <iframe
        className='videoIdContentIframe'
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <div className='videoIdContentText'>
        <h1 className='homeListItemTitle'>{item?.snippet?.title}</h1>
        <p className='homeListItemDescription'>{sliceString(item?.snippet?.description, 200)}</p>
      </div>

    </VideoIdCard>
  )
}

export default VideoIdContent
