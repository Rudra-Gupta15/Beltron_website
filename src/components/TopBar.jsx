import React, { useState } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { MdAccessibility } from 'react-icons/md'

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#0A2E73] via-[#0F4BB8] to-[#0A2E73] px-3 py-2.5 text-white sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex w-full items-start justify-between gap-2 lg:items-center">
        
        {/* Left — Government logos / affiliations */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] font-medium tracking-wide">
          <span className="flex items-center gap-1.5 text-white hover:text-cyan-100 transition cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Government_of_Bihar_Emblem.svg" alt="Govt of Bihar" className="h-[18px] w-auto object-contain bg-white/90 rounded-sm p-0.5" />
            <span>Government of Bihar</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-white/95 hover:text-cyan-100 transition cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ministry_of_Electronics_and_Information_Technology.svg" alt="MeitY" className="h-[18px] w-auto object-contain bg-white/90 rounded-sm p-0.5" />
            <span>MeitY</span>
          </span>
          <span className="hidden md:flex items-center rounded-sm bg-white/10 px-2 py-0.5 border border-white/20 transition hover:bg-white/20 cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/en/9/95/Digital_India_logo.svg" alt="Digital India" className="h-[14px] w-auto object-contain bg-white/90 rounded-sm px-1 py-0.5" />
            <span className="ml-1.5 font-semibold text-white">Digital India</span>
          </span>
          <span className="hidden lg:flex items-center rounded-sm bg-white/10 px-2 py-0.5 border border-white/20 transition hover:bg-white/20 cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/National_Informatics_Centre_Logo.svg" alt="NIC" className="h-[14px] w-auto object-contain bg-white/90 rounded-sm px-1 py-0.5" />
            <span className="ml-1.5 font-semibold text-white">NIC</span>
          </span>
        </div>

        {/* Right — Menus & Accessibility */}
        <div className="hidden lg:flex items-center gap-5 text-[13px] font-medium tracking-[0.01em]">
          
          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 text-white/90 hover:text-white transition">
              Offerings <FiChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200"/>
            </span>
          </div>
          
          <div className="group relative cursor-pointer">
            <span className="flex items-center gap-1 text-white/90 hover:text-white transition">
              Quick Links <FiChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200"/>
            </span>
          </div>

          <a href="#contact" className="text-white/90 hover:text-white transition">Contact Us</a>

          <div className="relative ml-1 group">
            <div className="flex items-center rounded-md border border-white/30 bg-white/10 overflow-hidden transition-all focus-within:w-48 focus-within:bg-white/95 focus-within:border-cyan-200 w-8 focus-within:shadow-lg">
              <button className="flex h-7 w-8 shrink-0 items-center justify-center text-cyan-100 group-focus-within:text-[#0F4BB8] hover:text-white transition-colors">
                <FiSearch size={14} strokeWidth={2.5} />
              </button>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent border-none focus:outline-none text-xs text-gray-800 placeholder-gray-400 py-1"
                onKeyDown={(e) => {
                  if(e.key === 'Enter') {
                    window.location.href = `/search?q=${e.target.value}`
                  }
                }}
              />
            </div>
          </div>

          <div className="group relative">
            <span className="flex items-center gap-1.5 rounded border border-white/35 bg-white/10 px-2 py-1 text-[11px] text-white/95 hover:bg-white/20 transition shadow-sm cursor-pointer">
              <MdAccessibility size={14} />
              Accessibility
              <FiChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-200" />
            </span>
            
            {/* Accessibility Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3">
              <div className="mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Text Size</span>
                <div className="flex gap-2">
                  <button onClick={() => { document.documentElement.style.fontSize = '14px' }} className="flex-1 py-1 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 font-medium text-sm">A-</button>
                  <button onClick={() => { document.documentElement.style.fontSize = '16px' }} className="flex-1 py-1 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 font-medium text-base">A</button>
                  <button onClick={() => { document.documentElement.style.fontSize = '18px' }} className="flex-1 py-1 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 font-medium text-lg">A+</button>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <button 
                  onClick={() => document.documentElement.classList.toggle('high-contrast')}
                  className="w-full py-1.5 bg-black text-yellow-300 font-bold text-xs uppercase tracking-wide rounded border border-yellow-300 hover:bg-gray-900 transition-colors"
                >
                  High Contrast
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle (Placeholder for TopBar) */}
        <div className="lg:hidden flex items-center">
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 transition">
            <FiSearch size={14} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default TopBar
