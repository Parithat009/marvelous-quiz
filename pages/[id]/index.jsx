import React from 'react'
import Head from 'next/head'
import VideoIdViewPage from '../../presentationLayer/routes/videoId/VideoIdViewPage'

const VideoId = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Marvelous</title>
        <meta name="description" content="Marvelous App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoIdViewPage />
    </React.Fragment>
  )
}

export default VideoId
