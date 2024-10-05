import React from 'react'
import { ImArrowRight2 } from "react-icons/im";
const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 rounded-lg bg-opacity-30 p-12'>
      <div >
        <h1 className='text-2xl md:text-4xl font-bold'>About</h1>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img src='\software-developer-6521720_640.webp' className='md:h-80 m-4'/>
          <ul>
          <div className='flex gap-3 py-4'>
                <ImArrowRight2 size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Welcome to My Portfolio!</h1>
                    <p>Hi there! I’m Neeraj Kurmi, a passionate web developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With a deep love for creating seamless, dynamic web applications, I thrive on turning complex problems into elegant solutions.</p>
                </span>
            </div>
            <div className='flex gap-3 py-4'>
                <ImArrowRight2 size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>My Journey</h1>
                    <p>I began my journey in tech with a curiosity for how websites are built and the technology behind them. This fascination led me to dive deep into web development, where I discovered the power of the MERN stack. With its robust features and flexibility, I found it to be the perfect toolkit for crafting modern web applications that are both responsive and user-friendly.</p>
                </span>
            </div>
            <div className='flex gap-3 py-4'>
                <ImArrowRight2 size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Frontend Developer</h1>
                    <p>I'm frontend developer and love to work with react.js</p>
                </span>
            </div>
            <div className='flex gap-3 py-4'>
                <ImArrowRight2 size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Backend Developer</h1>
                    <p>I'm backend developer and love to work with express,node.js mongodb.</p>
                </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
