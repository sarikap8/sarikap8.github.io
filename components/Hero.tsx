'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-gradient-to-r from-lavender-300 to-blue-300 rounded-full opacity-20"
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 50 - 25, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ))

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
        

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-lavender-200 to-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-lavender-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom section-padding text-center relative z-10"
      >
        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mx-auto mb-6 relative"
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">SP</span>
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sarika</span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            UC Berkeley student pursuing dual degrees in Computer Science and Business Administration. 
            Passionate about leveraging technology for social good and creating meaningful digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary"
            >
              Learn More About Me
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mt-12"
        >
          {[
            { icon: Github, href: 'https://github.com/sarikap8', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sarika-pasumarthy/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sarikapasumarthy@berkeley.edu', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-effect rounded-full text-slate-600 hover:text-purple-600 transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-slate-400 hover:text-purple-500 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
