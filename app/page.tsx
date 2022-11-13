

import Head from 'next/head'
import { Inter } from '@next/font/google'
import Card from './collection/card'

const inter = Inter()

export default function Home() {
  return (
    <>
      <Head>
        <title>Hedera Haus</title>
      </Head>
      <main className={inter.className}>
          <div className='flex flex-col items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
            <h1 className={"mt-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-100 to-violet-300"}>Hedera Haus</h1>
            <Card />
          </div>
      </main>
    </>
  )
}
