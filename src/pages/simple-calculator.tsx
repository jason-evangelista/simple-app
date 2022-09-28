import SimpleCalculator from '@components/page-components/SimpleCalculator'
import type { NextPage } from 'next'
import Head from 'next/head'

const SimpleCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple Calculator</title>
      </Head>
      <SimpleCalculator />
    </>
  )
}

export default SimpleCalculatorPage
