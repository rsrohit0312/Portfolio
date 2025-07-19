"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Smartphone } from "lucide-react"

const projects = [
  {
    title: "SaaS AI Web App",
    description:
      "Developed a production-grade, multi-tenant SaaS platform with authentication, subscription billing, and RBAC using Clerk and Stripe.",
    longDescription:
      "A comprehensive SaaS solution featuring secure authentication, subscription management, role-based access control, and scalable architecture. Built with modern web technologies and deployed on Vercel for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Clerk", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
    features: [
      "Multi-tenant architecture with secure routing",
      "Subscription billing integration with Stripe",
      "Role-based access control (RBAC)",
      "Optimized data persistence with Prisma ORM",
      "Responsive UI with Tailwind CSS and ShadCN UI",
    ],
    icon: Zap,
    gradient: "from-blue-500 to-purple-500",
    demoUrl: "https://saas-ai-web-app.vercel.app/",
    githubUrl: "https://github.com/your-username/saas-ai-web-app",
  },
  {
    title: "Podcastr - Hosting App",
    description:
      "Built a modern podcast platform with creator login, episode uploads, and AI-driven summaries using OpenAI.",
    longDescription:
      "A full-featured podcast hosting platform that enables creators to upload, manage, and distribute their content with AI-powered features for enhanced user experience.",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk", "OpenAI", "Tailwind CSS", "ShadCN UI"],
    features: [
      "Creator authentication and session management",
      "Episode upload and management system",
      "AI-driven content summaries with OpenAI",
      "Real-time data syncing with Convex backend",
      "Responsive and accessible UI design",
    ],
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    demoUrl: "https://podcastr-app.vercel.app/",
    githubUrl: "https://github.com/your-username/podcastr-app",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-white/70 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 flex-1 bg-transparent"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/80 hover:bg-white/10 flex-1 bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
