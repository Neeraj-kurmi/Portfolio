import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen text-white flex justify-center items-center px-5 py-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.2] pb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Hi, I'm Neeraj
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.9, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-gray-300 text-lg md:text-2xl mt-5"
        >
          I build modern, scalable and user-friendly web applications
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-gray-400 text-sm md:text-lg mt-3"
        >
          • Java • Full Stack Developer • Problem Solver • Tech Enthusiast
        </motion.p>

        <motion.button
          onClick={() =>
            document
              .getElementById("Footer")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 px-7 py-3 text-base md:text-xl font-semibold rounded-full bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
