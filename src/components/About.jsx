import React from 'react'

function About() {
  return (
    <div className="w-full h-lvh grid grid-cols-2 gap-4 bg-[#1B263B]">
      <div>
        <img src='src/assets/profile.png' className="box transition ease-in-out delay-150
                                                     hover:translate-x-7 hover:translate-y-1
                                                     hover:scale-110 duration-300 " 
        alt='Profile photo'/>
      </div>
      <div className="text-[#E0E1DD]">
        <div className="pt-44 -ml-20 h-1/3 ">
          <h1 className='text-5xl hover:italic'>Hello, I'm Vaishnav Patange</h1>
          <p className="italic text-2xl mt-2">I am a fullstack web developer with proven expertise</p>
        </div>
      </div>
    </div>
  )
}

export default About
