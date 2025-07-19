import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rohit Kumar Singh - Full Stack Developer",
  description: "Portfolio of Rohit Kumar Singh - Full Stack Developer specializing in modern web technologies",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Software Engineer",
  authors: [{ name: "Rohit Kumar Singh" }],
  openGraph: {
    title: "Rohit Kumar Singh - Full Stack Developer",
    description: "Portfolio of Rohit Kumar Singh - Full Stack Developer specializing in modern web technologies",
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
