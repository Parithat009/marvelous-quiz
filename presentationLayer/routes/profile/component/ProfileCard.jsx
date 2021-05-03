import React from 'react'
import IconUser from '../../../icon/iconUser'

const ProfileCard = (props) => {
  return (
    <div className='profileHeadLineCardContainer'>
      <div className='profileHeadLineCardContent'>
        <div className='profileHeadLineInfoLogo'><IconUser /></div>
        <div className='videoIdContentText'>
          <h1 className='homeListItemTitle'>{props.title}</h1>
          <p className='homeListItemDescription'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
