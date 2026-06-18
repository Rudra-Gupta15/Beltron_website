import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data'

const Services = () => (
  <section id="services" className="py-20 bg-white relative">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#f8fbff] px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#0F4BB8] uppercase shadow-sm">
          Service Portfolio
        </span>
        <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0A2E73] mt-4 mb-3 tracking-tight">Integrated Offerings</h2>
        <p className="text-[#1C2F57] opacity-80 max-w-2xl font-medium">End-to-end ICT services across cloud, applications, communications, and secure infrastructure for government institutions.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="group rounded-[1.25rem] border p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_22px_rgba(10,46,115,0.04)] hover:shadow-[0_16px_28px_rgba(10,46,115,0.12)] flex flex-col gap-3 relative overflow-hidden"
            style={{ 
              background: `linear-gradient(to bottom right, #ffffff, ${s.color || '#F8FBFF'})`,
              borderColor: '#D6E6FF'
            }}
          >
            {/* Hover subtle glow */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white/80 shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-extrabold text-[#0A2E73] text-[15px] sm:text-[16px] mt-4 mb-2 leading-tight group-hover:text-[#0F4BB8] transition-colors">{s.title}</h3>
              <p className="text-[13px] text-[#1C2F57] opacity-80 leading-relaxed font-medium">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  </section>
)

export default Services
