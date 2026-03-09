import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import SkillsMarquee from "@/components/SkillsMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <SkillsMarquee />
        <JourneySection />
        <SkillsMarquee />
        <SkillsSection />
        <SkillsMarquee />
        <ProjectsSection />
        <SkillsMarquee />
        <ContactSection />
        <SkillsMarquee />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
