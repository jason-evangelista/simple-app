import CenterHelloWorld from '@components/page-components/CenterHelloWorld'
import type { NextPage } from 'next'

import Head from 'next/head'

const CenterHelloWorldPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Center &apos;Hello World&apos;</title>
      </Head>
      <CenterHelloWorld />
    </>
  )
}

export default CenterHelloWorldPage
