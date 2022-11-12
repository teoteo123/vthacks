import Image from 'next/image'

export default function Card(props: any) {
  const { address, url } = props

  return (
    <div className='flex flex-col items-center space-y-10 w-[579px] h-[982px] bg-[#f4f8fa]'>
      <div id='image-address'>
        <p className='font-mono'>{address || '6969 Cool Street'}</p>
        <Image
          src={
            'https://www.boredpanda.com/blog/wp-content/uploads/2021/09/fb_image_61373489ee255.png'
          }
          alt='house'
          width='542'
          height='339'
        ></Image>
      </div>
      <div id='bottom-form' className='space-y-5'>
        <div date-rangepicker className='flex items-center'>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              name='start'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Select date start'
            />
          </div>
          <span className='mx-4 text-gray-500'>to</span>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              name='end'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Select date end'
            />
          </div>
        </div>
        <button className='w-[542px] h-[74px] border-0 bg-green-500 rounded-md'>Apply</button>
      </div>
    </div>
  )
}
