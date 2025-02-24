import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id='about' className='text-white sm:flex overflow-hidden items-center sm:flex-wrap sm:justify-center bg-black shadow-xl
                      mx-0 sm:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl sm:text-4xl font-bold'>About</h2>
        <div className='sm:flex flex-wrap flex-col sm:flex-row items-center gap-12'>

            <ul>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Crafts engaging and interactive user interfaces with modern web technologies. Focuses on responsive and accessible design for an optimal user experience..</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Builds robust and scalable server-side applications, ensuring seamless data processing. Implements APIs, databases, and authentication for secure and efficient systems.</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Full-Stack Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Combines frontend and backend expertise to develop end-to-end web applications. Bridges the gap between design and functionality for a smooth user journey.</p>
                  </span>

              </div>
            </ul>
            <ul>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>UI/UX Designer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Designs visually appealing and user-friendly interfaces, enhancing usability. Conducts research and prototyping to create intuitive digital experiences.</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Software Engineer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Develops scalable software solutions tailored to business needs. Specializes in problem-solving, algorithm optimization, and performance tuning.</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Software Architect</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Designs the overall structure and framework of software applications. Ensures scalability, performance, and maintainability in system architecture.</p>
                  </span>

              </div>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default About
