import React from 'react'
import { FiTarget, FiCompass, FiCheckCircle, FiInfo, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-24 font-sans selection:bg-blue-200">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-br from-[#0c1f44] via-[#0A2E73] to-[#0f4bb8] text-white pt-16 pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        {/* Background Graphic overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/mission-vision.png')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[13px] text-blue-200/80 mb-8 font-semibold tracking-wider uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} className="opacity-70" />
            <span className="text-white">About Us</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] shrink-0">
              <FiInfo size={30} className="text-[#4DB8FF]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                About BELTRON
              </h1>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
                Driving the e-Development of Bihar to empower society through reliable, citizen-centric IT services and robust digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Who We Are Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 text-blue-50">
                <FiInfo size={200} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0F4BB8] font-bold text-sm uppercase tracking-wide mb-6">
                  <FiInfo size={16} /> Who We Are
                </div>
                <div className="prose prose-blue max-w-none text-gray-600 leading-loose text-[16px]">
                  <p className="text-lg text-[#1C2F57] font-semibold mb-4">
                    Bihar State Electronics Development Corporation Ltd. (BSEDC Ltd.) is a Govt. of Bihar undertaking engaged in businesses related to Electronics, Computer goods and IT services.
                  </p>
                  <p>
                    The corporation caters to the technological needs of the government and carries out IT project conceptualization and implementation for State Government Departments and agencies.
                  </p>
                  <p>
                    BSEDC believes that an opportunity for delivering solutions and IT services goes beyond routine delivery. We understand the vision and mission of the organization, assess stakeholder needs, work towards measurable objectives, and deliver superior value to the beneficiaries.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-[#f8fbff] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-blue-100/50 p-8 md:p-12"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm uppercase tracking-wide mb-8">
                <FiTarget size={16} /> Our Mission
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "To Provide Excellent Electronic, IT Goods, IT Services to the Government of Bihar.",
                  "To help its clients adapt themselves to modern management techniques.",
                  "To create a robust IT eco-system for enhancing competitiveness and productivity of key economic sectors.",
                  "To disseminate IT and ITeS activities across the State so that rural populations are equally benefited.",
                  "To significantly enhance the availability of skilled manpower in the Government sector.",
                  "To provide seamless and reliable citizen-centric services, enhancing efficiency, transparency, and accountability."
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheckCircle size={16} />
                    </div>
                    <span className="text-[14.5px] text-gray-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1C2F57] to-[#0A2E73] rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 text-white/5 transform rotate-12">
                <FiCompass size={180} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 font-bold text-sm uppercase tracking-wide mb-6 backdrop-blur-md">
                  <FiCompass size={16} /> Our Vision
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight text-white">
                  Empowering Bihar Through Technology
                </h3>
                
                <div className="w-12 h-1 bg-yellow-400 mb-6 rounded-full"></div>
                
                <p className="text-[17px] text-blue-100 font-medium leading-[1.8]">
                  e-Development of Bihar as the engine for transition into a developed State and an empowered society.
                </p>
              </div>
            </motion.div>

            {/* Feature Image Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group h-[300px] lg:h-auto lg:flex-1"
            >
              <img src="/images/mission-vision.png" alt="Mission and Vision" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E73]/90 via-[#0A2E73]/20 to-transparent flex flex-col justify-end p-8">
                <p className="text-white/90 text-sm font-bold tracking-widest uppercase mb-1">Building</p>
                <p className="text-white font-medium">A robust digital ecosystem for tomorrow.</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
