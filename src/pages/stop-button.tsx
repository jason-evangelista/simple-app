import StopButton from '@components/page-components/StopButton'
import type { NextPage } from 'next'
import Head from 'next/head'

const StopButtonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>STOP</title>
      </Head>
      <StopButton />
    </>
  )
}

export default StopButtonPage
