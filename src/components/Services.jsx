import React from 'react'
import Card from './Card'

function Services() {

    let services = [
        {
            name: "Frontend",
            bg_image: "bg-[url('./assets/frontend.jpeg')]"
        },
        {
            name: "Backend",
            bg_image: "bg-[url('./assets/backend.png')]"
        },
        {
            name: "MERN",
            bg_image: "bg-[url('./assets/mern.jpeg')]"
        },
        {
            name: "ASP.NET",
            bg_image: "bg-[url('./assets/asp.jpeg')]"
        },
    ]


  return (
    <div className='flex-wrap'>
      {
        services.map((service, idx) => (
            <Card children={service.name} key={idx} bg_image={service.bg_image}/>
        ))
      }
    </div>
  )
}

export default Services
