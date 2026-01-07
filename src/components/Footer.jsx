import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 text-white px-6 py-14 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-extrabold">Contact Me</h1>
        <p className="text-sm md:text-2xl mt-2 opacity-90">Feel Free To Reach Out!</p>
      </motion.div>

      <ul className="space-y-4 text-sm md:text-xl">
        <li className="flex items-center justify-center md:justify-start gap-2">
          <MdOutlineEmail size={22} /> neerajkurmi2002@gmail.com
        </li>

        {[
          { Icon: CiLinkedin, label: "LinkedIn", link: "#" },
          { Icon: FaGithub, label: "GitHub", link: "#" },
          { Icon: SiLeetcode, label: "LeetCode", link: "#" },
        ].map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.2, rotate: 3 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center md:justify-start gap-2 cursor-pointer hover:text-cyan-300"
          >
            <item.Icon size={24} />
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
