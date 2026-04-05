import React from "react";
// import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import PortfolioSection from "../components/portfolio/PortfolioSection";
// import ContactSection from "../components/portfolio/ContactSection";
// import Footer from "../components/portfolio/Footer";
import Navbar from "../components/common/Navbar";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/common/Footer";

import HeroImage from "../assets/newupdate/MyHeroImage.png";

import FleetTracker from "../assets/newupdate/FleetTracker.png";
import LeaveSystem from "../assets/newupdate/AllLeaves.png";
import TicketingManager from "../assets/newupdate/tickets.png";
import BiometricAttendance from "../assets/newupdate/ReportsGenerated.png";


const PROFILE_IMAGE = HeroImage;


const PROJECT_IMAGES = [
  FleetTracker,
  LeaveSystem,
  TicketingManager,
  BiometricAttendance
];

console.log(PROJECT_IMAGES);


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection profileImage={PROFILE_IMAGE} />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection projectImages={PROJECT_IMAGES} />
      <ContactSection />
      <Footer />
    </div>
  );
}