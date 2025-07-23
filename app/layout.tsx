import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NasTechie - Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Nas (NasTechie) - Full Stack Developer specializing in Next.js, React, Node.js, and Blockchain development based in Lagos, Nigeria.",
  keywords:
    "Full Stack Developer, Next.js, React, Node.js, TypeScript, Blockchain, Solidity, Lagos, Nigeria, Web Development",
  authors: [{ name: "NasTechie" }],
  openGraph: {
    title: "NasTechie - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing modern web development and blockchain projects",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
