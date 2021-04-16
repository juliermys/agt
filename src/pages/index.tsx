import React from 'react'
import Head from 'next/head'
import { Build } from '../screens/Build'
const textTitle = 'AGT Mídias - Agência de Marketing Digital'

const App = (): JSX.Element => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/ico/favicon.png" />
      <title>{textTitle}</title>
    </Head>
    <Build />
  </React.Fragment>
)

export default App
