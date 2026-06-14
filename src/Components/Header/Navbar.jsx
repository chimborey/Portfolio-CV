import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
      const [scrolled, setScrolled] = useState(false);
      const [open, setOpen] = useState(false);
      const [activeLink, setActiveLink] = useState("home");

      const navRef = useRef(null);

      const links = [
            "Home",
            "About",
            "Skills",
            "Projects",
            "Education",
            "Experience",
            "Contact",
      ];

      // Scroll background effect
      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 30);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      // Click outside close (FIXED PROPERLY)
      useEffect(() => {
            const handleClickOutside = (e) => {
                  if (navRef.current && !navRef.current.contains(e.target)) {
                        setOpen(false);
                  }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                  document.removeEventListener("mousedown", handleClickOutside);
      }, []);

      // Smooth scroll handler (NO anchor bug)
      const handleNavClick = (id) => {
            setActiveLink(id);
            setOpen(false); // 🔥 always close FIRST

            setTimeout(() => {
                  document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                  });
            }, 50);
      };

      return (
            <motion.nav
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="fixed top-4 left-0 right-0 z-50 flex justify-center"
            >
                  <div
                        ref={navRef}
                        className={`w-[95%] max-w-7xl transition-all duration-300 rounded-2xl px-6 py-4 ${scrolled
                                    ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl"
                                    : "bg-white/5 backdrop-blur-md border border-white/5"
                              }`}
                  >
                        <div className="flex items-center justify-between text-white">

                              {/* LOGO */}
                              <motion.h1
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => handleNavClick("home")}
                                    className="text-2xl font-bold cursor-pointer"
                              >
                                    <span className="text-cyan-400">Chim</span>Borey
                              </motion.h1>

                              {/* DESKTOP MENU */}
                              <div className="hidden lg:flex items-center gap-8">
                                    {links.map((item) => {
                                          const id = item.toLowerCase();

                                          return (
                                                <button
                                                      key={item}
                                                      onClick={() => handleNavClick(id)}
                                                      className={`relative group text-sm font-medium transition ${activeLink === id
                                                                  ? "text-cyan-400"
                                                                  : "text-white hover:text-cyan-400"
                                                            }`}
                                                >
                                                      {item}

                                                      <span
                                                            className={`absolute -bottom-2 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${activeLink === id
                                                                        ? "w-full"
                                                                        : "w-0 group-hover:w-full"
                                                                  }`}
                                                      />
                                                </button>
                                          );
                                    })}
                              </div>

                              {/* CTA */}
                              <div className="hidden lg:block">
                                    <button
                                          onClick={() => handleNavClick("contact")}
                                          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium"
                                    >
                                          Hire Me
                                    </button>
                              </div>

                              {/* MOBILE BUTTON */}
                              <button
                                    className="lg:hidden text-3xl"
                                    onClick={() => setOpen((prev) => !prev)}
                              >
                                    {open ? <HiX /> : <HiMenuAlt3 />}
                              </button>
                        </div>

                        {/* MOBILE MENU */}
                        <AnimatePresence>
                              {open && (
                                    <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="lg:hidden overflow-hidden"
                                    >
                                          <div className="pt-6 flex flex-col gap-4 text-white">
                                                {links.map((item) => {
                                                      const id = item.toLowerCase();

                                                      return (
                                                            <button
                                                                  key={item}
                                                                  onClick={() => handleNavClick(id)}
                                                                  className={`text-left transition ${activeLink === id
                                                                              ? "text-cyan-400"
                                                                              : "text-white hover:text-cyan-400"
                                                                        }`}
                                                            >
                                                                  {item}
                                                            </button>
                                                      );
                                                })}

                                                <button
                                                      onClick={() => handleNavClick("contact")}
                                                      className="mt-3 text-center py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400"
                                                >
                                                      Hire Me
                                                </button>
                                          </div>
                                    </motion.div>
                              )}
                        </AnimatePresence>
                  </div>
            </motion.nav>
      );
}