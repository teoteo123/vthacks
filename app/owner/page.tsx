'use client'

import { Form, Alert, Col, Row, InputGroup, Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import { useRef } from 'react'
import Head from 'next/head'

export default function OwnerDash() {
  const nameRef = useRef()
  const descriptionRef = useRef()
  const locationRef = useRef()
  const image1Ref = useRef()
  const image2Ref = useRef()
  const image3Ref = useRef()
  const priceRef = useRef()

  const handleSubmit = () => {
    
  }

  return (
    <>
      <div className='flex flex-row'>
        <div
          id='left'
          className='flex flex-col items-center space-y-2 w-1/2 border-r-[1px] border-r-[#c4c4c4] p-4'
        >
          <p className='text-3xl mb-10'>Add Listing</p>
          <div>
            <label>Name</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={nameRef as any}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={descriptionRef as any}
            ></input>
          </div>
          <div>
            <label>Location</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={locationRef as any}
            ></input>
          </div>
          <div>
            <label>Image 1</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
              placeholder='Enter some text...'
              ref={image1Ref as any}
            ></input>
          </div>
          <div>
            <label>Image 2</label>
            <input
              type='text'
              className='shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400'
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
            className='w-1/2 h-10 bg-[rgb(49,194,95)] rounded-md mt-10'
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
