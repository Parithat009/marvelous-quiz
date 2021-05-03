import React from 'react'
import { useRouter } from 'next/router'
import IconUser from '../../../icon/iconUser'

const LayoutHeaderInfo = () => {
  const router = useRouter()
  return (
    <React.Fragment>
      <div className='layoutHeaderSpace' />
      <div className='layoutHeaderInfoContainer'>
        <h1 className='layoutHeaderInfoTitle'>Morning, Kelvin</h1>
        <div
          className='layoutHeaderInfoLogo'
          onClick={() => router.push('/profile')}
        >
          <IconUser />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LayoutHeaderInfo
