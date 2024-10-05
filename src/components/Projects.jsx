import React from "react";

const Projects = () => {
  return (
    <div id="Projects" className="md:flex  text-white md:p-24 p-10">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <div className="p-3 md:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-[#0c0e19]">
          <img src='\public\dice.png' className="md:h-40 h-40 m-4 "/>
          <h3 className=" px-3 text-xl md:text-2xl font-bold leading-normal">
            Dice Game
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">
            this is a game of dice user can play with fun and enjoy their moves created in React.js.
          </p>
          <div className="mt-2 p-2 flex gap-2 md:gap-4">
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
              <a href="http://game-livid-sigma.vercel.app" target="_blank">
                Demo
              </a>
            </button>
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
             <a href="https://github.com/Neeraj-kurmi/Game" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <div className="p-3 md:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-[#0c0e19]">
        <img src='\public\contactApp.png' className="md:h-40 h-40 m-4 "/>
          <h3 className=" px-3 text-xl md:text-2xl font-bold leading-normal">
            Contact Saving Application
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-1">
            this is an application which help to save contacts created in
            React.js ,tailwind css and FireBase
          </p>
          <div className="mt-1 md:p-4 flex gap-2 md:gap-4">
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
              Demo
            </button>
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
              <a href="https://github.com/Neeraj-kurmi/Contact_Saving_App" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <div className="p-3 md:p-6 flex flex-col w-80 shadow-xl shadow-slate-900 rounded-2xl bg-[#0c0e19]">
        <img src='\public\zoBer.png' className="md:h-40 h-40 m-4 "/>
          <h3 className=" px-3 text-xl md:text-2xl font-bold leading-normal">
            zoBer
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">
            this is a FullStack website which help to serch-find-get-job created
            in React.js ,Mongodb ,Express ,Node
          </p>
          <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
              <a href="https://zober.onrender.com/" target="_blank">
                Demo
              </a>
            </button>
            <button
              className=" md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 bg-[#465697]
        duration-300 hover:scale-105 font-semibold rounded-3xl"
            >
              <a href="https://github.com/Neeraj-kurmi/zoBer" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
