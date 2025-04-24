import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='w-full py-4 h-fit flex flex-col sm:justify-between my-12 sm:flex-row items-center justify-center'>
        <p className='text-xl font-bold text-center w-1/2'>Have a project in mind?
            <br className='sm:block hidden'/>
            Let&apos;s build something together!
        </p>
        <Link href={'/contact'} className='w-full sm:w-fit sm:px-2 h-12 text-center flex items-center justify-center bg-blue-500 rounded-xl drop-shadow-lg drop-shadow-blue-400 text-lg font-bold py-auto my-3 hover:bg-blue-400 transition-all'>Contact Me!</Link>
    </section>
  )
}

export default CTA