import React from 'react'
import IconUser from '../../../icon/iconUser'

const LayoutHeaderInfo = () => {
  return (
    <React.Fragment>
      <div className='layoutHeaderSpace' />
      <div className='layoutHeaderInfoContainer'>
        <h1 className='layoutHeaderInfoTitle'>Morning, Kelvin</h1>
        <div className='layoutHeaderInfoLogo'>
          <IconUser />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LayoutHeaderInfo
