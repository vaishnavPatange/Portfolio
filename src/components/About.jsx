import React from 'react'

function About() {
  return (
    <div className='grid sm:grid-col-12  px-4'>
        <div className='sm:col-span-4 object-fill px-4'>
          <img src="src/assets/profile.png" alt="profile"/>
        </div>
        <div className='sm:col-span-8 border'>
          <h1>
            Hello, I'm Vaishnav Patange
          </h1>
        </div>
    </div>
  )
}

export default About
