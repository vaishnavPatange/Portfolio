import React from 'react'
import workImg from "../../assets/7358653-removebg-preview.png"
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id='about' className='text-white sm:flex overflow-hidden items-center sm:flex-wrap sm:justify-center bg-black shadow-xl
                      mx-0 sm:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl sm:text-4xl font-bold'>About</h2>
        <div className='sm:flex flex-wrap flex-col sm:flex-row items-center'>
            <img  className='sm:h-80' src={workImg} alt="" />

            <ul>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil quaerat delectus vel tempora, temporibus optio ad animi expedita nisi voluptatum adipisci ex ullam et blanditiis! Natus sed alias exercitationem.</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil quaerat delectus vel tempora, temporibus optio ad animi expedita nisi voluptatum adipisci ex ullam et blanditiis! Natus sed alias exercitationem.</p>
                  </span>

              </div>
              <div className='flex gap-3 py-4'>
                  <IoArrowForward size={30} className="mt-1" />

                  <span className='w-96'>
                    <h1 className='text-xl sm:text-2xl font-semibold leading-normal'>Full-Stack Developer</h1>
                    <p className='text-sm sm:texl-md leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil quaerat delectus vel tempora, temporibus optio ad animi expedita nisi voluptatum adipisci ex ullam et blanditiis! Natus sed alias exercitationem.</p>
                  </span>

              </div>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default About
