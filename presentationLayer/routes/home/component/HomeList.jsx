import React from 'react'

const HomeList = (props) => {
  return (
    <div className='homeListContainer'>
      {props?.data?.map((item, i) => (
        <div className='homeListContent' key={i}>
          {props.renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default HomeList
