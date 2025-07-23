"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">Let's discuss your next project or collaboration opportunity</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link href="mailto:naseernoor4864@gmail.com" className="hover:text-blue-400 transition-colors">
                        naseernoor4864@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:07036676508" className="hover:text-blue-400 transition-colors">
                        07036676508
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/nasirudeen-nurudeen-44a702255"
                    target="_blank"
                    className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/naseer4864"
                    target="_blank"
                    className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:naseernoor4864@gmail.com"
                    className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Available For</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Full-stack web development</li>
                  <li>• Blockchain & smart contract development</li>
                  <li>• Technical consulting</li>
                  <li>• Freelance projects</li>
                  <li>• Long-term collaborations</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Project Discussion"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
