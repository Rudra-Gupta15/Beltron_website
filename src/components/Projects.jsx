import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects, leaders } from '../data'
import { FiMonitor, FiServer, FiGlobe, FiShield, FiDatabase, FiCpu } from 'react-icons/fi'

const icons = [<FiGlobe />, <FiServer />, <FiMonitor />, <FiShield />, <FiDatabase />, <FiCpu />]

const Projects = () => (
  <section id="projects" className="py-20 bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] gap-8">
        
        {/* Left: Project Portfolio */}
        <div className="bg-[#fcfdfd] rounded-[2rem] p-8 lg:p-10 shadow-[0_10px_40px_rgba(10,46,115,0.03)] border border-gray-100">
          <h2 className="text-[28px] font-extrabold text-[#0A2E73] mb-8 tracking-tight">Project Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {projects.slice(0, 5).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-[1.5rem] border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-[#0F4BB8] transition-all duration-300 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
              >
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-xl mb-4 bg-[#f4f7fb] text-[#0A2E73]">
                  {icons[i % icons.length]}
                </div>
                
                <h3 className="text-[#0A2E73] font-bold text-[16px] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.5] mb-5 flex-1 px-1">{p.desc}</p>
                
                <div className="mt-auto">
                  <Link to="/projects" className="inline-block text-[#0A2E73] text-[12px] font-extrabold tracking-widest uppercase hover:text-[#0F4BB8] transition-colors">
                    EXPLORE
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Message from MD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A2E73] rounded-[2rem] p-10 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(10,46,115,0.15)] flex flex-col"
        >
          <div className="absolute top-0 right-8 text-[150px] text-white/5 font-serif font-black select-none leading-none pt-2">"</div>
          
          <h2 className="text-[28px] font-extrabold text-white mb-8 tracking-tight relative z-10">Message</h2>
          
          <blockquote className="text-[14px] leading-[1.65] text-white/95 mb-8 flex-1 relative z-10 font-outfit font-light italic space-y-3">
            <p>
              "Bihar stands at a defining moment in its digital transformation journey. As emerging technologies 
              reshape governance worldwide, BELTRON strives to empower every Department and State with solutions that are 
              secure, scalable, intelligent, and future ready. By fostering innovation and collaboration, BELTRON 
              is committed to building a digital ecosystem that not only addresses today's challenges but also 
              anticipates tomorrow's opportunities.
            </p>
            <p>
              As we advance toward an era driven by Artificial Intelligence, Cloud Computing, and automation, BELTRON aims 
              to play a pivotal role in strengthening digital public infrastructure, enhancing cyber resilience, and 
              enabling mission mode projects that touch the lives of millions. With a vision rooted in inclusivity and sustainability, 
              BELTRON endeavors to ensure that technology becomes a true enabler of good governance, citizen-centric services, and state progress."
            </p>
          </blockquote>
          
          <div className="relative z-10 border-t border-white/20 pt-6 mt-auto">
            <div className="font-cursive text-3xl font-bold text-white mb-1">{leaders[2].name}</div>
            <div className="text-[13px] font-semibold text-cyan-200/80 uppercase tracking-wide">{leaders[2].role}</div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)

export default Projects
