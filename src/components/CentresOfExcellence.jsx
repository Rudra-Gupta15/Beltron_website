import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const CentresOfExcellence = () => (
  <section id="coe" className="py-24 bg-[#F8FAFF] relative">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

      {/* Modern, dynamic heading instead of classical left-aligned text */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[12px] font-bold tracking-[0.2em] text-[#0A2E73] uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0A2E73] animate-pulse"></span> Initiative Spotlight
        </div>
        <h2 className="text-[36px] md:text-[52px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-6">
          Digital Excellence Workshop for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2E73] to-[#00B4D8]">AI & Cloud</span>
        </h2>
        <p className="text-[18px] text-gray-600 leading-relaxed font-medium mx-auto">
          Digital Bihar is BELTRON's flagship initiative under the state's Digital Excellence Programme. The launch focused on technology readiness, emerging technologies, and secure, inclusive, citizen-centric digital governance.
        </p>
      </div>

      {/* Enterprise Unified Block Design */}
      <div className="bg-white rounded-none md:rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden flex flex-col lg:flex-row">

        {/* Left Sidebar: Event Brief (Corporate Blue) */}
        <div className="lg:w-[35%] bg-[#0A2E73] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 border-[30px] border-blue-400/10 rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 pb-6 border-b border-white/20">Programme Details</h3>

            <div className="space-y-8">
              <div>
                <div className="text-blue-300 text-[11px] font-bold uppercase tracking-widest mb-1">Date</div>
                <div className="text-[17px] font-medium">20 April 2026</div>
              </div>
              <div>
                <div className="text-blue-300 text-[11px] font-bold uppercase tracking-widest mb-1">Venue</div>
                <div className="text-[17px] font-medium leading-snug">Convention Centre,<br />Patna, Bihar</div>
              </div>
              <div>
                <div className="text-blue-300 text-[11px] font-bold uppercase tracking-widest mb-1">Projected Impact</div>
                <div className="text-[17px] font-medium leading-snug">10,000+ Direct reach<br />1 Lakh+ Indirect beneficiaries</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16">
            <a href="#" className="group flex items-center justify-between w-full bg-white text-[#0A2E73] py-4 px-6 font-bold text-[15px] hover:bg-gray-50 transition-colors">
              <span>Read Full Story</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-[65%] p-8 lg:p-14">

          {/* Section 1: Objectives */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 bg-blue-50 text-[#0A2E73] flex items-center justify-center font-bold text-lg rounded-sm">01</span>
              <h4 className="text-[22px] font-bold text-[#0F172A]">Core Objectives</h4>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A2E73] mt-2.5 shrink-0"></div>
                <span className="text-[15px] text-gray-700 leading-relaxed">
                  Build awareness and institutional preparedness for AI, Cyber Security, and Cloud.
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A2E73] mt-2.5 shrink-0"></div>
                <span className="text-[15px] text-gray-700 leading-relaxed">
                  Strengthen secure, inclusive, and citizen-centric digital governance models.
                </span>
              </li>
              <li className="flex gap-4 items-start sm:col-span-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A2E73] mt-2.5 shrink-0"></div>
                <span className="text-[15px] text-gray-700 leading-relaxed">
                  Create a repeatable, scalable capacity-building model for ministries, departments, and other States/UTs.
                </span>
              </li>
            </ul>
          </div>

          <hr className="border-gray-200 mb-14" />

          {/* Section 2: Leadership Voices */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 bg-blue-50 text-[#0A2E73] flex items-center justify-center font-bold text-lg rounded-sm">02</span>
              <h4 className="text-[22px] font-bold text-[#0F172A]">Leadership & Governance</h4>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="border-l-2 border-gray-200 pl-5 hover:border-[#0A2E73] transition-colors">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Chief Guest</div>
                <div className="text-[16px] text-[#0F172A] font-bold mb-1">Shri Samrat Choudhary</div>
                <div className="text-[13px] text-gray-500 font-medium leading-snug">Hon'ble Chief Minister</div>
              </div>

              <div className="border-l-2 border-gray-200 pl-5 hover:border-[#0A2E73] transition-colors">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">State Leadership</div>
                <div className="text-[16px] text-[#0F172A] font-bold mb-1">Shri Nitish Mishra</div>
                <div className="text-[13px] text-gray-500 font-medium leading-snug">Hon'ble IT Minister</div>
              </div>

              <div className="border-l-2 border-gray-200 pl-5 hover:border-[#0A2E73] transition-colors">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">IT Leadership</div>
                <div className="text-[16px] text-[#0F172A] font-bold mb-1">Kaushal Kishore, IAS</div>
                <div className="text-[13px] text-gray-500 font-medium leading-snug">Managing Director, BSEDC</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
)

export default CentresOfExcellence
