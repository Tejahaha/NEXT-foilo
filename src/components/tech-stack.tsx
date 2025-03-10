"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, Binary, Layout, Server, Database, Wrench, 
 Braces, FlaskConical, Network, Cpu, 
  PenTool, Atom, Palette, Layers, TerminalSquare, 
  Package2, Landmark, DatabaseZap, HardDrive, GitBranch, 
  Cloud, CircleDashed, Command 
} from "lucide-react";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)


  
  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "C", icon: <Braces className="h-5 w-5" /> },
        { name: "Java", icon: <FlaskConical className="h-5 w-5" /> },
        { name: "Python", icon: <Network className="h-5 w-5" /> },
        { name: "TypeScript", icon: <Cpu className="h-5 w-5" /> },
        { name: "JavaScript", icon: <PenTool className="h-5 w-5" /> },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Engineering Concepts",
      description: "Fundamental software engineering principles",
      skills: [
        { name: "Data Structures", icon: <Atom className="h-5 w-5" /> },
        { name: "Algorithms", icon: <Palette className="h-5 w-5" /> },
        { name: "OOP", icon: <Layers className="h-5 w-5" /> },
        { name: "Design Patterns", icon: <TerminalSquare className="h-5 w-5" /> },
        { name: "System Design", icon: <Package2 className="h-5 w-5" /> },
        { name: "Multithreading", icon: <Landmark className="h-5 w-5" /> },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern web development technologies",
      skills: [
        { name: "React", icon: <Atom className="h-5 w-5" /> },
        { name: "Next.js", icon: <Layout className="h-5 w-5" /> },
        { name: "HTML/CSS", icon: <Palette className="h-5 w-5" /> },
        { name: "Tailwind CSS", icon: <Layers className="h-5 w-5" /> },
        { name: "Redux", icon: <Package2 className="h-5 w-5" /> },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Server-side frameworks and technologies",
      skills: [
        { name: "Node.js", icon: <HardDrive className="h-5 w-5" /> },
        { name: "Express", icon: <DatabaseZap className="h-5 w-5" /> },
        { name: "Spring Boot", icon: <Landmark className="h-5 w-5" /> },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "MongoDB", icon: <DatabaseZap className="h-5 w-5" /> },
        { name: "PostgreSQL", icon: <HardDrive className="h-5 w-5" /> },
        { name: "MySQL", icon: <Database className="h-5 w-5" /> },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      description: "Tools and environments for development",
      skills: [
        { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
        { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
        { name: "Linux/Unix", icon: <CircleDashed className="h-5 w-5" /> },
        { name: "Visual Studio", icon: <Command className="h-5 w-5" /> },
      ],
    },
  };
  
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                        <div className="flex justify-between items-center text-sm">
    <span className="font-medium">{skill.name}</span>
    <span className="h-5 w-5 text-gray-500">{skill.icon}</span>
</div>


                            
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            With extensive experience in both low-level systems programming and modern web development, I bring a
            comprehensive understanding of software engineering principles to every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

