import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dice Game",
    img: "/dice.png",
    desc: "A fun interactive dice game built in React.js.",
    demo: "http://game-livid-sigma.vercel.app",
    code: "https://github.com/Neeraj-kurmi/Game",
  },
  {
    title: "Eat More",
    img: "/eatmore.png",
    desc: "A full-stack food ordering app using React + Spring Boot.",
    demo: "https://eat-more-zeta.vercel.app/",
    code: "https://github.com/Neeraj-kurmi/EatMoreWebApp",
  },
  {
    title: "ZoBer",
    img: "/zoBer.png",
    desc: "A job search platform built full-stack.",
    demo: "https://zober.onrender.com/",
    code: "https://github.com/Neeraj-kurmi/zoBer",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="px-6 py-24 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.h1
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        className="text-3xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[340px] bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-700/40 hover:border-purple-500/50 transition-all duration-300 shadow-xl p-5"
          >
            <motion.img
              src={p.img}
              className="rounded-xl h-44 w-full object-cover mb-4"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-xl md:text-2xl font-bold text-blue-200">{p.title}</h3>
            <p className="text-sm md:text-base text-gray-300 mt-2">{p.desc}</p>

            <div className="flex gap-4 mt-6">
              <a href={p.demo} target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{scale:1.1}}
                  transition={{duration:0.3}}
                  className="px-4 py-2 rounded-full bg-blue-600 hover:opacity-85 transition-all text-blue-100"
                >
                  Demo
                </motion.button>
              </a>
              <a href={p.code} target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{scale:1.1}}
                  transition={{duration:0.3}}
                  className="px-4 py-2 rounded-full bg-indigo-600 hover:opacity-85 transition-all text-blue-100"
                >
                  Code
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
