import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function PortfolioSection({ projectImages }) {
  console.log(projectImages);
  
  const projects = [
    {
      title: "GPS Fleet Tracker",
      description:
        "A web-based system that uses GPS technology to monitor driver location, speed, and total distance travelled in real time. Features live map tracking, overspeed alerts, trip history, and a driver app — giving fleet managers full visibility over their vehicles.",
      image: projectImages[0],
      tags: ["React.js", "Leaflet.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Leave Management System",
      description:
        "A leave management system allowing employees to apply for leaves, view balances, and track history. Includes an approval workflow for managers to review and approve leave requests.",
      image: projectImages[1],
      tags: ["React.js", "Django", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Ticketing Management System",
      description:
        "A ticketing management system for the IT Department to help manage IT-related issues. Features priority management, status tracking, and assignment workflows.",
      image: projectImages[2],
      tags: ["React.js", "Django", "PostgreSQL", "Django Rest Framework", "Django Channels"],
      github: "#",
      live: "#",
    },
    {
      title: "Biometric Time Attendance System",
      description:
        "A custom web-based biometric attendance system integrated with ZKTeco devices to monitor and track employee attendance across multiple stations. Features real-time syncing, centralized live monitoring, offline raw attendance file uploads for unsynced devices, and attendance report generation for efficient workforce management.",
      image: projectImages[3],
      tags: ["React.js", "Django", "Django Rest Framework", "PostgreSQL", "Pyzk Library", "Docker", "Nginx"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.p variants={fadeInUp} custom={0} className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
            My Work
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-4xl md:text-5xl font-bold font-inter tracking-tight">
            Featured
            <span className="text-primary"> Projects</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="mt-4 text-muted-foreground text-lg max-w-xl font-inter">
            A selection of my recent projects showcasing skills in design, development, and project management.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={i}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      style={{}}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/20" />
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold font-inter text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium font-inter text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm font-medium font-inter text-foreground hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}