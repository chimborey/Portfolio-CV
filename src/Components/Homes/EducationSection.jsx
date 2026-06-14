export default function EducationSection() {
      const education = [
            {
                  year: "2014 - 2019",
                  name: "Trapeang Krasang Primary School",
            },
            {
                  year: "2020 - 2025",
                  name: "Hun Sen Bunrany Arun Watey High School",
            },
            {
                  year: "2021 - 2024",
                  name: "English Program at PHL School",
            },
            {
                  year: "2025 - 2026",
                  name: "ICT Professional Training Center",
            },
            {
                  year: "2025 - Present",
                  name: "Bachelor of Information Technology - BBU",
            },
      ];

      return (
            <section id="education" className="w-full py-14 text-white">
                  <div className="max-w-6xl mx-auto mt-12">

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                              My <span className="text-cyan-400">Education Journey</span>
                        </h2>

                        {/* Horizontal line */}
                        <div className="relative">

                              <div className="absolute top-5 left-0 w-full h-[2px] bg-cyan-500/30"></div>

                              <div className="flex flex-col md:flex-row justify-between gap-10">

                                    {education.map((item, index) => (
                                          <div key={index} className="relative flex-1 text-center group">

                                                {/* Dot */}
                                                <div className="w-4 h-4 mx-auto bg-cyan-400 rounded-full relative z-10 group-hover:scale-125 transition"></div>

                                                {/* Card */}
                                                <div className="mt-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-cyan-400/50 transition">

                                                      <p className="text-cyan-400 text-sm font-medium mb-2">
                                                            {item.year}
                                                      </p>

                                                      <p className="text-white/80 text-sm leading-relaxed">
                                                            {item.name}
                                                      </p>

                                                </div>

                                          </div>
                                    ))}

                              </div>
                        </div>
                  </div>
            </section>
      );
}