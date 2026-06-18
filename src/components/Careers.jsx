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
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#003A8C] uppercase shadow-sm">
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
                className="bg-[#F8FAFF] border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all group cursor-pointer"
              >
                <h3 className="font-bold text-[#0F172A] text-[15px] mb-3 group-hover:text-[#0052CC] transition-colors leading-snug">
                  {t.title}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-gray-500 font-semibold bg-white border border-gray-200 px-2.5 py-1 rounded-md">Ref: {t.ref}</span>
                    <span className="text-[12px] font-bold text-[#b45309] bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">📅 Last Date: {t.date}</span>
                  </div>
                  <a href="#" className="text-[13px] font-bold text-[#003A8C] border border-[#003A8C] bg-white px-4 py-1.5 rounded-lg hover:bg-[#003A8C] hover:text-white transition-all shadow-sm">
                    📄 Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#" className="inline-flex rounded-full bg-[#003A8C] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,82,204,0.22)] transition hover:bg-[#0052CC] mt-8">
            View All Tenders
          </a>
        </div>

        {/* Vacancies */}
        <div id="vacancies">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#003A8C] uppercase shadow-sm">
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
                className="bg-[#F8FAFF] border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-sm transition-all group cursor-pointer"
              >
                <h3 className="font-bold text-[#0F172A] text-[15px] mb-3 group-hover:text-[#0052CC] transition-colors leading-snug">
                  {v.title}
                </h3>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-gray-500 font-semibold bg-white border border-gray-200 px-2.5 py-1 rounded-md">{v.type}</span>
                    <span className={`text-[12px] font-bold px-2.5 py-1 rounded-md border ${v.date === 'Closed' ? 'text-rose-700 bg-rose-50 border-rose-200' : 'text-emerald-700 bg-emerald-50 border-emerald-200'}`}>
                      {v.date === 'Closed' ? '🔴 Closed' : `📅 Last Date: ${v.date}`}
                    </span>
                  </div>
                  <a href="#"
                    className={`text-[13px] font-bold px-4 py-1.5 rounded-lg transition-all border shadow-sm ${
                      v.date === 'Closed'
                        ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white border-[#003A8C] text-[#003A8C] hover:bg-[#003A8C] hover:text-white'
                    }`}
                  >
                    {v.date === 'Closed' ? 'Closed' : 'Apply Now'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#" className="inline-flex rounded-full bg-[#003A8C] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,82,204,0.22)] transition hover:bg-[#0052CC] mt-8">
            View All Vacancies
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Careers
