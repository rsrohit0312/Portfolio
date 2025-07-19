"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experience = {
  title: "Software Developer Intern",
  company: "Afame Technologies",
  location: "Remote",
  duration: "Feb 2025 – May 2025",
  type: "Internship",
  achievements: [
    "Built a real-time notification system using TypeScript",
    "Implemented socket-based communication to deliver instant updates, reducing user response time by 40%",
    "Built a modern dashboard UI and enhanced UX for admin-side activity monitoring and control",
    "Ensured data consistency and reliability across components through RESTful APIs and robust error handling",
    "Collaborated in an Agile team with regular stand-ups, code reviews, and sprint planning",
  ],
  technologies: ["TypeScript", "Socket.io", "REST APIs", "Dashboard UI", "Agile"],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Building real-world solutions and gaining valuable industry experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-400/20 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-white mb-2">{experience.title}</CardTitle>
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-purple-400/20">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-white/60">Response Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-white/60">Real-time Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">Agile</div>
                  <div className="text-sm text-white/60">Development Process</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
