import Todo from '@components/page-components/Todo'
import type { NextPage } from 'next'
import Head from 'next/head'

const TodoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basic Todo</title>
      </Head>
      <Todo />
    </>
  )
}

export default TodoPage
