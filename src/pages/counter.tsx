import Counter from '@components/page-components/Counter'
import type { NextPage } from 'next'

import Head from 'next/head'

const CounterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <Counter />
    </>
  )
}

export default CounterPage
