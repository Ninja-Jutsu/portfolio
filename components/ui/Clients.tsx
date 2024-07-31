import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import { companies, testimonials } from '@/data'

function Clients() {
  return (
    <div
      className='py-20'
      id='projects'
    >
      <h1 className='heading'>
        Kind words from <span className='text-purple'>satisfied users</span>
      </h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden max-lg:mt-10'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
