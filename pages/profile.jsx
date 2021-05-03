import React from 'react'
import Head from 'next/head'
import ProfileViewPage from '../presentationLayer/routes/profile/ProfileViewPage'

const Profile = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Marvelous</title>
        <meta name="description" content="Marvelous App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileViewPage />
    </React.Fragment>
  )
}

export default Profile
