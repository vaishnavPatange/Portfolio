import React from 'react'

function About() {
  return (
    <div className="w-full h-lvh grid grid-cols-2 gap-4 bg-[#1B263B]">
      <div>
        <img src='src/assets/profile.png' alt='Profile photo'/>
      </div>
      <div className="text-[#E0E1DD]">
        <div className="pt-44 -ml-20 h-1/3 ">
          <h1 className='text-5xl hover:italic'>Hello, I'm Vaishnav Patange</h1>
          <p className="text-2xl mt-2">A result driven full-stack developer, expertice in 
            <br />MERN full-stack Web development, and ASP.NET Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
