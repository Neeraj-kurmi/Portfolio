 import React from 'react'
 
 const Home = () => {
   return (
     <div className='text-white flex w-full justify-center items-center p-10 md:p-20'>
         <div className='md:w-2/4 md:pt-10'>
            <h1 className='mr-3 text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hi ,I'm Neeraj</h1>
            <h3 className='m-3 text-sm md:text-2xl tracking-tighter'>I am web Developer</h3>
            <button className='mt-5 md:md-10 text-white py-2 text-sm md:text-lg md:py-2 px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-900 border border-orange-400'>Contact me</button>
         </div>
     </div>
   )
 }
 
 export default Home