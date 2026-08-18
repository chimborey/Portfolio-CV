
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import hero from '../../assets/hero.jpg'
import { GrGithub } from "react-icons/gr";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const techs = [
  {
    label: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    label: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    label: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    label: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
  },
  {
    label: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    label: "Vite",
    icon: "https://vitejs.dev/logo.svg",
  },
  {
    label: "Java",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    label: "Spring Boot",
    icon: "https://spring.io/img/projects/spring.svg",
  },
  {
    label: "Node.js",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    label: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Git",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
  },
  {
    label: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const HeroSection = () => {

  const meta = [
    {
      icon: <FaFacebookF />,
      path: "https://www.facebook.com/share/1BN6HNkeKF/",
    },
    {
      icon: <BsTelegram />,
      path: "https://t.me/software_engineer25",
    },
    {
      icon: <GrGithub />,
      path: "https://github.com/chimborey",
    },
    {
      icon: <FaTiktok />,
      path: "https://www.tiktok.com/@code_khmer_core?_r=1&_t=ZS-97Azl337xHp",
    },
  ];
  const roles = ["Frontend Developer", "Backend Developer", "Full-stack Developer", "IT Support"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // កំណត់ចលនាសម្រាប់អក្សរ
  const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0c] text-white overflow-hidden flex items-center px-6 md:px-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed">
      {/* 1. Background ពណ៌ខ្មៅ (នៅក្រោមគេបំផុត) */}
      <div className="absolute inset-0 bg-[#0a0a0c] -z-10" />
      {/* 3. រូបភាព Database (នៅពីលើ Background ខ្មៅ តែនៅក្រោម Content) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')",
          zIndex: 0
        }}
      />
      {/* 4. ស្រទាប់ពណ៌ខ្មៅស្រាល (Overlay) ដើម្បីឱ្យអក្សរច្បាស់ */}
      <div className="absolute inset-0 bg-[#0a0a0c]/80 z-[1]" />
      {/* 5. Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full z-[2]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-900/10 blur-[100px] rounded-full z-[2]" />
      {/* 6. Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-[3]">

        {/* Left Side: Content */}
        <div className="flex-1 space-y-6">

          {/* Title & Description Section */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-400 font-medium tracking-widest uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chim Borey</span>
            </motion.h1>
          </div>
          {/* Text Rotator Section */}
          <div className="text-2xl font-semibold flex items-center">
            <span>And I'm a&nbsp;</span>
            <motion.div
              key={roles[index]}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-cyan-400 flex items-center"
            >
              {roles[index].split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[2px] h-7 bg-cyan-400 ml-1 inline-block"
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-md leading-relaxed"
          >
            I am an Information Technology student with a strong interest in Frontend Development. I enjoy building websites with clean UI, responsive design, and a great user experience.
            I am currently seeking a Frontend Developer Internship opportunity where I can further develop my technical skills, gain practical experience, and contribute to real-world projects.
          </motion.p>
          <div className="flex gap-4">
            {meta.map((item, index) => (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:text-black transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Right Side: Image & Animated Icons */}
        <div className="relative flex items-center justify-center w-[500px] h-[500px]">

          {/* Animated Orbit Container */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            {techs.map((tech, index) => {
              const angle = (360 / techs.length) * index;
              const radius = 220;
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center w-24">
                    <div className="w-12 h-12 bg-gray-900 cursor-pointer rounded-full flex items-center justify-center border border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] overflow-hidden">
                      <img
                        src={tech.icon}
                        alt={tech.label}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="text-[10px] mt-1 text-white font-bold">{tech.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute w-[438px] h-[438px] rounded-full border border-cyan-500/20" />
          {/* Profile Image */}
          <div className="relative p-1 group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-[300px] h-[300px] border-4 border-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] group-hover:scale-105">
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-transparent" />
              <img
                src={hero}
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;