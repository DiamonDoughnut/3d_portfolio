'use client'

import React from 'react'
import {skills, experiences} from '../../../constants/index'
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../../../components/CTA'

const About = () => {
  return (
    <section className='w-[75%] flex flex-col mx-auto h-full mt-24 px-20 text-slate-200'>
      <h1 className='text-2xl font-bold'>
        Hello! I'm <span className='text-transparent bg-clip-text bg-gradient-to-r drop-shadow-sm drop-shadow-slate-300 from-blue-500 to-blue-700'>Caleb!</span> <span className="text-base font-normal text-slate-400"> <br/> (also known as <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-l drop-shadow-xs drop-shadow-slate-300 from-indigo-500 to-indigo-700">DiamonDoughnut</span>)</span>
      </h1>
        <div className='text-lg font-normal md:w-1/2 mt-5 pl-4 flex flex-col gap-3 text-slate-400'>
          <p>
            I'm a Web Developer based in Texas, USA, specializing in interesting and interactive web design with a wide range of technological implements.
          </p>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='text-xl font-bold text-slate-200'>My Skills</h3>
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map(skill => (
              <div key={skill.name} className='w-20 h-20 bg-gradient-to-tl from-slate-50/10 flex items-center rounded-xl justify-center to-slate-50/40'>
                <div className='rounded-xl flex justify-center items-center hover:scale-150 transition-all w-full h-full'>
                  <Image src={'/' +skill.imageUrl + ".svg"} alt={skill.name} height={20} width={20} className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='py-16'>
          <h3 className='text-xl font-bold text-slate-200'>
            My Experience
          </h3>
          <div className='text-lg font-normal md:w-1/2 mt-5 pl-4 flex flex-col gap-3 text-slate-400'>
          <p>
            I've worked in multiple professional settings, learning new skills and teaming up with amazing people in every way! Here's a summary: 
          </p>
        </div>
        <div className='mt-12 flex flex-col items-center justify-center'>
          <VerticalTimeline>
            {experiences.map(experience => (
              <VerticalTimelineElement key={experience.date} date={experience.date} icon={<div className={`flex justify-center items-center h-full w-full rounded-full`}>
                <Image src={'/' + experience.icon + '.png'} alt={experience.icon} height={20} width={20} className='h-[60%] w-[60%] object-contain mx-auto' />
              </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
                iconStyle={{
                  background: experience.iconBg
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-slate-500 text-lg font-semibold' style={{margin: "0"}}>{experience.company_name}</p>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li className='text-slate-700 font-normal pl-1 text-sm' key={`experience-point-${index}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>
        <hr className='border-slate-600' />
        <CTA/>
    </section>
  )
}

export default About