'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Globe, Server, Smartphone } from 'lucide-react'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-400 to-purple-600",
      skills: [
        "Python", "Java", "TypeScript", "C", "Go", "SQL", "HTML/CSS", "PHP", "x86 & RISC-V Assembly", "Bash Shell Scripting"
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      color: "from-purple-400 to-blue-600",
      skills: [
        "React.js", "Next.js", "NumPy", "Pandas", "Redux", "Express.js", "Flask", "Django"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      color: "from-lavender-400 to-purple-600",
      skills: [
        "Git", "AWS Cloud Development Kit", "Docker", "Linux/Unix", "Firebase", "DynamoDB", "S3", "CloudWatch", "OpenMP", "OpenMPI"
      ]
    },
    {
      title: "Design & Development",
      icon: Palette,
      color: "from-blue-400 to-lavender-600",
      skills: [
        "Figma", "UI/UX Design", "gRPC", "REST APIs", "CI/CD", "Cisco iOS", "OAuth", "Microservices"
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white/30 backdrop-blur-sm">
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card"
              custom={categoryIndex}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: "easeOut"
                    }}
                    className="px-3 py-2 bg-white/80 backdrop-blur-sm border border-white/40 text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid sm:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-slate-600">Programming Languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">15+</div>
            <div className="text-slate-600">Frameworks & Tools</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">3</div>
            <div className="text-slate-600">Major Internships</div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center card max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Currently Learning
          </h3>
          <p className="text-slate-600 mb-4">
            I'm always expanding my skill set. Currently diving deep into:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
                          {["GraphQL", "Three.js", "Rust", "Machine Learning"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-lavender-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
