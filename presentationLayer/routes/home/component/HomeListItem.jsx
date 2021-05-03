import React from 'react'
import { useRouter } from 'next/router'
import { sliceString } from '../../../../util/sliceString'

const HomeListItem = ({ item }) => {
  const router = useRouter()
  const { snippet, id } = item

  const videoById = () => router.push(`/${id?.videoId}`)
  return (
    <div className='homeListItemContainer' onClick={videoById}>
      <img className='homeListItemImg' src={snippet?.thumbnails?.medium?.url} />
      <div className='homeListItemInfo'>
        <h1 className='homeListItemTitle'>{sliceString(snippet?.title, 35)}</h1>
        <p className='homeListItemDescription'>{sliceString(snippet?.description, 80)}</p>
      </div>
    </div>
  )
}

export default HomeListItem
