"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+234',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const countryCodes = [
    { code: '+234', country: 'Nigeria' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+61', country: 'Australia' },
    { code: '+27', country: 'South Africa' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode}${formData.phone}`
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          countryCode: '+234',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
                      <Link href="tel:+2347036676508" className="hover:text-blue-400 transition-colors">
                        +234 703 667 6508
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
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
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">
                        Phone Number
                      </Label>
                      <div className="flex gap-2">
                        <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                          <SelectTrigger className="w-24 bg-slate-700 border-slate-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code} className="text-white">
                                {country.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="7036676508"
                          className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Project Discussion"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
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
