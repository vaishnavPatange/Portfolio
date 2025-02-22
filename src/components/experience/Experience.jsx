import React from 'react'
import { FaCss3, FaReact, FaHtml5, FaJs, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Experience = () => {
  return (
    <div id='experience' className='p-10 sm:p-24'>
      <h1 className='text-2xl sm:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap sm:w-2/5 gap-8 sm:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572B6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJava size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color='#47A248' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMysql color='#FF4438' size={50} />
          </span>
        </div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <span className='text-white'>
            <h2 className='leading-tight'>Software Intern, SBS Mindscript Solutions</h2>
            <p className='text-sm leading-tight font-thin'>Jan 24 - July 24</p>
            <ul className=' text-sm p-2'>
              <li>- Worked as Web Developer Inter</li>
              <li>- Delivered 2+ Projects</li>
            </ul>
          </span>

        </div>
      </div>
      
    </div>
  )
}

export default Experience
