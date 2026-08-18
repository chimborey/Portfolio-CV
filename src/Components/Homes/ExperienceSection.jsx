import { motion } from "framer-motion"

const experiences = [
      {
            year: "2026 - Present",
            title: "Frontend Developer — Learning & Building",
            desc: "Developing responsive web interfaces using React, JavaScript, Tailwind CSS, and modern frontend tools.",
      },
      {
            year: "2025 - 2026",
            title: "Web Development Student",
            desc: "Learning frontend development, UI/UX principles, responsive design, REST APIs, and modern web technologies.",
      },
      {
            year: "2025",
            title: "Personal Projects",
            desc: "Building personal websites and web applications to practice frontend development and improve real-world development skills.",
      },
]

export default function Experience() {
      return (
            <section className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

                  {/* Glow Background */}
                  <div className="absolute w-[600px] h-[600px] bg-purple-500 blur-[180px] opacity-20 rounded-full"></div>

                  <div className="max-w-4xl w-full z-10">

                        {/* TITLE */}
                        <motion.h2
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-4xl font-bold text-center mb-12"
                        >
                              My Journey
                        </motion.h2>

                        {/* TIMELINE */}
                        <div className="relative border-l border-white/20 pl-6 space-y-10">

                              {experiences.map((exp, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, x: 50 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          transition={{ delay: index * 0.2 }}
                                          viewport={{ once: true }}
                                          className="relative"
                                    >

                                          {/* DOT */}
                                          <div className="absolute -left-[30px] top-6 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

                                          {/* CARD */}
                                          <div className="glass p-5 rounded-2xl border border-white/10 hover:scale-[1.02] transition">

                                                {/* YEAR */}
                                                <p className="text-blue-400 text-sm font-bold">
                                                      {exp.year}
                                                </p>

                                                {/* TITLE */}
                                                <h3 className="text-xl font-bold mt-1">
                                                      {exp.title}
                                                </h3>

                                                {/* DESCRIPTION */}
                                                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                                                      {exp.desc}
                                                </p>

                                          </div>

                                    </motion.div>
                              ))}

                        </div>
                  </div>
            </section>
      )
}