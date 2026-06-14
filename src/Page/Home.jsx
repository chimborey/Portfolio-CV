import AboutSection from "../Components/Homes/AboutSection";
import ContactSection from "../Components/Homes/ContactSection";
import EducationSection from "../Components/Homes/EducationSection";
import ExperienceSection from "../Components/Homes/ExperienceSection";
import HeroSection from "../Components/Homes/HeroSection";
import ProjectsSection from "../Components/Homes/ProjectsSection";
import SkillsSection from "../Components/Homes/SkillsSection";


export default function Home() {
      return (
            <>
                  {/* HeroSection of Home page */}
                  <section id="home">
                        <HeroSection />
                  </section>
                  {/* AboutSection of Home page */}
                  <section id="about">
                        <AboutSection />
                  </section>
                  {/* SkillsSection of Home page */}
                  <section id="skills">
                        <SkillsSection />
                  </section>
                  {/* ProjectsSection of Home page */}
                  <section id="projects">
                        <ProjectsSection />
                  </section>
                  {/* EducationSection of Home page */}
                  <section id="education">
                        <EducationSection />
                  </section>
                  {/* ExperienceSection of Home page */}
                  <section id="experience">
                        <ExperienceSection />
                  </section>
                  {/* ContactSection of Home page */}
                  <section id="contact">
                        <ContactSection />
                  </section>
            </>
      )
}