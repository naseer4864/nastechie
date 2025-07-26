"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "MyCare - Healthcare Ecosystem",
      description:
        "A comprehensive healthcare platform connecting patients, doctors, and pharmacies. Features include patient registration, medical records, and pharmacy integration.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "TypeScript"],
      liveUrl: "https://mycare-front.vercel.app",
      githubUrl: "https://github.com/naseer4864/mycare",
      featured: true,
    },
    {
      title: "Bookit - Rewards Platform",
      description:
        "A comprehensive travel booking platform for flights, trains, buses, and hotels with an integrated rewards system. Features automated task completion, claim processing, and admin management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Supabase", "Next.js"],
      liveUrl: "https://bookit-demo.vercel.app",
      githubUrl: "https://github.com/naseer4864/bookit",
      featured: true,
    },
    {
      title: "ExamRevise",
      description:
        "A fast, responsive exam preparation platform for Nigerian students with quiz engine, progress tracking, and user dashboards. Optimized for minimal UI and fast load times.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://examrevise.vercel.app",
      githubUrl: "https://github.com/naseer4864/examrevise",
      featured: true,
    },
    {
      title: "DeFi Staking Platform",
      description:
        "A decentralized finance application for token staking with smart contracts. Users can stake tokens, earn rewards, and participate in governance.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "MetaMask"],
      liveUrl: "https://your-defi-app.vercel.app",
      githubUrl: "https://github.com/naseer4864/defi-staking",
      featured: false,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://your-task-app.vercel.app",
      githubUrl: "https://github.com/naseer4864/task-manager",
      featured: false,
    },
    {
      title: "NFT Marketplace",
      description:
        "A decentralized NFT marketplace where users can mint, buy, and sell NFTs. Built with modern Web3 technologies and smart contracts.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Solidity", "IPFS", "Web3.js", "Tailwind CSS"],
      liveUrl: "https://your-nft-marketplace.vercel.app",
      githubUrl: "https://github.com/naseer4864/nft-marketplace",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              A showcase of my recent work and live applications
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden dark:bg-slate-800">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs dark:bg-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 bg-transparent"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center"
            >
              Other Projects
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-slate-900 dark:text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs dark:bg-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs dark:bg-slate-700 dark:text-slate-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
