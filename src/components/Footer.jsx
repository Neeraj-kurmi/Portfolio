import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact-us</h1>
            <h1 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out !</h1>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'><MdOutlineEmail size={20}/>neerajkurmi2002@gmail.com</li>
            <li className='flex gap-1 items-center '><CiLinkedin/><a href="www.linkedin.com/in/neeraj-kurmi-365113283" target="_blank" className='cursor-pointer text-blue-400'>
            linkedin
              </a></li>
            <li className='flex gap-1 items-center '><FaGithub/><a href="https://github.com/Neeraj-kurmi" target="_blank" className='cursor-pointer text-blue-400'>
            github
              </a></li>
            <li className='flex gap-1 items-center '><SiLeetcode/><a href="https://leetcode.com/u/NRJ_/" target="_blank" className='cursor-pointer text-blue-400'>
            Leetcode
              </a></li>
        </ul>
    </div>
  )
}

export default Footer