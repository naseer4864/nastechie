"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies and blockchain
              development. I love creating scalable, efficient solutions that make a real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                As a dedicated software developer based in Lagos, Nigeria, I specialize in building robust web
                applications and blockchain solutions. My journey in tech has been driven by curiosity and a passion for
                solving complex problems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I have extensive experience working with modern frameworks like Next.js, React, and Node.js, as well as
                emerging technologies like Solidity for smart contract development.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                sharing knowledge with the developer community.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">React, Next.js, TypeScript</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <Database className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Backend</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Node.js, Express, NestJS</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Blockchain</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Solidity, Web3, DApps</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                  <CardContent className="p-6 text-center">
                    <Smartphone className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Database</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Firebase, Supabase</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
