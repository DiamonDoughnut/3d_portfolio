import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InfoBox = ({text, link, btnText}) => (
    <div className='w-full md:w-[50%] bg-blue-500 text-white rounded-2xl flex justify-center flex-col pointer-events-auto drop-shadow-blue-700 drop-shadow-2xl pt-4 px-8 mx-5 items-center'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link href={link} className='bg-white sm:text-xl sm:leading-snug text-center translate-y-4 text-blue-500 py-4 px-8 rounded-xl drop-shadow-white drop-shadow-md flex items-center justify-center gap-x-3 w-fit'>
            {btnText}
            <Image src={'/arrow.svg'} alt='' height={10} width={10} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    0: (
        <h1 className='sm:text-xl sm:leading-snug text-center bg-blue-500 py-4 px-8 text-white mx-5 rounded-xl drop-shadow-blue-700 drop-shadow-2xl'>
            Hi, I&apos;m <span className='font-semibold'>Caleb</span> 👋 <br />
            A software engineer from Texas
        </h1>
    ),
    1: (
        <InfoBox 
          text="Need a project done or looking for a dev? I'm just a couple clicks away!" 
          link="/contact" 
          btnText="Let's talk" 
        />
    ),
    2: (
        <InfoBox 
          text="I've worked on many projects and picked up multiple skills along the way. Would you like a break-down?" 
          link="/about" 
          btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
          text="I've created multiple projects in varying environments with great success. Want to know more?" 
          link="/projects" 
          btnText="View my portfolio" 
        />
    ),
}

const HomeInfo = ({currentStage, ...props}) => {
  return renderContent?.[currentStage] || null;
}

export default HomeInfo
