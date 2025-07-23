"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink, Building, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const experiences = [
    {
      title: "Chief Technology Officer (CTO)",
      company: "Plussevenfm",
      location: "Lagos, Nigeria",
      type: "Hybrid",
      period: "Apr 2025 – Present",
      duration: "4 months",
      description:
        "Leading end-to-end technical direction of a cutting-edge event management platform. Architected and built scalable, secure fullstack systems for event pages, ticketing, and media management. Overseeing system architecture, security protocols, and deployment optimization strategies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      achievements: [
        "Increased platform performance by 300%",
        "Led team of 8 developers",
        "Implemented microservices architecture",
      ],
      featured: true,
    },
    {
      title: "Full Stack Developer",
      company: "MXS Games",
      location: "London, United Kingdom",
      type: "Remote",
      period: "Jun 2024 – Present",
      duration: "1 year 2 months",
      description:
        "Engineered sophisticated Web3 game UIs and comprehensive dashboards. Built secure backend infrastructure for user data management, NFT integration, and reward systems. Developed innovative NFT-based voting mechanisms and automated reward claiming systems with seamless MetaMask and WalletConnect integration.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Solidity",
        "Supabase",
        "Firebase",
      ],
      achievements: [
        "Built 5+ Web3 gaming platforms",
        "Integrated 10+ blockchain protocols",
        "Managed $2M+ in NFT transactions",
      ],
      featured: true,
    },
    {
      title: "Senior Frontend Developer",
      company: "Vatug Technologies",
      location: "Lagos, Nigeria",
      type: "Remote",
      period: "Dec 2023 – Present",
      duration: "1 year 8 months",
      description:
        "Architected frontend infrastructure for enterprise maritime logistics platform. Designed and implemented sophisticated role-based dashboards for vessel owners and charterers. Integrated real-time APIs for vessel tracking, booking systems, and performance monitoring throughout the entire frontend lifecycle.",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Context API"],
      achievements: [
        "Reduced load times by 60%",
        "Implemented real-time tracking for 500+ vessels",
        "Built responsive dashboards for 1000+ users",
      ],
      featured: true,
    },
    {
      title: "Development Team Lead & CTO",
      company: "Smart Trans Express",
      location: "Nigeria",
      type: "Hybrid",
      period: "Feb 2023 – Present",
      duration: "2 years 6 months",
      description:
        "Leading development team for comprehensive logistics and e-commerce web platforms. Architected scalable solutions ensuring seamless user experiences. Focused on database efficiency, backend optimization, and implementing robust security protocols across all systems.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Go (Golang)", "MySQL"],
      achievements: [
        "Led team of 12 developers",
        "Scaled platform to handle 10K+ daily users",
        "Implemented automated CI/CD pipelines",
      ],
      featured: true,
    },
    {
      title: "Fullstack Developer / Founder",
      company: "MyCare - Healthcare Ecosystem",
      location: "Remote",
      period: "2024 – Present",
      duration: "1 year",
      description:
        "Founded and developed a comprehensive healthcare platform connecting patients, doctors, and pharmacies. Designed patient registration systems, medical records management, and pharmacy integration. Built secure role-based access control and dynamic UI with modern tech stack.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "MySQL"],
      liveUrl: "https://mycare-front.vercel.app",
      achievements: ["Launched MVP in 3 months", "Onboarded 500+ healthcare providers", "Built HIPAA-compliant system"],
      featured: true,
    },
    {
      title: "Fullstack Developer",
      company: "Bookit",
      location: "Remote",
      type: "Contract",
      period: "2024",
      duration: "6 months",
      description:
        "Built sophisticated rewards system tied to $5K node licenses. Engineered daily rewards mechanism with automated task system and claim automation. Developed scalable backend APIs and cron job processors with Pub/Sub architecture for scheduled tasks and admin flagging logic.",
      technologies: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Supabase", "Next.js", "Go (Golang)"],
      achievements: [
        "Processed $500K+ in rewards",
        "Built automated claiming system",
        "Implemented fraud detection algorithms",
      ],
      featured: false,
    },
    {
      title: "Frontend Developer",
      company: "ExamRevise",
      location: "Remote",
      type: "Contract",
      period: "2023 – 2024",
      duration: "1 year",
      description:
        "Built lightning-fast, responsive exam preparation platform for Nigerian students. Integrated sophisticated quiz engine, progress tracking, and comprehensive user dashboards. Focused on minimal UI design, optimized load times, and exceptional mobile responsiveness.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
      achievements: [
        "Served 10K+ students",
        "Achieved 95% mobile performance score",
        "Built adaptive learning algorithms",
      ],
      featured: false,
    },
    {
      title: "Frontend Developer",
      company: "Arveety Limited",
      location: "Lagos, Nigeria",
      period: "Oct 2023 – Jun 2025",
      duration: "1 year 9 months",
      description:
        "Built and maintained sophisticated web interfaces for maritime platforms. Utilized modern development tools including Tailwind CSS, React, and Git for efficient delivery. Focused on performance optimization, responsive design, and exceptional user experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Git", "MySQL"],
      achievements: [
        "Improved user engagement by 40%",
        "Built 15+ responsive interfaces",
        "Optimized performance across devices",
      ],
      featured: false,
    },
    {
      title: "Frontend Developer",
      company: "Classic Information Systems",
      location: "Nigeria",
      period: "Sep 2021 – Aug 2023",
      duration: "2 years",
      description:
        "Developed and maintained frontend interfaces for enterprise tools and systems. Contributed to team-based Agile delivery cycles with focus on code quality and user experience. Built scalable components and implemented modern development practices.",
      technologies: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDB", "MySQL"],
      achievements: [
        "Built 20+ enterprise interfaces",
        "Reduced development time by 30%",
        "Mentored 5 junior developers",
      ],
      featured: false,
    },
  ]

  const featuredExperiences = experiences.filter((exp) => exp.featured)
  const otherExperiences = experiences.filter((exp) => !exp.featured)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    show: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional Journey 🚀
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My career progression and key accomplishments in building world-class digital solutions
            </p>
          </motion.div>

          {/* Featured Experiences */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-8 mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <Trophy className="w-8 h-8 text-yellow-500" />
              Featured Roles
            </motion.h3>

            {featuredExperiences.map((exp, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateX: 2,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                            <Building className="w-6 h-6 text-blue-500" />
                            {exp.title}
                          </CardTitle>
                          <motion.p
                            whileHover={{ scale: 1.05 }}
                            className="text-xl font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                            <Badge variant="secondary" className="ml-2">
                              {exp.duration}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              {exp.location}
                              {exp.type && ` • ${exp.type}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Key Achievements */}
                      {exp.achievements && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: achIndex * 0.1 }}
                                className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-300 cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Live URL if available */}
                      {exp.liveUrl && (
                        <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
                          <Link
                            href={exp.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live Project
                          </Link>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-500" />
              Additional Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {otherExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                >
                  <Card className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 dark:bg-slate-800/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">{exp.title}</CardTitle>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                        <Badge variant="outline" className="ml-2 text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements && (
                        <div className="mb-4">
                          <ul className="space-y-1">
                            {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs dark:bg-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs dark:bg-slate-700 dark:text-slate-300">
                            +{exp.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
