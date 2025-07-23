"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Vue.js", "Angular"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "GraphQL", "Microservices", "Go (Golang)", "Python"],
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      icon: "⚙️",
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Redis", "AWS", "Vercel", "Docker"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      icon: "🗄️",
    },
    {
      title: "Blockchain & Web3",
      skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum", "DApp Development", "Hardhat", "Truffle"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      icon: "⛓️",
    },
    {
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "Go (Golang)", "Solidity", "Python", "Rust", "C++"],
      color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      icon: "💻",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "Kubernetes", "Linux", "VS Code", "Postman", "Jest", "CI/CD", "GitHub Actions"],
      color: "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-300",
      icon: "🛠️",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />

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
              animate={isInView ? { scale: [0.9, 1.05, 1] } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technical Arsenal 🚀
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive showcase of cutting-edge technologies and tools I master
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center gap-3">
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                          className="text-2xl"
                        >
                          {category.icon}
                        </motion.span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay: index * 0.1 + skillIndex * 0.05,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            <Badge className={`${category.color} cursor-pointer transition-all duration-200`}>
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
