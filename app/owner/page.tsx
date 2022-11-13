'use client'

import { Form, Alert, Col, Row, InputGroup, Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import { useRef } from 'react'
import Head from 'next/head'
import { addListing } from '../collection/interactions'

export default function OwnerDash() {
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const locationRef = useRef<HTMLInputElement>(null)
  const image1Ref = useRef<HTMLInputElement>(null)
  const image2Ref = useRef<HTMLInputElement>(null)
  const image3Ref = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    const data = {
      propertyInfo: {
        name: nameRef.current?.value.trim(),
        description: descriptionRef.current?.value.trim(),
        location: locationRef.current?.value.trim(),
      },
      images: [
        image1Ref.current?.value.trim(),
        image2Ref.current?.value.trim(),
        image3Ref.current?.value.trim(),
      ],
      price: priceRef.current?.value,
    }
    addListing(data)
  }

  return (
    <>

      <div className='flex flex-row grid-cols-6 gap-6 col-span-6 sm:col-span-3
      bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
      text-white min-h-[3000px] items-align'
      >
        <div
          id='left'
          className='flex flex-col items-center 
          space-y-2 w-1/2 border-r-[1px] 
          border-r-[#c4c4c4] p-4'
        >
          <p className='text-3xl mb-10'>Add Listing</p>
          <div>
            <label>Name</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 
              rounded-lg 
              m-2 focus:ring-2 focus:ring-indigo-200
               focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={nameRef}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 
                rounded-lg m-2 focus:ring-2
                 focus:ring-indigo-200
                 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={descriptionRef as any}
            ></input>
          </div>
          <div>
            <label>Location</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 
                rounded-lg m-2 focus:ring-2
                focus:ring-indigo-200
                focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={locationRef as any}
            ></input>
          </div>
          <div>
            <label>Image 1</label>
            <input
              type='text'
              className='shadow-sm
                 border-gray-300 
                rounded-lg m-2 
                focus:ring-2 
                focus:ring-indigo-200
                focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={image1Ref as any}
            ></input>
          </div>
          <div>
            <label>Image 2</label>
            <input
              type='text'
              className='shadow-sm
                border-gray-300 
                rounded-lg m-2 
                focus:ring-2 
                focus:ring-indigo-200 
                focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={image2Ref as any}
            ></input>
          </div>
          <div>
            <label>Image 3</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={image3Ref as any}
            ></input>
          </div>
          <div>
            <label>Price</label>
            <input
              type='number'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={priceRef as any}
            ></input>
          </div>
          <button
            onClick={handleSubmit}
            className='w-1/2 h-10 rounded-md mt-10 bg-fuchsia-500'
          >
            Add
          </button>
        </div>
        {/* right */}
        <div id='right-find-by-id' className='flex flex-col w-1/2 p-4'>
          <p className='text-3xl mb-10'>Find a listing</p>
          <div className='w-full'>
            <label className='text-2xl'>id</label>
            <input type='number' className='w-full h-25 text-xl' />
          </div>
        </div>
      </div>
    </>
  )
}
