import { motion } from "framer-motion";
import project from '../../assets/project.jpg';

function SkillBar({ label, value, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
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
      {/* 🌌 Background Glows */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 blur-[180px] opacity-20 rounded-full top-0 left-0 -z-10"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-500 blur-[180px] opacity-10 rounded-full bottom-0 right-0 -z-10"></div>

      {/* 🔥 MAIN GRID (items-stretch ធ្វើឱ្យកម្ពស់ស្មើគ្នា) */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-stretch z-10">

        {/* 💻 LEFT - រូបភាពស្មើកម្ពស់ */}
        {/* 💻 LEFT - រូបភាពទំហំតូចល្មម (Compact) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center" // ធ្វើឱ្យរូបភាពនៅកណ្តាល
        >
          <div className="relative w-full max-w-sm h-auto aspect-[3/4]"> {/* កំណត់ទំហំរូបភាពឱ្យតូចល្មម */}
            <img
              src={project}
              alt="Skills"
              className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
            />
            {/* បន្ថែមស៊ុមតុបតែងតូចមួយ */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
          </div>
        </motion.div>

        {/* 🧠 RIGHT - SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between" // ប្រើ justify-between ឱ្យវាពេញកម្ពស់
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Full Stack</h2>
            <SkillBar label="Frontend (React JS, Next JS)" value={90} color="#00aaff" />
            <SkillBar label="Backend (Java, C#)" value={85} color="#7c3aed" />
            <SkillBar label="Database (Postgresql)" value={80} color="#22c55e" />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">IT Support</h2>
            <SkillBar label="Networking" value={85} color="#38bdf8" />
            <SkillBar label="Troubleshooting" value={90} color="#ef4444" />
            <SkillBar label="Windows / Linux" value={80} color="#a855f7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}