import React from 'react'
import { YoutubeDataAPI } from 'youtube-v3-api'
import { useAppContext } from '../../../hook/context'
import LayoutDefault from '../../layout/default/LayoutDefault'
import HomeList from './component/HomeList'
import HomeListItem from './component/HomeListItem'
import HomeInputSearch from './component/HomeInputSearch'

const HomeViewPage = () => {
  const context = useAppContext()
  const [video, setVideo] = React.useState([])

  const onRetrieveVideo = (value) => {
    const API_KEY = 'AIzaSyC6LHF07I5lhrQk30XTp-JH893FCn7MjbM'
    const api = new YoutubeDataAPI(API_KEY);
    api.searchAll(value, 8)
      .then(response => setVideo(response))
      .catch(err => console.log(err))
  }

  const searchVideo = (value) => {
    if (value.charCode !== 13) return
    onRetrieveVideo(context.search)
  }

  React.useEffect(() => {
    onRetrieveVideo(context.search)
  }, [])

  if (!video?.items) return null
  else {
    return (
      <LayoutDefault>
        <HomeInputSearch
          value={context.search}
          clear={() => context.setSearch('')}
          onChange={(value) => context.setSearch(value)}
          onAction={(value) => searchVideo(value)}
        />
        <HomeList
          data={video?.items}
          renderItem={(item) => <HomeListItem item={item} />}
        />
      </LayoutDefault>
    )
  }
}

export default HomeViewPage
