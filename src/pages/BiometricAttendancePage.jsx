import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, ChevronLeft, ChevronRight, X, ZoomIn, Users, Monitor,
  Clock, FileBarChart, Calendar, LogOut, Settings, ShieldCheck, Play
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import Navbar from "../components/portfolio/Navbar";
// import Footer from "../components/portfolio/Footer";

const slides = [
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/192c8bd87_LoginPage.png", title: "Login Page", description: "Secure authentication screen for the biometric attendance management system hosted on the GNPC internal network." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/ea97aad6e_DashboardUI.png", title: "Dashboard", description: "Overview of total employees, present today, late arrivals, and active biometric devices with today's attendance table and a live feed panel." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/978fc27a6_EmployeesPage.png", title: "Employee Management", description: "Manage employee profiles and biometric enrollments across all station locations nationwide." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/f6d4ec9c7_DevicesPage.png", title: "Device Management", description: "Monitor and manage ZKTeco biometric devices across 13 locations, tracking online/offline status and last sync times." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/d2f60baaa_LiveAttendance.png", title: "Live Attendance – Today's Summary", description: "Real-time attendance monitoring showing check-in times, estimated hours, and late status for all employees." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/57320c091_AttendanceLogs.png", title: "Attendance Logs", description: "Import and view biometric punch logs from devices, including timestamp, punch type (Morning Out / Night In), and fingerprint verification mode." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/09f9edb83_Holidays.png", title: "Holidays", description: "Manage public holidays and company events with an interactive calendar view and table view." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/de8676b17_Leaves.png", title: "Leave Management", description: "Apply for employee leaves with leave type selection, date picker, and reason field. Supports an approval workflow." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/1853643be_ReportsPage.png", title: "Attendance Reports", description: "Generate attendance reports with date range filtering, showing employee check-in/out, total hours, and status." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/471d68c14_ReportGenerated.png", title: "Generated Report", description: "Detailed analytics: 1,473 present, 1,310 late arrivals, 535 absent across a custom date range — exportable to PDF or Excel." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/5d77c5c3d_GroupSchedules.png", title: "Group Schedule (Timetable)", description: "Configure working days and day override rules per employee group and station." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/4cb1917e1_Accounts.png", title: "Accounts", description: "Manage user accounts and role-based permissions (Admin, HR, Auditor) with status control." },
  { image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/d05b7b363_SettingsPage.png", title: "Settings", description: "Configure company information, attendance rules, and security preferences." },
];

const features = [
  { icon: Monitor, title: "Device Integration", desc: "Real-time sync with 13+ ZKTeco biometric devices across national stations via a custom API layer." },
  { icon: Users, title: "Employee Management", desc: "Full employee directory with biometric enrollment tracking, department, and device assignment." },
  { icon: Clock, title: "Live Attendance", desc: "Live monitoring of check-ins with punch type (fingerprint), timestamps, and late detection." },
  { icon: FileBarChart, title: "Reports & Analytics", desc: "Generate detailed attendance reports by date range, device, or group — exportable to PDF and Excel." },
  { icon: Calendar, title: "Holidays & Leaves", desc: "Holiday calendar management and a leave application workflow with manager approval." },
  { icon: ShieldCheck, title: "Role-Based Access", desc: "Admin, HR, and Auditor roles with granular permissions across all modules." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
};

function DemoGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-card">
      {/* Main image */}
      <div className="relative group bg-black/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full object-cover object-top max-h-[480px] cursor-zoom-in"
            onClick={() => setLightbox(true)}
          />
        </AnimatePresence>

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-lg px-2 py-1 flex items-center gap-1 text-white text-xs">
          <ZoomIn size={12} /> Click to zoom
        </div>

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 rounded-full px-3 py-1 text-white text-xs font-mono">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Slide info */}
      <div className="px-6 py-4 border-t border-b border-border">
        <h4 className="font-semibold font-inter text-foreground mb-1">{slides[current].title}</h4>
        <p className="text-sm text-muted-foreground font-inter">{slides[current].description}</p>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? "border-primary" : "border-transparent opacity-40 hover:opacity-70"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" onClick={() => setLightbox(false)}>
              <X size={18} />
            </button>
            <img src={slides[current].image} alt={slides[current].title} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BiometricAttendancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />

      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            {/* Back link */}
            <motion.div variants={fadeInUp} custom={0} className="mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-inter">
                <ChevronLeft size={16} /> Back to Portfolio
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div variants={fadeInUp} custom={1} className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 text-xs font-mono font-medium">
                <Lock size={11} /> Private Repository
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-mono font-medium">
                Internal Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-medium">
                Real Production Data
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeInUp} custom={2} className="text-4xl md:text-5xl font-bold font-inter tracking-tight mb-4">
              Biometric Time<br />
              <span className="text-primary">Attendance System</span>
            </motion.h1>
            <motion.p variants={fadeInUp} custom={3} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-4">
              A full-stack internal attendance management platform built for the <strong className="text-foreground">Gambia National Petroleum Company (GNPC)</strong>, 
              integrating ZKTeco biometric fingerprint devices across 13+ stations nationwide for real-time employee attendance tracking.
            </motion.p>

            {/* Private notice */}
            <motion.div variants={fadeInUp} custom={4} className="inline-flex items-start gap-3 bg-secondary border border-border rounded-xl px-5 py-4 mb-10 max-w-2xl">
              <Lock size={16} className="text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground font-inter">
                This is an internal project deployed on GNPC's private network. The source code is in a private repository and the live system is not publicly accessible. 
                Screenshots below are taken from the live system with sensitive employee data redacted.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} custom={5} className="flex flex-wrap gap-2 mb-12">
              {["React.js", "Django", "PostgreSQL", "ZKTeco SDK", "WebSocket", "Nginx", "Figma"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { value: "13+", label: "Biometric Devices" },
              { value: "300+", label: "Enrolled Users" },
              { value: "111", label: "Active Employees" },
              { value: "10+", label: "Modules Built" },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={fadeInUp} custom={i} className="p-5 rounded-2xl bg-card border border-border text-center">
                <p className="text-3xl font-bold font-inter text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Demo Gallery */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <motion.p variants={fadeInUp} custom={0} className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
              Screenshot Tour
            </motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl font-bold font-inter tracking-tight">
              System <span className="text-primary">Demo</span>
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground mt-2 font-inter">
              Browse through all {slides.length} screens of the live system. Use arrow keys or click the arrows to navigate.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <DemoGallery />
          </motion.div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <motion.p variants={fadeInUp} custom={0} className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
              What I Built
            </motion.p>
            <motion.h2 variants={fadeInUp} custom={1} className="text-3xl font-bold font-inter tracking-tight">
              Key <span className="text-primary">Features</span>
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <f.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold font-inter text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}