import React from 'react'
import LayoutDefault from '../../layout/default/LayoutDefault'
import ProfileHeadLine from './component/ProfileHeadLine'
import ProfileContent from './component/ProfileContent'

const ProfileViewPage = () => {
  return (
    <LayoutDefault>
      <ProfileHeadLine />
      <ProfileContent />
    </LayoutDefault>
  )
}

export default ProfileViewPage
