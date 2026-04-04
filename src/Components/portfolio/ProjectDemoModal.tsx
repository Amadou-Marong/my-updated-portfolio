import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const slides = [
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/192c8bd87_LoginPage.png",
    title: "Login Page",
    description: "Secure authentication screen for the biometric attendance management system.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/ea97aad6e_DashboardUI.png",
    title: "Dashboard",
    description: "Overview of total employees, present today, late arrivals, and active biometric devices with today's attendance table and live feed.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/978fc27a6_EmployeesPage.png",
    title: "Employee Management",
    description: "Manage employee profiles and biometric enrollments across all station locations.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/f6d4ec9c7_DevicesPage.png",
    title: "Device Management",
    description: "Monitor and manage biometric ZKTeco devices across 13 locations, tracking online/offline status and last sync times.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/d2f60baaa_LiveAttendance.png",
    title: "Live Attendance – Today's Summary",
    description: "Real-time attendance monitoring showing check-in times, estimated hours, and late status for all employees.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/57320c091_AttendanceLogs.png",
    title: "Attendance Logs",
    description: "Import and view biometric punch logs from devices, including timestamp, punch type, and verification mode (fingerprint).",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/09f9edb83_Holidays.png",
    title: "Holidays",
    description: "Manage public holidays and company events with a calendar view and table view.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/de8676b17_Leaves.png",
    title: "Leave Management",
    description: "Apply for employee leaves with type selection, date picker, and reason field.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/1853643be_ReportsPage.png",
    title: "Attendance Reports",
    description: "Generate attendance reports with a date range filter, showing employee check-in/out data.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/471d68c14_ReportGenerated.png",
    title: "Generated Report",
    description: "Detailed attendance analytics showing 1,473 present, 1,310 late arrivals, 535 absent across a custom date range with exportable data.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/5d77c5c3d_GroupSchedules.png",
    title: "Group Schedule (Timetable)",
    description: "Configure working days and day overrides for employee groups per station.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/4cb1917e1_Accounts.png",
    title: "Accounts",
    description: "Manage user accounts and role-based permissions (Admin, HR, Auditor) with status control.",
  },
  {
    image: "https://media.base44.com/images/public/69c7dd13155c90cb31ae3e69/d05b7b363_SettingsPage.png",
    title: "Settings",
    description: "Configure company information, attendance rules, and security preferences.",
  },
];

export default function ProjectDemoModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") lightbox ? setLightbox(false) : onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, lightbox]);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div>
              <h2 className="font-bold font-inter text-foreground text-lg">Biometric Time Attendance System</h2>
              <p className="text-xs text-muted-foreground font-mono">GNPC · Internal Project Demo</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Main image */}
          <div className="relative bg-black/20 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].image}
                alt={slides[current].title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="w-full object-cover object-top max-h-[420px] cursor-zoom-in"
                onClick={() => setLightbox(true)}
              />
            </AnimatePresence>

            {/* Zoom hint */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-lg px-2 py-1 flex items-center gap-1 text-white text-xs">
              <ZoomIn size={12} /> Click to zoom
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 rounded-full px-3 py-1 text-white text-xs font-mono">
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Slide info */}
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-semibold font-inter text-foreground mb-1">{slides[current].title}</h3>
            <p className="text-sm text-muted-foreground font-inter">{slides[current].description}</p>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  i === current ? "border-primary" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}