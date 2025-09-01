'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const experiences = [
    {
      company: "Pinterest",
      role: "Software Engineering Intern",
      location: "New York City, NY",
      period: "May 2025 – August 2025",
      description: "Built and deployed an end-to-end resource provisioning pipeline, adding a manual judgment resolution API for deployment workflows, reducing developer friction, and improving control over gated rollouts. Created a dashboard to display Pinterest Image Builds and corresponding validations.",
      highlights: [
        "Implemented OAuth authentication and authorization, as well as pCloud CLI integration for RPPv2 APIs",
        "Added soft block and force push to Jenkins cherry-pick jobs for promoting canary pushes to production",
        "Increased CI/CD stability through improved deployment workflows"
      ],
      technologies: ["Go", "Docker", "Python", "OAuth", "Jenkins", "CI/CD", "gRPC", "REST APIs"],
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop&crop=center"
    },
    {
      company: "Amazon",
      role: "Software Development Engineering Intern",
      location: "Seattle, WA", 
      period: "May 2024 – August 2024",
      description: "Developed TinkerService, a testing override service for Amazon Store Testing, deployed in production in September 2024. Eliminated the need for infrastructure set up to test Amazon.com changes, improving testing efficiency and test reliability.",
      highlights: [
        "Formulated and executed generation, retrieval, and merge functionalities to mock custom testing environments",
        "Automated iOS and Android preview windows using DynamoDB and S3",
        "Designed CloudWatch monitoring dashboard to track alarms in Availability, P50/P99 Latency, Error, and Fault metrics"
      ],
      technologies: ["AWS S3", "AWS DynamoDB", "AWS CloudWatch", "AWS Lambda", "REST APIs", "Java", "TypeScript"],
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center"
    },
    {
      company: "Etsy",
      role: "Software Engineering Intern (Contract)",
      location: "Brooklyn, NY (Remote)",
      period: "August 2023 – December 2023", 
      description: "Built an image processing pipeline using Go, utilizing gRPC requests to add PDF/Tiff conversion and storage, cropping, rotation, color profile conversion, image dimension and color analysis, and file upload APIs.",
      highlights: [
        "Boosted image processing service runtime by 79%",
        "Optimized transaction rate by 32%",
        "Devised a frontend PHP client to demo services and wrote robust unit tests"
      ],
      technologies: ["Go", "gRPC", "PHP", "Image Processing", "APIs"],
      logo: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=100&h=100&fit=crop&crop=center"
    }
  ]



  return (
    <section id="projects" className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container-custom"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey through internships at leading tech companies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Work Experience */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              variants={itemVariants}
              className="card p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {experience.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 mt-1">
                      <span className="font-semibold text-purple-600">{experience.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{experience.location}</span>
                      <span className="hidden sm:block">•</span>
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Teaching & Leadership Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center">
            Teaching & Leadership
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-purple-600 mb-2">Head Teaching Assistant</h4>
              <p className="text-slate-600 mb-3">UC Berkeley EECS • January 2023 – Present</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Led discussion sections for 50+ students across 5 semesters of Principles and Techniques of Data Science. 
                Coordinated Disabled Student Program logistics and managed extensions for 100+ students.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Teaching</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Data Science</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Student Support</span>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="text-xl font-semibold text-purple-600 mb-2">Technical Project Manager</h4>
              <p className="text-slate-600 mb-3">Sourcegraph & NEXT for Autism • Contract</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Led teams of 6 developers on ML pipeline projects and taught web development fundamentals. 
                Delivered comprehensive insights reports and reduced supervisor monitoring time by 30%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Leadership</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Project Management</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Mentoring</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
