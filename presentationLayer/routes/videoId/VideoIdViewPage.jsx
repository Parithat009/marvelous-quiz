import React from 'react'
import { useRouter } from 'next/router'
import { YoutubeDataAPI } from 'youtube-v3-api'
import { useAppContext } from '../../../hook/context'
import LayoutDefault from '../../layout/default/LayoutDefault'
import HomeInputSearch from '../home/component/HomeInputSearch'
import VideoIdContent from './component/VideoIdContent'

const VideoIdViewPage = () => {
  const context = useAppContext()
  const router = useRouter()
  const [video, setVideo] = React.useState({})

  const searchVideo = (value) => {
    if (value.charCode !== 13) return
    router.push('/')
  }

  const onRetrieveVideoId = () => {
    const API_KEY = 'AIzaSyC6LHF07I5lhrQk30XTp-JH893FCn7MjbM'
    const api = new YoutubeDataAPI(API_KEY);
    api.searchVideo(router.query.id)
      .then(response => {
        setVideo(response?.items[0]);
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    onRetrieveVideoId()
  }, [])

  return (
    <LayoutDefault>
      <HomeInputSearch
        value={context.search}
        clear={() => context.setSearch('')}
        onChange={(value) => context.setSearch(value)}
        onAction={(value) => searchVideo(value)}
      />
      <VideoIdContent
        item={video}
        id={router.query.id}
      />
    </LayoutDefault>
  )
}

export default VideoIdViewPage
