import React from 'react'
import Head from 'next/head'
import HomeViewPage from '../presentationLayer/routes/home/HomeViewPage'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Marvelous</title>
        <meta name="description" content="Marvelous App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>test</div>
      <HomeViewPage />
    </React.Fragment>
  )
}
