import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#About" },
  { name: "Experience", href: "#Experience" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Footer" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white px-6 md:px-20 py-5 bg-black/60 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-gray-800/40">
      <motion.span
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-bold tracking-wide"
      >
        Portfolio
      </motion.span>

      <ul className="hidden md:flex gap-7 text-lg font-medium">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="hover:text-cyan-400 transition-all duration-300"
          >
            <li>{link.name}</li>
          </a>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.2 }} className="md:hidden cursor-pointer">
        <RiMenu2Line size={30} onClick={() => setMenu(true)} />
      </motion.div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed top-0 right-0 w-[70%] sm:w-[50%] h-full bg-gradient-to-b from-black via-gray-900 to-black p-6 shadow-2xl border-l border-gray-800"
          >
            <div className="flex justify-end">
              <motion.span whileHover={{ rotate: 90 }}>
                <RiCloseLine size={30} onClick={() => setMenu(false)} className="cursor-pointer" />
              </motion.span>
            </div>

            <ul className="mt-10 space-y-6 text-xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:text-blue-400 transition-all duration-300 cursor-pointer"
                >
                  <a href={link.href} onClick={() => setMenu(false)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
