import React from 'react';
import profile from "../../assets/profile.png"

const Home = () => {
  return (
    <div className='text-white flex flex-wrap sm:flex-none w-full justify-center items-start p-10 sm:p-20'>
      <div>
        <img className='w-3/4' src={profile} alt="" />
      </div>
      <div className='sm:w-2/4 sm:p-10 min-w-96'>
        <h1 className=' text-3xl sm:text-6xl font-bold flex leading-normal tracking-tighter'>
         Hello, I'm Vaishnav
        </h1>
        <p className='text-sm sm:text-2xl tracking-tighter mt-1'>
          A Result driven Full-stack web developer in MERN and ASP.NET
        </p>
        <button className='mt-5 sm:mt-10 text-white py-2 px-3 text-sm sm:text-lg sm:py-2 sm:px-4
                           hover:opacity-85 hover:scale-105 duration-100 font-semibold rounded-3xl bg-[#465697]' >
          Contact me
        </button>
      </div>
    </div>
  )
}

export default Home
