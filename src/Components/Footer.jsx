import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <AnimatedSection>
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-400">
            I am Amadou Marong, a passionate web developer and junior software engineer with a keen interest in creating innovative solutions. Let's work together on exciting projects!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Portfolio</a></li>
            <li><a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <AiOutlineFacebook className="text-3xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <AiOutlineTwitter className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/amadou-marong-b27008291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <AiOutlineLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/Amadou-Marong" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
              <AiOutlineGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">&copy; 2024 Amadou Marong. All rights reserved.</p>
      </div>
    </footer>
    </AnimatedSection>
  );
};

export default Footer;
