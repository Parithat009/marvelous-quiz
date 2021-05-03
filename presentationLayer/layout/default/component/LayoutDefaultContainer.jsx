import React from 'react'

const LayoutDefaultContainer = (props) => {
  return (
    <div className='layoutDefaultContainer'>
      <div className='LayoutDefaultContent'>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutDefaultContainer
