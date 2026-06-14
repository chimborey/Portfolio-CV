import { motion } from "framer-motion"
import about from '../../assets/about.jpg'
export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

      {/* 🌌 background glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500 blur-[200px] opacity-20 rounded-full"></div>

      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center z-10">

        {/* 📸 LEFT - PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* glowing border */}
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 rounded-3xl"></div>

            {/* card */}
            <div className="relative w-72 cursor-pointer h-80 glass rounded-3xl p-4 border border-white/10">

              <img
                src={about}
                className="w-full h-48 object-cover rounded-2xl"
              />

              <div className="text-center mt-4">
                <h3 className="font-bold text-lg">Chim Borey</h3>
                <p className="text-blue-400 text-sm">
                  Full Stack + IT Support
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Available for freelance
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 🧠 RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-bold">About Me</h2>

          <p className="text-blue-400 mt-2 text-lg">
            Frontend Developer
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            I am a Web Developer with experience in Frontend development and basic knowledge of Backend and IT Support.
            I specialize in building responsive and user-friendly web applications using React, JavaScript, and Tailwind CSS.
            I also have experience working with backend technologies like Spring Boot and MySQL, and basic IT support skills such as system troubleshooting and networking.
            Currently, I am focusing on improving my frontend development skills while expanding my full-stack knowledge.
          </p>

          {/* 📊 STATS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Frontend</p>
              <p className="text-gray-300 text-sm">React / Tailwind</p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Backend</p>
              <p className="text-gray-300 text-sm">Spring Boot / ASP.Net <span className="text-green-500 font-bold">(Studing)</span></p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Database</p>
              <p className="text-gray-300 text-sm">Posgresql</p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">IT Support <span className="text-green-500 font-bold">(Studing)</span></p>
              <p className="text-gray-300 text-sm">Network / Troubleshooting</p>
            </div>

          </div>

          {/* 🧾 BUTTON */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg">
              Download CV
            </button>

           <a href="#contact">
             <button className="px-6 py-2 border border-white/30 rounded-xl hover:scale-105 transition">
              Contact Me
            </button>
           </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}