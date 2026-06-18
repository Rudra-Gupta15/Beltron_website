import React from 'react'
import { motion } from 'framer-motion'
import { tenders, vacancies } from '../data'

const Careers = () => (
  <section id="tenders" className="py-24 bg-white">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 xl:gap-16">

        {/* Tenders */}
        <div>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase shadow-sm">
              Procurement
            </span>
          </div>
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0F172A] mb-8 tracking-tight">Active Tenders</h2>
          <div className="flex flex-col gap-4">
            {tenders.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 border-l-4 border-l-[#0A2E73] rounded-lg p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-[#0F172A] text-[15px] mb-4 group-hover:text-[#0A2E73] transition-colors leading-snug">
                  {t.title}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-gray-500 font-semibold bg-gray-50 border border-gray-200 px-2.5 py-1 rounded">Ref: {t.ref}</span>
                    <span className="text-[12px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">📅 {t.date}</span>
                  </div>
                  <a href="#" className="flex items-center gap-2 text-[13px] font-bold text-white bg-[#0A2E73] hover:bg-blue-800 px-4 py-1.5 rounded transition-colors shadow-sm">
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 mt-8 text-[14px] font-bold text-[#0A2E73] hover:text-blue-700 transition-colors">
            View All Tenders →
          </a>
        </div>

        {/* Vacancies */}
        <div id="vacancies">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.15em] text-[#0A2E73] uppercase shadow-sm">
              Recruitment
            </span>
          </div>
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0F172A] mb-8 tracking-tight">Current Vacancies</h2>
          <div className="flex flex-col gap-4">
            {vacancies.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white border border-gray-200 rounded-lg p-5 transition-all group ${
                  v.date === 'Closed' 
                  ? 'border-l-4 border-l-gray-300 opacity-80' 
                  : 'border-l-4 border-l-[#0A2E73] hover:shadow-md cursor-pointer'
                }`}
              >
                <h3 className={`font-bold text-[15px] mb-4 transition-colors leading-snug ${v.date === 'Closed' ? 'text-gray-500' : 'text-[#0F172A] group-hover:text-[#0A2E73]'}`}>
                  {v.title}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-gray-500 font-semibold bg-gray-50 border border-gray-200 px-2.5 py-1 rounded">{v.type}</span>
                    <span className={`text-[12px] font-bold px-2.5 py-1 rounded border ${v.date === 'Closed' ? 'text-rose-600 bg-rose-50 border-rose-200' : 'text-emerald-700 bg-emerald-50 border-emerald-200'}`}>
                      {v.date === 'Closed' ? '🔴 Closed' : `📅 ${v.date}`}
                    </span>
                  </div>
                  <a href="#"
                    className={`flex items-center gap-2 text-[13px] font-bold px-4 py-1.5 rounded transition-colors shadow-sm ${
                      v.date === 'Closed'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none'
                        : 'bg-[#0A2E73] text-white hover:bg-blue-800'
                    }`}
                  >
                    {v.date === 'Closed' ? 'Closed' : 'Apply Now'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-2 mt-8 text-[14px] font-bold text-[#0A2E73] hover:text-blue-700 transition-colors">
            View All Vacancies →
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Careers
