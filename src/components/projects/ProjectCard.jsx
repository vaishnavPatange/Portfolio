import React from 'react'

const ProjectCard = ({ title, main, link, img }) => {
  return (
    <div className='p-3 sm:p-6 ml-10 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-[#0c0e19]'>
      <img className='p-4' src={img} alt="" />
      <h3 className='px-4 text-xl sm:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm sm:text-md leading-tight py-2 '>{main}</p>
      <div className='mt-2 p-2 sm:p-4 flex gap-2 sm:gap-4'>
        {/* <button className='sm:mt-10 text-white px-2 py-3 text-sm sm:text-lg sm:py-2 sm:px-4 hover:opacity-85
                           duration-300 scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Demo                    
        </button> */}
        <a className='sm:mt-10 text-white px-2 py-3 text-sm sm:text-lg sm:py-2 sm:px-4 hover:opacity-85
                           duration-300 scale-105 font-semibold rounded-3xl bg-[#465697] no-underline'
                           href={link} target='_n'>
            Source Code                    
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
