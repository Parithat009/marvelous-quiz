import React from 'react'

const LayoutHeaderContainer = (props) => {
  return (
    <div className='layoutHeaderContainer'>
      <div className='layoutHeaderContent'>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutHeaderContainer
