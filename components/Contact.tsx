'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {

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



  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarikapasumarthy@berkeley.edu",
      href: "mailto:sarikapasumarthy@berkeley.edu",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (858) 951-7338",
      href: "tel:+18589517338",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Diego, CA",
      href: "#",
      color: "from-purple-400 to-purple-600"
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sarikap8",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sarika-pasumarthy/",
      color: "hover:text-blue-600"
    },

  ]

  return (
    <section id="contact" className="section-padding">
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
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Get in Touch
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and social impact. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  custom={index}
                  className="card group cursor-pointer text-center p-6"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${contact.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 group-hover:text-purple-600 transition-colors duration-200">
                        {contact.label}
                      </div>
                      <div className="text-slate-600 text-sm">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 text-center">
              <h4 className="text-lg font-semibold text-slate-800 mb-6">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 glass-effect rounded-full text-slate-600 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-200 text-center"
        >
          <p className="text-slate-600">
            © 2025 Sarika Pasumarthy. Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
