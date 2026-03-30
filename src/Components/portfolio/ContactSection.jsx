import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "../ui/use-toast";
// import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "marongamadou6@gmail.com", href: "mailto:marongamadou6@gmail.com" },
  { icon: Phone, label: "Phone", value: "+220 374 0652", href: "tel:+2203740652" },
  { icon: MapPin, label: "Location", value: "Banjul, The Gambia", href: null },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    // toast.success("Message sent successfully!");
    toast({
      title: "Message sent successfully!",
      description: "We will get back to you as soon as possible.",
      duration: 5000,
    });
    setForm({ name: "", email: "", subject: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeInUp} custom={0} className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="text-4xl md:text-5xl font-bold font-inter tracking-tight">
            Let's Work
            <span className="text-primary"> Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto font-inter">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                custom={i}
                className="group"
              >
                {item.href ? (
                  <a href={item.href} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-inter mb-1">{item.label}</p>
                      <p className="font-medium font-inter text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                        {item.value}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-inter mb-1">{item.label}</p>
                      <p className="font-medium font-inter text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <motion.div variants={fadeInUp} custom={0}>
                <label className="text-sm font-medium font-inter text-foreground mb-2 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border focus:border-primary/50 rounded-xl h-12 font-inter"
                />
              </motion.div>
              <motion.div variants={fadeInUp} custom={1}>
                <label className="text-sm font-medium font-inter text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border focus:border-primary/50 rounded-xl h-12 font-inter"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} custom={2} className="mb-5">
              <label className="text-sm font-medium font-inter text-foreground mb-2 block">Subject</label>
              <Input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                required
                className="bg-secondary border-border focus:border-primary/50 rounded-xl h-12 font-inter"
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={3} className="mb-8">
              <label className="text-sm font-medium font-inter text-foreground mb-2 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-secondary border-border focus:border-primary/50 rounded-xl resize-none font-inter"
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={4}>
              <Button
                type="submit"
                disabled={sending}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 font-inter font-medium group"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}