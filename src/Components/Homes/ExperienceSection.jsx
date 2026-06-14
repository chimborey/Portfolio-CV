import { motion } from "framer-motion"

const experiences = [
      {
            year: "2026 - Present",
            title: "Full Stack Developer",
            desc: "Building scalable web applications using React & Spring Boot",
      },
      {
            year: "2025",
            title: "IT Support Engineer",
            desc: "Handled networking, troubleshooting, system maintenance",
      },
      {
            year: "2024",
            title: "Intern Developer",
            desc: "Learned web development, APIs, and system support basics",
      },
]

export default function Experience() {
      return (
            <section className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

                  {/* 🌌 glow background */}
                  <div className="absolute w-[600px] h-[600px] bg-purple-500 blur-[180px] opacity-20 rounded-full"></div>

                  <div className="max-w-4xl w-full z-10">

                        {/* TITLE */}
                        <motion.h2
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              className="text-4xl font-bold text-center mb-12"
                        >
                              Experience
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
                                          <div className="absolute -left-[30px] top-14 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

                                          {/* CARD */}
                                          <div className="glass p-5 rounded-2xl border border-white/10 hover:scale-105 transition">

                                                {/* YEAR */}
                                                <p className="text-blue-400 text-sm font-bold">
                                                      {exp.year}
                                                </p>

                                                {/* TITLE */}
                                                <h3 className="text-xl font-bold mt-1">
                                                      {exp.title}
                                                </h3>

                                                {/* DESC */}
                                                <p className="text-gray-300 text-sm mt-2">
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