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
              className="bg-white border border-[#D1DFEC] rounded-2xl p-5 hover:shadow-[0_12px_24px_rgba(13,53,130,0.08)] transition-shadow group cursor-pointer"
            >
              <div className="h-32 rounded-xl bg-[#F8FAFF] border border-blue-100 flex items-center justify-center text-5xl mb-4 group-hover:bg-blue-50 transition-colors">
                {item.emoji}
              </div>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#0052CC] mb-3">
                {item.type}
              </span>
              <h3 className="font-bold text-[#0F172A] text-[15px] mb-2 group-hover:text-[#0052CC] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] font-semibold text-gray-500 mb-4">{item.date}</p>
              <a href="#" className="inline-flex text-[#003A8C] text-[13px] font-bold hover:underline underline-offset-4">Read More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
