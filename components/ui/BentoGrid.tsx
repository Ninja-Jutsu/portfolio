/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './Background-gradient-animation'
import { GlobeDemo } from './GridGlobe'
import animationData from '@/data/confetti.json'
import { useState } from 'react'
import Lottie from 'react-lottie'
import MagicButton from './MagicButton'
import { IoCafeOutline } from 'react-icons/io5'
export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto', className)}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  img?: string
  imgClassName?: string
  spareImg?: string
  titleClassName?: string
}) => {
  const [copied, setCopied] = useState(false)

  function handleClick() {
    navigator.clipboard.writeText('ismail.bardach.work@gmail.com')
    setCopied(true)
  }
  return (
    <div
      className={cn(
        'border border-white/10 row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(78,78,92,1) 35%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={title as string}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={title as string}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 text-white font-bold items-center justify-center' />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300'>
            {description}
          </div>
          <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>{title}</div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-2 w-max absolute top-0 right-0 capitalize'>
              <div className='flex flex-col gap-1 lg:gap-8 mt-2'>
                {['React.JS', 'Next.JS', 'TypeScript'].map((item) => (
                  <span
                    key={item}
                    className='py-2 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
                <span className='py-5 px-3 rounded-lg text-center bg-[#10132E]' />
              </div>
              <div className='flex flex-col gap-1 lg:gap-8'>
                <span className='py-5 px-3 rounded-lg text-center bg-[#10132E]' />
                {['Node.JS', 'MongoDB', 'MySQL'].map((item) => (
                  <span
                    key={item}
                    className='py-2 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='relative mt-5'>
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCafeOutline />}
                position='left'
                handleClick={handleClick}
                orderClasses='!bg-[#161a31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
