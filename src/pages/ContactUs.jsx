import React from 'react'
import { FiMail, FiPhoneCall, FiHeadphones, FiMapPin } from 'react-icons/fi'

const ContactUs = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0A2E73] text-white pt-16 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We are here to help. Reach out to our dedicated support teams, helpdesks, and management for any inquiries or assistance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Official Email */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 text-[#0F4BB8] rounded-xl flex items-center justify-center mb-6">
              <FiMail size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Official Contacts</h3>
            <div className="space-y-5">
              <div>
                <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Managing Director</p>
                <a href="mailto:mdbeltron@bihar.gov.in" className="text-[17px] font-semibold text-[#0A2E73] hover:text-blue-500 transition-colors">
                  mdbeltron@bihar.gov.in
                </a>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div>
                <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Manpower Services</p>
                <a href="mailto:beltronmanpower@gmail.com" className="text-[17px] font-semibold text-[#0A2E73] hover:text-blue-500 transition-colors">
                  beltronmanpower@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: ERP Helpdesk */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <FiHeadphones size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">ERP Helpdesk</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">1</span>
                <p className="text-[17px] font-semibold text-gray-800">0612-2281815</p>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">2</span>
                <p className="text-[17px] font-semibold text-gray-800">+91 9262994967</p>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">3</span>
                <p className="text-[17px] font-semibold text-gray-800">+91 9262994968</p>
              </div>
            </div>
          </div>

          {/* Card 3: Call Center */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
              <FiPhoneCall size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Call Center</h3>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">1</span>
                <p className="text-[17px] font-semibold text-gray-800">0612-2281819</p>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold text-gray-500 shrink-0">2</span>
                <p className="text-[17px] font-semibold text-gray-800">0612-2281810</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">Web Info Manager</p>
              <p className="text-[16px] font-semibold text-[#0A2E73]">BSEDC IT Administration</p>
            </div>
          </div>

        </div>

        {/* Address Banner */}
        <div className="bg-[#0A2E73] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="flex items-start gap-6 mb-8 md:mb-0 relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
              <FiMapPin size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Head Office</h3>
              <p className="text-blue-100 text-[17px] leading-relaxed max-w-md">
                Bihar State Electronics Development Corporation Ltd.<br />
                Beltron Bhawan, Shastri Nagar,<br />
                Patna - 800 023, Bihar
              </p>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <a href="https://maps.google.com/?q=Beltron+Bhawan+Patna" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-[#0A2E73] font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-lg">
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
