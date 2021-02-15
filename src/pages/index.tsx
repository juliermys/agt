import React from 'react'
import Head from 'next/head'
import { HomeScreen } from '../screens/home/HomeScreen'
const textTitle = 'AGT Mídias | 📱 𝘚𝘰𝘤𝘪𝘢𝘭 𝘔𝘦𝘥𝘪𝘢 - 💻 𝘔𝘢𝘳𝘬𝘦𝘵𝘪𝘯𝘨 𝘋𝘪𝘨𝘪𝘵𝘢𝘭.'

const App = (): JSX.Element => (
  <React.Fragment>
    <Head>
      <link rel="shortcut icon" href="/ico/favicon.png" />
      <title>{textTitle}</title>
    </Head>
    <HomeScreen />
  </React.Fragment>
)

export default App
