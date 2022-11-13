

import Head from 'next/head'
import Card from './collection/card'

export default function Home() {
  return (
    <>
      <Head>
        <title>decentRedfin</title>
      </Head>
      <main className='flex flex-col items-center'>
        <h1 className='mt-5 text-4xl'>DecentRedfin</h1>
        <Card />
      </main>
    </>
  )
}
