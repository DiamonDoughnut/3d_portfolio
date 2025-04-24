import { cn } from '@/lib/utils'
import React from 'react'

const Alert = ({ type, text, ...props}) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div className={cn("p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center" ,type === 'danger' ? "bg-red-800" : "bg-blue-800")} role='alert'>
            <p className={cn('flex rounded-full uppercase px-2 py-1 font-semibold text-xs mr-3', type === 'danger' ? "bg-red-500" : 'bg-blue-500')}>{type === 'danger' ? 'Failed!' : 'Success!'}</p>
            <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  )
}

export default Alert