import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Terminal } from "lucide-react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Vue.js", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "HTML/CSS", level: 95 },
  { name: "Laravel", level: 78 },
  { name: "Django", level: 75 },
  { name: "Figma", level: 80 },
  { name: "Git", level: 88 },
];

const highlights = [
  { icon: Code2, title: "Frontend", desc: "React, Vue, JavaScript" },
  { icon: Server, title: "Backend", desc: "Laravel, Django" },
  { icon: Palette, title: "Design", desc: "UI/UX, Figma" },
  { icon: Terminal, title: "DevOps", desc: "Git, CI/CD" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.p variants={fadeInUp} custom={0} className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-4xl md:text-5xl font-bold font-inter tracking-tight">
            Crafting Digital
            <span className="text-primary"> Experiences</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-muted-foreground text-lg leading-relaxed font-inter mb-6">
              I'm Amadou Marong, a Web Developer and Junior Software Engineer specializing 
              in frontend development with Vue.js and React.js. I combine clean code with 
              intuitive design to build applications that users love.
            </motion.p>
            <motion.p variants={fadeInUp} custom={1} className="text-muted-foreground text-lg leading-relaxed font-inter mb-10">
              With experience in UX/UI design and backend development using Laravel and Django, 
              I bring a full-stack perspective to every project. I'm passionate about creating 
              seamless digital experiences that solve real problems.
            </motion.p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  variants={fadeInUp}
                  custom={i + 2}
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
                  className="p-5 rounded-2xl bg-card border border-border transition-all duration-300 group"
                >
                  <h.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold font-inter text-foreground mb-1">{h.title}</h3>
                  <p className="text-sm text-muted-foreground font-inter">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.h3 variants={fadeInUp} custom={0} className="text-xl font-semibold font-inter mb-6">
              Technical Skills
            </motion.h3>
            {skills.map((skill, i) => (
              <motion.div key={skill.name} variants={fadeInUp} custom={i * 0.5}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium font-inter text-foreground">{skill.name}</span>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}