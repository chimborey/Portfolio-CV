import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { projects } from "../../Data/Data"
import { Link } from "react-router-dom"


export default function Projects() {
      const [active, setActive] = useState("frontend")

      const [page, setPage] = useState(1)

      const itemsPerPage = 6
      const filteredProjects = projects.filter((p) => p.category === active)

      const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
      const startIndex = (page - 1) * itemsPerPage
      const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)
      useEffect(() => {
            setPage(1)
      }, [active])

      return (
            <section className="min-h-screen mb-5 overflow-hidden flex flex-col items-center justify-center px-6 text-white relative">
                  <div className="absolute w-[600px] h-[600px] bg-blue-500 blur-[180px] opacity-20 rounded-full"></div>

                  <div className="max-w-6xl w-full z-10">
                        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

                        {/* NAVIGATION TAB */}
                        <div className="flex justify-center gap-4 mb-10">
                              {["frontend",].map((cat) => (
                                    <button
                                          key={cat}
                                          onClick={() => setActive(cat)}
                                          className={`px-6 py-2 rounded-full transition ${active === cat ? "bg-blue-500" : "bg-white/10"}`}
                                    >
                                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                              ))}
                        </div>

                        {/* GRID - ប្រើ AnimatePresence ដើម្បីឱ្យមាន Animation ពេលប្តូរ Category */}
                        <div className="grid md:grid-cols-3 gap-6">
                              <AnimatePresence mode="wait">
                                    {currentProjects
                                          .filter((p) => p.category === active)
                                          .map((p) => (
                                                <motion.div
                                                      key={p.title}
                                                      initial={{ opacity: 0, scale: 0.9 }}
                                                      animate={{ opacity: 1, scale: 1 }}
                                                      exit={{ opacity: 0, scale: 0.9 }}
                                                      // បន្ថែម Hover Animation នៅទីនេះ
                                                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                                      className="glass rounded-3xl border border-white/10 overflow-hidden cursor-pointer bg-white/5 group"
                                                >
                                                      {/* IMAGE WITH ZOOM EFFECT */}
                                                      <Link to={p.path} className="overflow-hidden">
                                                            <img
                                                                  src={p.imgUrl}
                                                                  alt={p.title}
                                                                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                      </Link>

                                                      <div className="p-5 flex flex-col space-y-3">
                                                            <h3 className="text-xl font-bold text-blue-400 group-hover:text-white transition-colors">
                                                                  {p.title}
                                                            </h3>
                                                            <p className="text-gray-300 text-sm">{p.desc}</p>

                                                            <div className="flex flex-wrap gap-2 mt-4">
                                                                  {p.tags.map((tag) => (
                                                                        <span
                                                                              key={tag}
                                                                              className="text-xs px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full group-hover:bg-blue-500/40 transition-colors"
                                                                        >
                                                                              {tag}
                                                                        </span>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                </motion.div>
                                          ))}
                              </AnimatePresence>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-10">
                              {/* Prev */}
                              <button
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                    className="px-4 py-2 bg-white/10 rounded-full"
                              >
                                    Prev
                              </button>

                              {/* Numbers */}
                              {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                          key={i}
                                          onClick={() => setPage(i + 1)}
                                          className={`w-10 h-10 rounded-full ${page === i + 1 ? "bg-blue-500" : "bg-white/10"
                                                }`}
                                    >
                                          {i + 1}
                                    </button>
                              ))}

                              {/* Next */}
                              <button
                                    onClick={() =>
                                          setPage((prev) => Math.min(prev + 1, totalPages))
                                    }
                                    className="px-4 py-2 bg-white/10 rounded-full"
                              >
                                    Next
                              </button>
                        </div>
                  </div>
            </section>
      )
}