import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaCss3, label: "CSS3" },
  { Icon: FaReact, label: "React.js" },
  { Icon: FaJs, label: "JavaScript" },
  { Icon: FaFigma, label: "Figma" },
  { Icon: SiSpringboot, label: "Spring Boot" },
];

const Experience = () => {
  return (
    <section id="Experience" className="px-5 py-20 md:px-20">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 md:text-xl mb-10"
      >
        Technologies I Used
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map(({ Icon, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.25, rotate: 5 }}
            className="group flex flex-col items-center cursor-pointer"
          >
            <span className="p-4 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-lg group-hover:border-cyan-400/60 transition-all duration-300">
              <Icon size={55} className="group-hover:scale-110 transition-transform text-green-200" />
            </span>
            <span className="text-sm md:text-lg text-blue-300 group-hover:text-white transition-all mt-2">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
