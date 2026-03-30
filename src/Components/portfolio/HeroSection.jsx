import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Web Developer", "Software Engineer", "AI Enthusiast", "Problem Solver"];

export default function HeroSection({ profileImage }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socials = [
    { icon: Github, href: "https://github.com/Amadou-Marong", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amadou-marong-b27008291/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:marongamadou6@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary font-inter">Available for hire</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg font-inter mb-2"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold font-inter tracking-tight mb-4"
            >
              <span className="text-foreground">Amadou</span>
              <br />
              <span className="text-primary">Marong</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-10 mb-8"
            >
              <span className="text-xl md:text-2xl text-muted-foreground font-inter font-light">
                {displayText}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-inter mb-10"
            >
              I am a passionate web developer and software engineer with a keen interest in AI and Machine Learning. I build modern web applications and internal business systems that solve real operational problems. I am dedicated to creating innovative solutions that solve real-world problems.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter font-medium rounded-xl px-8 group"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
                <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-inter font-medium rounded-xl px-8 group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={profileImage}
                  alt="Amadou Marong"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 px-4 py-2 bg-card border border-border rounded-xl shadow-lg"
              >
                <span className="text-sm font-mono font-medium text-primary">3+ Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-1/4 px-4 py-2 bg-card border border-border rounded-xl shadow-lg"
              >
                <span className="text-sm font-mono font-medium text-primary">10+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-inter uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}