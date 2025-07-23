"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">NasTechie</h3>
              <p className="text-slate-300 mb-4">
                Full Stack Developer specializing in modern web technologies and blockchain development.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/nasirudeen-nurudeen-44a702255"
                  target="_blank"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/naseer4864"
                  target="_blank"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:naseernoor4864@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
              <p className="text-slate-300 mb-2">Lagos, Nigeria</p>
              <p className="text-slate-300 mb-2">07036676508</p>
              <p className="text-slate-300 mb-2">naseernoor4864@gmail.com</p>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">© {currentYear} NasTechie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
