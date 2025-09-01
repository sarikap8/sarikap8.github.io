'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Palette, Coffee, BookOpen, Zap } from 'lucide-react'

const About = () => {
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

  const interests = [
    { icon: Heart, text: "Tech for Social Good", color: "from-blue-400 to-blue-600" },
    { icon: BookOpen, text: "Public Policy", color: "from-purple-400 to-purple-600" },
    { icon: Coffee, text: "Matcha Enthusiast", color: "from-lavender-400 to-purple-600" },
    { icon: Zap, text: "Public Health", color: "from-blue-400 to-purple-600" },
    { icon: Code, text: "Computational Biology", color: "from-purple-400 to-blue-600" },
    { icon: Palette, text: "Finance & Business", color: "from-lavender-400 to-blue-600" },
  ]

  return (
    <section id="about" className="section-padding bg-white/30 backdrop-blur-sm">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg">
                Hello! I'm Sarika, a passionate developer pursuing simultaneous degrees at UC Berkeley 
                in Computer Science at the College of Computing, Data Science & Society and Business Administration at the Haas School of Business. 
                I love creating digital experiences that are both beautiful and functional, with a focus 
                on leveraging technology for social impact.
              </p>
              
              <p className="text-lg">
                My interests span tech for social good, public policy, public health, computational biology, 
                and finance. I believe technology has immense potential to solve real-world problems and 
                create positive change in society. When I'm not coding, you'll find me exploring new 
                technologies, sipping matcha while brainstorming my next project, or diving deep into 
                research at the intersection of technology and social impact.
              </p>
              
              <p className="text-lg">
                My approach to development is user-centered and impact-driven. I strive to create 
                applications that not only look great but also provide meaningful solutions to 
                complex challenges in healthcare, policy, and social good.
              </p>
            </div>

            <p className="text-sm text-slate-500 italic">
              Resume available upon request
            </p>

            {/* What I'm Passionate About */}
            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold text-slate-800">
                What I'm Passionate About
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.text}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card text-center p-4 group"
                    custom={index}
                  >
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${interest.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <interest.icon className="w-full h-full text-white" />
                    </motion.div>
                    <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                      {interest.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="card p-6 space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-slate-800">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-purple-700">UC Berkeley - College of Computing, Data Science & Society</h4>
                  <p className="text-slate-600 text-sm">Bachelor of Arts in Computer Science & Data Science</p>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700">UC Berkeley - Haas School of Business</h4>
                  <p className="text-slate-600 text-sm">Bachelor of Science in Business Administration</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photos */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Photo Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-lavender-50 to-blue-50 p-3"
              >
                <img
                  src="/images/homepage_picture2.png"
                  alt="Personal photo 1"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-purple-50 to-lavender-50 p-3"
              >
                <img
                  src="/images/homepage_picture3.png"
                  alt="Personal photo 2"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 p-3"
              >
                <img
                  src="/images/IMG_3033.JPG"
                  alt="Personal photo 3"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-lavender-100 to-blue-100 p-3"
              >
                <img
                  src="/images/IMG_4418.png"
                  alt="Personal photo 4"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-purple-100 to-lavender-100 p-3"
              >
                <img
                  src="/images/IMG_4496.JPG"
                  alt="Personal photo 5"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 p-3"
              >
                <img
                  src="/images/IMG_4581.JPG"
                  alt="Personal photo 6"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative rounded-2xl shadow-lg bg-gradient-to-br from-lavender-200 to-blue-200 p-3 sm:col-span-2 lg:col-span-1 xl:col-span-2"
              >
                <img
                  src="/images/IMG_4796.JPG"
                  alt="Personal photo 7"
                  className="w-full h-60 object-contain rounded-xl"
                />
              </motion.div>
            </div>




          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2", label: "Dual Degrees" },
            { number: "15+", label: "Projects Completed" },
            { number: "5+", label: "Interest Areas" },
            { number: "∞", label: "Cups of Matcha" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center card"
              custom={index}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
