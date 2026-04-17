import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import StrengthsSection from "@/components/StrengthsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import Background3D from "@/components/Background3D";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => (
  <div className="min-h-screen relative">
    <ScrollProgress />
    <Background3D />
    <div className="relative z-10">
    <Navbar />
    <HeroSection />
    <AnimatedSection><AboutSection /></AnimatedSection>
    <AnimatedSection><SkillsSection /></AnimatedSection>
    <AnimatedSection><ProjectsSection /></AnimatedSection>
    <AnimatedSection><EducationSection /></AnimatedSection>
    <AnimatedSection><CertificationsSection /></AnimatedSection>
    <AnimatedSection><StrengthsSection /></AnimatedSection>
    <AnimatedSection><ContactSection /></AnimatedSection>
    <Footer />
    </div>
  </div>
);

export default Index;
