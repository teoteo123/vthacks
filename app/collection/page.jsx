'use client'
import Image from 'next/image'
import { use } from 'react'
import { getListings } from './interactions'

export default function Collection() {
  const nftURIs: string[] = use(getListings)

  return (
    <div className='flex flex-col justify-center items-center mb-4'>
      <div className='py-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>The Collection</h1>
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-2 border-slate-800 rounded-md shadow-md shadow-neutral-300'>
        {nfts.map(nft => (
          <a href={nft.uri} key={nft.id}>
            <div
              className=' bg-slate-600 hover:bg-blue-500 rounded-md p-4 w-48 h-48
								flex justify-center items-center text-xl hover:text-2xl transition-all'
            >
              <Image
                src={nft.uri}
                width='200'
                height='200'
                alt={`Monke #${nft.id}`}
                className='rounded-md'
              ></Image>
            </div>
          </a>
        ))}
      </ul>
    </div>
  )
}
