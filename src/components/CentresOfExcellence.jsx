import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiTarget, FiMic, FiStar, FiArrowRight } from 'react-icons/fi'

const CentresOfExcellence = () => (
  <section id="coe" className="py-24 bg-white relative">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      {/* Header aligned perfectly to the center */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-bold tracking-[0.2em] text-[#0A2E73] uppercase mb-6">
          <span className="text-blue-500">#</span> DIGITAL BIHAR
        </span>
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0F172A] leading-[1.2] tracking-tight mb-6">
          A digital excellence workshop series for AI, Cyber Security, and Cloud.
        </h2>
        <p className="text-[18px] text-gray-500 leading-relaxed font-medium">
          Digital Bihar is BELTRON's flagship initiative under the state's Digital Excellence Programme. The launch focused on technology readiness, emerging technologies, and secure, inclusive, citizen-centric digital governance.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: 4-Grid Info Panels (Takes 5 columns) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-blue-50 hover:shadow-md transition duration-300">
            <div className="text-[11px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase mb-2">Programme</div>
            <div className="text-[15px] font-bold text-[#0F172A] leading-snug">Digital Excellence Programme</div>
          </div>
          <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-blue-50 hover:shadow-md transition duration-300">
            <div className="text-[11px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase mb-2">Date</div>
            <div className="text-[15px] font-bold text-[#0F172A] leading-snug">20 April 2026</div>
          </div>
          <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-blue-50 hover:shadow-md transition duration-300">
            <div className="text-[11px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase mb-2">Venue</div>
            <div className="text-[15px] font-bold text-[#0F172A] leading-snug">Convention Centre,<br/>Patna</div>
          </div>
          <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-blue-50 hover:shadow-md transition duration-300">
            <div className="text-[11px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase mb-2">Impact</div>
            <div className="text-[15px] font-bold text-[#0F172A] leading-snug">10,000+ Direct<br/>1 Lakh+ Indirect</div>
          </div>
          
          <div className="col-span-2 mt-4">
            <a href="#" className="flex items-center justify-center gap-2 bg-[#0A2E73] text-white font-bold text-[15px] w-full py-4 rounded-xl hover:bg-[#0F4BB8] transition-colors shadow-[0_8px_20px_rgba(10,46,115,0.15)]">
              Open Digital Bihar Story <FiArrowRight className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right: Detailed Cards (Takes 7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Card 1: Objectives */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <FiTarget className="text-[#0A2E73] text-xl" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#0A2E73] uppercase">Objectives</div>
                <h3 className="text-[20px] font-bold text-[#0F172A]">What the workshop is built to do.</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-50 text-green-600 rounded-full p-1"><FiCheck size={14}/></div>
                <span className="text-[14px] text-gray-600 font-medium leading-relaxed">Build awareness and institutional preparedness for AI, Cyber Security, and Cloud.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-50 text-green-600 rounded-full p-1"><FiCheck size={14}/></div>
                <span className="text-[14px] text-gray-600 font-medium leading-relaxed">Strengthen secure, inclusive, citizen-centric digital governance.</span>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="mt-1 bg-green-50 text-green-600 rounded-full p-1"><FiCheck size={14}/></div>
                <span className="text-[14px] text-gray-600 font-medium leading-relaxed">Create a repeatable capacity-building model for ministries, departments, and States/UTs.</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Leadership Voices */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <FiMic className="text-[#0A2E73] text-xl" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-[#0A2E73] uppercase">Leadership Voices</div>
                <h3 className="text-[20px] font-bold text-[#0F172A]">The officials shaping the launch.</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-blue-100 pl-4">
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">Chief Guest</div>
                <div className="text-[15px] text-[#0F172A] font-bold">Shri Samrat Choudhary</div>
                <div className="text-[13px] text-gray-500 font-medium">Hon'ble Chief Minister</div>
              </div>
              <div className="border-l-2 border-blue-100 pl-4">
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">State leadership</div>
                <div className="text-[15px] text-[#0F172A] font-bold">Shri Nitish Mishra</div>
                <div className="text-[13px] text-gray-500 font-medium">Hon'ble IT Minister</div>
              </div>
              <div className="border-l-2 border-blue-100 pl-4">
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">IT leadership</div>
                <div className="text-[15px] text-[#0F172A] font-bold">Kaushal Kishore, IAS</div>
                <div className="text-[13px] text-gray-500 font-medium">MD, BSEDC</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  </section>
)

export default CentresOfExcellence
