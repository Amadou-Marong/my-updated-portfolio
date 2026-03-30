import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Gambia National Petroleum Company (GNPC)",
    role: "Software Engineer & Assistant IT Support Specialist",
    period: "2024 – Present",
    description:
      "Promoted from intern to full-time staff after demonstrating strong performance in IT support and internal software development. Currently responsible for troubleshooting hardware and software issues, maintaining internal systems, and developing business applications using Vue.js, React.js, Laravel, and Django. Built a Biometric Attendance System integrated with ZKTeco devices for real-time attendance syncing, live monitoring, offline raw attendance uploads, and report generation. Also developed a Ticketing Management System to streamline IT issue tracking, prioritization, assignment workflows, and resolution monitoring.",
    tags: ["Vue.js", "React.js", "Laravel", "Django", "ZKTeco", "Figma"],
  },
  {
    company: "Gambia National Petroleum Company (GNPC)",
    role: "Junior Software Engineer & IT Support Intern",
    period: "2023 – 2024",
    description:
      "Started as an intern supporting day-to-day IT operations and assisting with internal software development initiatives. Provided technical support for hardware and software issues, contributed to the maintenance of business systems, and gained hands-on experience working with modern web technologies while collaborating with the IT team on operational and development tasks.",
    tags: ["IT Support", "Vue.js", "React.js", "Laravel", "Django"],
  },
  {
    company: "HMZ Creatives",
    role: "Frontend Web Developer Intern",
    period: "2022 – 2023",
    description:
      "Worked as a Frontend Web Developer Intern, building and maintaining responsive websites using HTML, CSS, and JavaScript. Contributed to projects using Vanilla JavaScript and custom CSS, learned Git for version control, and used Figma to translate UI concepts into clean, user-friendly interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "Figma"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="text-primary font-mono text-sm tracking-wider uppercase mb-3"
          >
            Career Path
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-4xl md:text-5xl font-bold font-inter tracking-tight"
          >
            Work
            <span className="text-primary"> Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  variants={fadeInUp}
                  custom={0}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-lg shadow-primary/20"
                />

                {/* Content */}
                <motion.div
                  variants={fadeInUp}
                  custom={1}
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "md:pr-0 md:text-right" : "md:pl-0"
                  }`}
                >
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/5">
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className={i % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="font-semibold font-inter text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-primary font-medium font-inter">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>

                    <p
                      className={`text-muted-foreground leading-relaxed font-inter text-sm mb-5 ${
                        i % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}