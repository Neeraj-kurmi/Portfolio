import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listHover = {
    whileHover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="About"
      className="text-white flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-6xl w-full bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 shadow-2xl rounded-2xl p-6 md:p-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Image Section */}
          <motion.img
            src="/software-developer-6521720_640.webp"
            alt="developer"
            className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          {/* About List */}
          <ul className="space-y-6 w-full max-w-xl">
            {[
              {
                title: "Welcome to My Portfolio!",
                desc: "Hi there! I’m Neeraj Kurmi, a passionate full-stack developer (MongoDB, Spring Boot, SQL, React). I love turning complex problems into elegant digital experiences.",
              },
              {
                title: "My Journey",
                desc: "I started with curiosity about how the web works. That led me to dive deep into full-stack tech, building responsive and user-friendly apps with scalable backends.",
              },
              {
                title: "Frontend Developer",
                desc: "I craft interactive UI using React.js with clean and modern design systems.",
              },
              {
                title: "Backend Developer",
                desc: "I build scalable services using Spring Boot, MongoDB, and SQL.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                {...listHover}
                className="flex gap-4 items-start bg-gray-900/40 hover:bg-gray-900/70 p-4 md:p-6 rounded-2xl border border-gray-700/40 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0px 0px 20px rgba(59,130,246,0.3)" }}
              >
                <ImArrowRight2
                  size={28}
                  className="mt-1 text-blue-400 shrink-0 animate-pulse"
                />
                <div>
                  <h2 className="text-xl md:text-3xl font-bold mb-2 text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
