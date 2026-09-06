import { motion } from "framer-motion"
import about from '../../assets/about.jpg'
import CV_Portfolio from "../../assets/CV_Portfolio.pdf"
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
            I am an Information Technology student with a strong passion for designing and developing modern web applications. I enjoy learning new technologies and building projects to apply and strengthen my knowledge. Currently, I am focused on React.js, Tailwind CSS, and integrating frontend applications with Spring Boot REST APIs. My goal is to become a Frontend Developer who creates high-quality, user-friendly web applications with clean, responsive designs and outstanding user experiences (UI/UX).
          </p>

          {/* 📊 STATS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Frontend</p>
              <p className="text-gray-300 text-sm">React / Tailwind</p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Backend</p>
              <p className="text-gray-300 text-sm">Java Springboot(Basic) / MERN(Basic) <span className="text-green-500 font-bold">(Studing)</span></p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">Database</p>
              <p className="text-gray-300 text-sm">Posgresql / Mongodb</p>
            </div>

            {/* <div className="glass p-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-blue-400 font-bold">IT Support <span className="text-green-500 font-bold">(Studing)</span></p>
              <p className="text-gray-300 text-sm">Network / Troubleshooting</p>
            </div> */}

          </div>

          {/* 🧾 BUTTON */}
          <div className="mt-6 flex gap-4">
            <div>
              <a
                href={CV_Portfolio}
                download="Chim_Borey_CV.pdf" // ពេលចុចវា會 Download ជាមួយឈ្មោះនេះផ្ទាល់
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:text-black transition-all duration-300 text-center"
              >
                Download CV
              </a>
            </div>

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