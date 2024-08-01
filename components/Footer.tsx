import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { div } from 'three/webgpu'

function Footer() {
  return (
    <footer
      className='w-full pt-20 pb-10'
      id='contact'
    >
      <div className='w-full h-96 absolute top-0 left-0'>
        <img
          src='/footer-grid.svg'
          alt='footer grid'
          className='w-full h-full opacity-50'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.{' '}
        </p>
        <a href='mailto:ismail.bardach.work@gmail.com'>
          <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-2'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Ismail</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map(profile => {
                return (<div key={profile.id} className='w-10 h-10 cursor-pointer bg-black-200 flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 rounded-full border border-black-300'>
                    <img src={profile.img} alt={profile.img} />
                </div>)
            })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
