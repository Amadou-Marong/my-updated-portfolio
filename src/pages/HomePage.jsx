import PortfolioSection from "../components/portfolio/PortfolioSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";
import Navbar from "../components/common/Navbar";

const PROFILE_IMAGE = "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/215880abf_generated_c33380d7.png";

const PROJECT_IMAGES = [
  "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/cabdccc66_generated_6ea2f189.png",
  "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/b96e3f3e9_generated_fac9c975.png",
  "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/fefc5d002_generated_dd080c29.png",
  "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/f07c412b6_FleetTracker.png",
];

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