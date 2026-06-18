import React from 'react'
import { notices } from '../data'

const NoticeTicker = () => (
  <div className="w-full bg-[#f8fbff] border-y border-blue-100 overflow-hidden shadow-sm relative z-30">
    <div className="max-w-[90rem] mx-auto px-3 md:px-5 xl:px-4 2xl:px-6 flex items-center h-[52px]">
      
      {/* Badge */}
      <div className="flex-shrink-0 bg-gradient-to-r from-[#D32F2F] to-[#E53935] text-white text-[13px] font-bold px-4 py-1.5 rounded shadow-sm flex items-center gap-2 z-10 relative uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        Latest Updates
      </div>
      
      {/* Ticker */}
      <div className="overflow-hidden flex-1 px-6 relative">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {[...notices, ...notices].map((n, i) => (
            <a href="#" key={i} className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1C2F57] cursor-pointer hover:text-[#0F4BB8] transition-colors group">
              <span className="text-[#0F4BB8] text-[10px] group-hover:translate-x-1 transition-transform">▶</span>
              {n}
              {i % 2 === 0 && <span className="bg-[#E53935] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm animate-pulse ml-1">NEW</span>}
            </a>
          ))}
        </div>
      </div>

      {/* View All */}
      <a href="#" className="flex-shrink-0 bg-white border border-blue-200 text-[#0F4BB8] text-[12px] font-bold px-3 py-1.5 rounded hover:bg-blue-50 transition shadow-sm z-10 relative">
        View All
      </a>

    </div>
  </div>
)

export default NoticeTicker
