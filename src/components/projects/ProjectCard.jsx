import React from 'react'

const ProjectCard = ({ title }) => {
  return (
    <div className='p-3 sm:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-[#0c0e19]'>
      <img className='p-4' src="" alt="" />
      <h3 className='px-4 text-xl sm:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p></p>
    </div>
  )
}

export default ProjectCard
