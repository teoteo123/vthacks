'use client'

import Image from 'next/image'
import Datepicker from 'tailwind-datepicker-react'
import { useState } from 'react'
import Carousel from './Carousel'

export default function Card(props: any) {
  const { address, url } = props

  const options = {
    title: 'Demo Title',
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date('2030-01-01'),
    minDate: new Date('1950-01-01'),
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
    datepickerClassNames: 'top-12',
    defaultDate: new Date('2022-01-01'),
    language: 'en',
  }

  const [show, setShow] = useState<boolean>(false)
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }

  return (
    <div className='flex flex-col items-center space-y-10 w-[579px] h-[982px] bg-[#f4f8fa]'>
      <div id='image-address' className='space-y-10'>
        <p className='font-mono'>{address || '6969 Cool Street'}</p>
        <div className=' flex flex-row h-[339px] max-w-[542px] overflow-x-scroll overflow-y-clip'>
					{/* map props.images to images */}
          <Image
            className='min-w-[542px]'
            alt='no load'
            width='579'
            height='339'
            src='https://www.rd.com/wp-content/uploads/2020/12/GettyImages-200157725-002.jpg'
          />
          <Image
            className='min-w-[542px]'
            alt='no load'
            width='579'
            height='339'
            src='https://www.rd.com/wp-content/uploads/2020/12/GettyImages-200157725-002.jpg'
          />
        </div>
        <div id='bottom-form' className='space-y-5'>
          <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
          <button className='w-[542px] h-[74px] border-0 bg-green-500 rounded-md'>Apply</button>
        </div>
      </div>
    </div>
  )
}
