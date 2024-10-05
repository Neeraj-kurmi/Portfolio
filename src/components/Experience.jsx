import React from 'react'
import { FaCss3,FaFigma,FaHtml5,FaJs, FaReact } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { RiNetflixFill } from '@remixicon/react'
import { FaAmazon } from 'react-icons/fa'
const Experience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24'>
        <h3 className='text-2xl md:text-4xl text-white font-bold'>Experience</h3>
        <h1 className=" text-white px-3 text-xl md:text-2xl font-bold leading-normal pt-2"> > Technologies I Used</h1>
           <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-20'>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color="#E34F26" size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color="#1572b6" size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color="#61DAFB" size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs  color="F2DF1E" size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaFigma color="#F24E1E" size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color="#47A248" size={50}/>
            </span>
           
        </div>
    </div>
  )
}

export default Experience