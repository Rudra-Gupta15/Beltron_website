import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { mediaItems } from '../data'

const tabs = ['All', 'News', 'Press Release', 'Event', 'Gallery']

const News = () => {
  const [activeTab, setActiveTab] = useState('All')
  const filtered = activeTab === 'All' ? mediaItems : mediaItems.filter(m => m.type === activeTab)

  return (
    <section id="media" className="py-24 bg-[#F8FAFF] border-t border-blue-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#003A8C] uppercase shadow-sm">
              Media
            </span>
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0F172A] mt-3 tracking-tight">News & Resources</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all border ${
                activeTab === tab
                  ? 'bg-[#003A8C] text-white border-[#003A8C] shadow-[0_4px_14px_rgba(0,58,140,0.25)]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-200 hover:bg-blue-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(10,46,115,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Section with Glass Badge */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm">
                    {item.type}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[12px] font-bold text-gray-400 mb-3 uppercase tracking-wider">{item.date}</p>
                <h3 className="font-bold text-[#0F172A] text-[16px] mb-4 group-hover:text-[#0A2E73] transition-colors leading-snug flex-1">
                  {item.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[#0A2E73] text-[13px] font-bold group-hover:underline underline-offset-4">Read Full Story</span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0A2E73] group-hover:bg-[#0A2E73] group-hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
