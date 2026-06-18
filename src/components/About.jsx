import React from 'react'
import { motion } from 'framer-motion'
import { leaders } from '../data'
import { FiArrowRight } from 'react-icons/fi'

const About = () => (
  <section id="about" className="py-20 bg-white relative">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Outer Enclosing Box matching reference image */}
      <div className="border border-[#D1DFEC] rounded-[12px] p-5 bg-white mb-16">
        
        {/* Inner Grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          
          {/* Left: Leaders */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {leaders.map((l, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-[#D1DFEC] rounded-[8px] flex items-center overflow-hidden h-[135px]"
              >
                <div className="w-[125px] h-full shrink-0 border-r border-[#D1DFEC] relative bg-[#fcfdfd] flex items-end justify-center">
                  {l.src ? (
                    <img src={l.src} alt={l.name} className="w-[85%] h-auto max-h-full object-contain object-bottom" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-3xl font-black" style={{ background: l.color }}>
                      {l.initials}
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-2xl font-cursive font-bold text-[#0f2d69] mb-1 tracking-tight">{l.name}</h3>
                  <p className="text-[13px] text-[#475569] leading-snug font-medium">{l.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: About BELTRON */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between py-2 px-2"
          >
            <div>
              <h2 className="text-[26px] font-semibold text-[#0f2d69] mb-4 pb-3 border-b border-[#D1DFEC]">
                About BELTRON
              </h2>
              <p className="text-[#334155] mb-6 leading-relaxed text-[14.5px]">
                Bihar State Electronics Development Corporation Ltd. (BELTRON), under the Department of Information Technology, Government of Bihar, provides secure and scalable ICT services to strengthen Bihar's digital governance.
              </p>
              <ul className="list-disc pl-5 space-y-4 mb-8">
                <li className="text-[14px] leading-relaxed text-[#334155] pl-2 marker:text-[#0f2d69]">
                  <strong className="text-[#334155]">Trusted Partner:</strong> Supporting state departments, ministries, and public sector institutions in implementing ICT initiatives.
                </li>
                <li className="text-[14px] leading-relaxed text-[#334155] pl-2 marker:text-[#0f2d69]">
                  <strong className="text-[#334155]">End-to-End Services:</strong> Covering procurement, solution development, project execution, manpower supply, and managed services.
                </li>
                <li className="text-[14px] leading-relaxed text-[#334155] pl-2 marker:text-[#0f2d69]">
                  <strong className="text-[#334155]">Robust Infrastructure:</strong> Delivering secure cloud, data center, and digital platforms for mission-critical government operations.
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end mt-4">
              <button className="bg-[#0f2d69] hover:bg-[#0A2E73] text-white px-6 py-2.5 rounded-[6px] font-semibold text-[13px] transition-colors shadow-sm">
                Know More..
              </button>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  </section>
)

export default About
