import { motion } from "framer-motion"

export default function Contact() {
      return (
            <section className="min-h-screen flex items-center justify-center px-6 text-white relative overflow-hidden">

                  {/* 🌌 glow background */}
                  <div className="absolute w-[600px] h-[600px] bg-blue-500 blur-[200px] opacity-20 rounded-full"></div>

                  <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 z-10">

                        {/* 🧠 LEFT - INFO */}
                        <motion.div
                              initial={{ opacity: 0, x: -60 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              className="space-y-6"
                        >

                              <h2 className="text-4xl font-bold">
                                    Contact Me
                              </h2>

                              <p className="text-gray-300">
                                    I'm currently looking for internship opportunities and exciting projects. Feel free to reach out if you'd like to work together.
                              </p>

                              {/* INFO CARDS */}
                              <div className="space-y-3">

                                    <div className="glass p-4 rounded-xl border border-white/10">
                                          📧 Email: goldxauusd047@gmail.com / oceansdtol@gmail.com
                                    </div>

                                    <div className="glass p-4 rounded-xl border border-white/10">
                                          📱 Phone: +855 713472013
                                    </div>

                                    <div className="glass p-4 rounded-xl border border-white/10">
                                          🌐 Location: Cambodia
                                    </div>

                              </div>

                        </motion.div>

                        {/* 🧾 RIGHT - FORM */}
                        <motion.div
                              initial={{ opacity: 0, x: 60 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              className="glass p-6 rounded-3xl border border-white/10"
                        >

                              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                                    Send Message
                              </h3>

                              <form className="space-y-4">

                                    <input
                                          type="text"
                                          placeholder="Your Name"
                                          className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-blue-400"
                                    />

                                    <input
                                          type="email"
                                          placeholder="Your Email"
                                          className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-blue-400"
                                    />

                                    <textarea
                                          rows="4"
                                          placeholder="Your Message"
                                          className="w-full p-3 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-blue-400"
                                    />

                                    <button
                                          type="submit"
                                          className="w-full py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/30"
                                    >
                                          Send Message
                                    </button>

                              </form>

                        </motion.div>

                  </div>
            </section>
      )
}