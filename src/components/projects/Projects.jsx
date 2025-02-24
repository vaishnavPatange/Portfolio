import React from 'react'
import ProjectCard from './ProjectCard'
import exp from "../../assets/home.png"
import med from "../../assets/test.png"
import nar from "../../assets/narrato.png"


const Projects = () => {
  return (
    <div id='projects' className='p-10 sm:p-24'>
      <h1 className='text-2xl sm:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-20'>
        <ProjectCard title={"MediaVault"} img={med} main={"This is media streaming web application built using MERN and implemented secure authenticationa and authorization"} link={"https://github.com/vaishnavPatange/MediaVault"}/>
        <ProjectCard title={"Narrato"} img={nar} main={"A blog web app that allows users to create, edit, and share engaging posts with a responsive design"} link={"https://github.com/vaishnavPatange/Narrato"}/>
        <ProjectCard title={"Expense Tracker"} img={exp} main={"The Expense Tracker is a web app for managing income and expenses with categorized tracking, summaries, and data visualization."} link={"https://github.com/vaishnavPatange/Expense-Tracker"}/>
      </div>
    </div>
  )
}

export default Projects
