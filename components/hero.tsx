"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Download, Code, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  const ref = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />
      
      {/* Animated gradient background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          {[...Array(400)].map((_, i) => {
            const direction = i % 4; // Create 4 different movement patterns
            const animationProps = {
              0: { // Up and down
                animate: {
                  y: [
                    Math.floor(i / 30) * 40,
                    Math.floor(i / 30) * 40 + 15,
                    Math.floor(i / 30) * 40,
                  ]
                }
              },
              1: { // Left and right
                animate: {
                  x: [
                    (i % 30) * 40,
                    (i % 30) * 40 + 15,
                    (i % 30) * 40,
                  ]
                }
              },
              2: { // Diagonal
                animate: {
                  x: [
                    (i % 30) * 40,
                    (i % 30) * 40 + 10,
                    (i % 30) * 40,
                  ],
                  y: [
                    Math.floor(i / 30) * 40,
                    Math.floor(i / 30) * 40 + 10,
                    Math.floor(i / 30) * 40,
                  ]
                }
              },
              3: { // Circular
                animate: {
                  x: [
                    (i % 30) * 40,
                    (i % 30) * 40 + 10,
                    (i % 30) * 40,
                    (i % 30) * 40 - 10,
                    (i % 30) * 40,
                  ],
                  y: [
                    Math.floor(i / 30) * 40,
                    Math.floor(i / 30) * 40 + 10,
                    Math.floor(i / 30) * 40,
                    Math.floor(i / 30) * 40 - 10,
                    Math.floor(i / 30) * 40,
                  ]
                }
              }
            }[direction];

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: (i % 30) * 40,
                  y: Math.floor(i / 30) * 40,
                }}
                {...animationProps}
                transition={{
                  duration: 3 + (i % 2) * 2, // Varied duration
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i % 6 * 0.1, // More varied delays
                }}
                style={{
                  left: `${(i % 30) * 2.5}%`,
                  top: `${Math.floor(i / 30) * 2.5}%`,
                }}
              />
            );
          })}
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          {/* Profile Image with crazy animations */}
          <motion.div
            variants={itemVariants}
            className="mb-8 relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative inline-block"
            >
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/profile.png"
                    alt="NasTechie"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Floating icons around profile */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-40 h-40 mx-auto"
              >
                <Code className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-blue-400" />
                <Zap className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-6 text-yellow-400" />
                <Github className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-purple-400" />
                <Mail className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-6 h-6 text-green-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name with gradient text animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative">
              {/* Text particles */}
              {[...Array(9)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: [
                      0,
                      (Math.random() - 0.5) * 300,
                      (Math.random() - 0.5) * 300,
                      0,
                    ],
                    y: [
                      0,
                      (Math.random() - 0.5) * 150,
                      (Math.random() - 0.5) * 150,
                      0,
                    ],
                    opacity: [1, 0.7, 0.7, 1],
                    scale: [1, 0.8, 0.8, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {["N", "a", "s", "T", "e", "c", "h", "i", "e"][i]}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1,
              }}
              className="inline-block"
            >
              <span className="text-lg sm:text-2xl md:text-3xl text-slate-300 font-light tracking-wider">
                Full Stack Developer & Blockchain Architect
              </span>
            </motion.div>
          </motion.div>

          {/* Contact info with stagger animation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-slate-400 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-5 h-5" />
              <span>Lagos, Nigeria</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>+234 703 667 6508</span>
            </motion.div>
          </motion.div>

          {/* Description with typewriter effect */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Passionate full-stack developer specializing in cutting-edge web technologies, blockchain development, and
            scalable enterprise solutions. I craft innovative digital experiences that bridge the gap between
            imagination and reality.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                asChild
              >
                <Link href="/assets/nasirudeen-resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with magnetic hover effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/nasirudeen-nurudeen-44a702255", color: "#0077b5" },
              { icon: Github, href: "https://github.com/naseer4864", color: "#333" },
              { icon: Mail, href: "mailto:naseernoor4864@gmail.com", color: "#ea4335" },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: color,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="block p-4 bg-slate-800/50 rounded-full text-slate-400 hover:text-white transition-colors backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
