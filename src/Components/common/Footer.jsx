import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Amadou-Marong" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/amadou-marong-b27008291/" },
  { icon: Mail, href: "mailto:marongamadou6@gmail.com" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold font-inter tracking-tight mb-4">
              <span className="text-primary">A</span>
              <span className="text-foreground">M</span>
              <span className="text-muted-foreground text-sm font-normal ml-1">.dev</span>
            </div>
            <p className="text-muted-foreground font-inter text-sm leading-relaxed">
              A passionate web developer and software engineer with a keen interest
              in AI and Machine Learning. I am dedicated to creating innovative solutions. Let's work together on exciting projects!
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold font-inter text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-inter"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold font-inter text-foreground mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-inter">
            © {new Date().getFullYear()} Amadou Marong. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-inter flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> and code
          </p>
        </div>
      </div>
    </footer>
  );
}