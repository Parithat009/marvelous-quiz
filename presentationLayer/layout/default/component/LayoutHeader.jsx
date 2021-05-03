import React from 'react'
import LayoutHeaderInfo from './LayoutHeaderInfo'
import LayoutHeaderContainer from './LayoutHeaderContainer'

const LayoutHeader = () => {
  return (
    <React.Fragment>
      <LayoutHeaderContainer>
        <LayoutHeaderInfo />
      </LayoutHeaderContainer >
      <div className='layoutHeaderHeightSpace' />
    </React.Fragment >
  )
}

export default LayoutHeader
