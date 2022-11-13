'use client'
import Image from 'next/image'
import Datepicker from 'tailwind-datepicker-react'
import { useState } from 'react'
import { applyForListing } from './interactions'
import { Listing } from './listing'

export default function Card(props: Listing) {
  const { propertyInfo, images, price } = props
  const { name, location, description } = propertyInfo

  const options = {
    title: 'Demo Title',
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date('01-01-2030'),
    minDate: new Date('01-01-2022'),
    theme: {
      background: 'bg-gray-300 dark:bg-gray-800',
      todayBtn: '',
      clearBtn: '',
      icons: '',
      text: '',
      disabledText: '',
      input: '',
      inputIcon: '',
      selected: 'bg-blue-400',
    },
    icons: {
      // () => ReactNode | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: '',
    defaultDate: new Date('2022-01-01'),
    language: 'en',
  }
  const [fromShow, setFromShow] = useState<boolean>(false)
  const [toShow, setToShow] = useState<boolean>(false)
  const [from, setFrom] = useState<Date>(new Date('01-01-2022'))
  const [to, setTo] = useState<Date>(new Date('01-02-2022'))
  const handleFromChange = (selectedDate: Date) => {
    setFrom(selectedDate)
  }
  const handleToChange = (selectedDate: Date) => {
    setTo(selectedDate)
  }
  const handleFromClose = (state: boolean) => {
    setFromShow(state)
  }
  const handleToClose = (state: boolean) => {
    setToShow(state)
  }

  const handleSubmit = () => {
    applyForListing(0, from, to)
  }

  return (
    <div className='flex flex-col items-center space-y-2 w-[579px] h-[982px] bg- text-white mt-10'>
      <div id='image-address' className=''>
        <p className='font-sans text-white inline-block text-2xl mb-3'>{description || '123 Jane Street'}</p>
        <div className=' flex flex-row h-[339px] max-w-[542px] overflow-x-scroll overflow-y-clip'>
          <Image className='min-w-[542px]' alt='no load' width='579' height='339' src={images[0]} />
          <Image className='min-w-[542px]' alt='no load' width='579' height='339' src={images[1]} />
          <Image className='min-w-[542px]' alt='no load' width='579' height='339' src={images[2]} />
        </div>
        <div id='bottom-form' className='space-y-2 mt-7 mb-7'>
          <p className='inline-block text-xl'>from</p>
          <Datepicker
            options={options}
            onChange={handleFromChange}
            show={fromShow}
            setShow={handleFromClose}
          />
          <p className='inline-block text-xl'>to</p>
          <Datepicker
            options={options}
            onChange={handleToChange}
            show={toShow}
            setShow={handleToClose}
          />
          
        </div>
        <div>
          <button className='w-[542px] h-[74px] rounded-md mt-5 bg-fuchsia-500 text-black' onClick={handleSubmit}>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
