"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ChevronDown } from "lucide-react"
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    images: string[]; // Change from image: string to images: string[]
    tags: string[];
    features: string[];
    githubLink: string;
    fullDescription: string;
  } | null>(null);
  
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "TejaBaba",
      shortDescription: "A collection of powerful tools and utilities.",
      description: "TejaBaba is a suite of utilities designed to enhance system performance and user experience.",
      images: [
        "/TejaBaba/b1.png",
        "/TejaBaba/b2.png",
        "/TejaBaba/b3.png",
        "/TejaBaba/b4.png",
        "/TejaBaba/b5.png",
        "/TejaBaba/b6.png",
        "/TejaBaba/b7.png",
        "/TejaBaba/b8.png",
      ],
      tags: ["Utility", "Performance", "System Tools"],
      features: [
        "Performance optimization",
        "Resource monitoring",
        "Automated maintenance",
      ],
      githubLink: "https://github.com/Tejahaha/TejaBaba-FE.git",
      fullDescription: "TejaBaba provides a suite of powerful tools that help users optimize their system performance with efficient resource monitoring and automation features.",
    },
    {
      id: 2,
      title: "TuneUp",
      shortDescription: "A seamless music streaming web app with an intuitive user experience.",
      description: "A seamless music streaming web app offering high-quality audio playback, personalized playlists, and real-time song recommendations.",
      images: [
        "/TuneUp/t1.png",
        "/TuneUp/t2.png",
        "/TuneUp/t3.png",
        "/TuneUp/t4.png",
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "Spring Boot", "MySQL"],
      features: [
        "High-quality audio streaming",
        "Personalized playlists",
        "Real-time song recommendations",
        "User authentication and profiles",
        "Playlist and library management",
      ],
      githubLink: "https://github.com/Tejahaha/TuneUp-frontEnd.git",
      fullDescription:
        "TuneUp is a feature-rich music streaming web application designed for seamless audio playback and personalized user experiences. Built using React for the frontend and Spring Boot with MySQL for backend data management, it delivers high-quality streaming with an intuitive UI. Features include personalized playlists, real-time song recommendations, user authentication, playlist management, and smooth playback across devices.",
    },
    {
      id: 3,
      title: "VoterUI",
      shortDescription: "A secure and transparent online voting platform.",
      description: "A secure and transparent online voting platform enabling users to cast votes electronically with real-time result updates.",
      images: [
        "/VoterUI/v1.png",
        "/VoterUI/v2.png",
        "/VoterUI/v3.png",
        "/VoterUI/v4.png",
        "/VoterUI/v5.png",
        "/VoterUI/v6.png",
        "/VoterUI/v7.png",
        "/VoterUI/v8.png",
        "/VoterUI/v9.png",
      ],
      tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
      features: [
        "Secure voter authentication",
        "Real-time vote counting",
        "Encrypted and tamper-proof ballots",
        "Role-based access control",
        "Comprehensive election result dashboard",
      ],
      githubLink: "https://github.com/Tejahaha/Voter.git",
      fullDescription:
        "This online voting system enables secure and transparent elections with a user-friendly interface. Developed using Java Spring Boot for the backend and React for the frontend, it ensures efficient voter management and real-time vote counting. Features include secure user authentication, role-based access control, candidate registration, real-time vote tallying, election scheduling, and audit logs for election transparency.",
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">

<div className="relative overflow-hidden">
<Image
  src={project.images[0] || "/placeholder.svg"} // Use first image or fallback
  alt={project.title}
  width={600}
  height={300}
  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
  priority
/>

  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
  </div>
</div>


                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">

<Image
  src={selectedProject.images?.[0] || "/placeholder.svg"}
  alt={selectedProject.title}
  width={600} // Adjust width as needed
  height={300} // Adjust height as needed
  className="w-full rounded-md object-cover aspect-video"
/>

              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

