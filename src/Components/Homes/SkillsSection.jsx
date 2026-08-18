import { motion } from "framer-motion";
import project from "../../assets/project.jpg";

function SkillBar({ label, value, color, status }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-gray-200 font-medium">
          {label}
        </span>

        <span className="text-xs text-gray-400">
          {status}
        </span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 blur-[180px] opacity-20 rounded-full top-0 left-0 -z-10" />

      <div className="absolute w-[600px] h-[600px] bg-blue-500 blur-[180px] opacity-10 rounded-full bottom-0 right-0 -z-10" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[3/4]">

            <img
              src={project}
              alt="Frontend Development"
              className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
            />

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl -z-10" />

          </div>
        </motion.div>

        {/* ================= SKILLS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* FRONTEND */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-blue-400 mb-6">
              Frontend Development
            </h2>

            <SkillBar
              label="HTML / CSS"
              value={90}
              status="Advanced"
              color="#f97316"
            />

            <SkillBar
              label="JavaScript"
              value={80}
              status="Intermediate"
              color="#eab308"
            />

            <SkillBar
              label="React.js"
              value={80}
              status="Intermediate"
              color="#38bdf8"
            />

            <SkillBar
              label="Tailwind CSS"
              value={80}
              status="Intermediate"
              color="#06b6d4"
            />

          </div>

          {/* JAVA SPRING BOOT */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Backend
            </h2>

            <SkillBar
              label="Java + Spring Boot"
              value={45}
              status="Basic • Studying"
              color="#a855f7"
            />

          </div>

          {/* MERN */}
          <div>

            <h2 className="text-2xl font-bold text-green-400 mb-6">
              Full Stack — Studying
            </h2>

            <SkillBar
              label="MERN Stack"
              value={40}
              status="Basic • Studying"
              color="#22c55e"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}