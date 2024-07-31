'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CanvasRevealEffect } from '@/components/ui/CanvasEffect'
import { div } from 'three/webgpu'

export default function Approach() {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>Approach</span>
      </h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4'>
        <Card
          title='Planning & Strategy'
          icon={<AceternityIcon order='Phase 1' />}
          description='A description of my approach'
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-emerald-900'
          />
        </Card>
        <Card
          title='Development & Progress Update'
          icon={<AceternityIcon order='Phase 2' />}
          description='A description of my approach'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-black'
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title='Development & Launch'
          icon={<AceternityIcon order='Phase 3' />}
          description='A description of my approach'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  description: string
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='overflow-hidden lg:h-[35rem]  border border-black/[0.2] group/canvas-card flex items-center justify-center relative dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] rounded-3xl'
    >
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center '>
          {icon}
        </div>
        <h2 className='dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
          {title}
        </h2>
        <h2
          style={{ color: '#e4ecff' }}
          className='text-sm text-center text-3xl dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'
        >
          {description}
        </h2>
      </div>
    </div>
  )
}

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className='text-3xl px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400'>
        {order}
      </button>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6v12m6-6H6'
      />
    </svg>
  )
}
