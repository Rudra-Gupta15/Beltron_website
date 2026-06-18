import React from 'react'
import { partners } from '../data'

const Clients = () => (
  <section id="vendors" className="py-14 bg-govgray border-y border-gray-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
      <h2 className="section-title">Empanelled Vendors & Partners</h2>
      <p className="section-sub">Government-approved partners powering Bihar's digital ecosystem</p>
    </div>
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-4 items-center px-4">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-[54px] px-6 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:border-[#0F4BB8] hover:shadow-[0_4px_12px_rgba(10,46,115,0.06)] transition-all duration-300 cursor-pointer group"
          >
            <img 
              src={p.logo} 
              alt={p.name} 
              className="h-6 w-auto object-contain transition-all duration-300"
            />
            <span className="text-[14px] font-bold text-[#1C2F57] group-hover:text-[#0A2E73] transition-colors">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Clients
