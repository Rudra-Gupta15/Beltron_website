import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiChevronRight, FiFileText, FiExternalLink, FiShield, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const Procurement = () => {
  const { type } = useParams()
  const isEProcurement = type === 'eprocurement'
  const title = isEProcurement ? 'E-Procurement Portal' : 'Rate Contracts'

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-24 font-sans selection:bg-blue-200">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-br from-[#0c1f44] via-[#0A2E73] to-[#0f4bb8] text-white pt-16 pb-28 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[13px] text-blue-200/80 mb-8 font-semibold tracking-wider uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} className="opacity-70" />
            <span className="opacity-80">Procurement</span>
            <FiChevronRight size={14} className="opacity-70" />
            <span className="text-white">{title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] shrink-0">
              <FiFileText size={30} className="text-[#4DB8FF]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {title}
              </h1>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
                {isEProcurement 
                  ? 'Official gateway for electronic tendering and transparent government procurement.'
                  : 'Centralized repository of approved rate contracts for equipment and services.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 -mt-16 relative z-20">
        
        {isEProcurement ? (
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-stretch">
            {/* Main Content Box */}
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 overflow-hidden relative flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-bl-full -z-10"></div>
              
              <h2 className="text-2xl font-bold text-[#0A2E73] mb-6 flex items-center gap-3">
                Digital Procurement Initiative
              </h2>
              
              <div className="prose prose-blue max-w-none text-gray-600 leading-loose text-[16px] mb-10">
                <p>
                  In this eGovernance era, the Government of Bihar strongly believes that Information Technology must be utilized to benefit every individual in the state. 
                </p>
                <p>
                  As a key initiative, <strong>Bihar State Electronics Development Corporation (BELTRON)</strong> has appointed the consortium of M/s. KEONICS and M/s. Antares Systems Limited (Bangalore) to implement a robust, secure, and transparent eTendering / eProcurement solution across all departments.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: <FiShield />, title: "Secure Platform", desc: "End-to-end encrypted bidding process" },
                  { icon: <FiTrendingUp />, title: "Efficiency", desc: "Streamlined evaluation & awarding" },
                  { icon: <FiCheckCircle />, title: "Transparency", desc: "Open access to all tender notices" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-[#f8fbff] border border-blue-100/50">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0F4BB8] flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C2F57] text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-start mt-auto">
                <a 
                  href="https://eproc2.bihar.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#0F4BB8] to-[#0A2E73] px-8 py-4 text-white font-bold shadow-[0_10px_30px_rgba(15,75,184,0.3)] hover:shadow-[0_15px_40px_rgba(15,75,184,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  <span>Access E-Procurement Portal</span>
                  <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Side Info Panel */}
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-[#1C2F57] to-[#0A2E73] rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute -right-10 -top-10 text-white/5">
                  <FiFileText size={150} />
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Helpdesk Support</h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed relative z-10">
                  For technical assistance regarding the e-Procurement portal, bidder registration, or digital signatures.
                </p>
                <div className="space-y-4 relative z-10">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="block text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Toll Free</span>
                    <span className="text-lg font-semibold text-white">1800 572 6571</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="block text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Email Support</span>
                    <span className="text-sm font-semibold text-white">eproc2support@bihar.gov.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-[#1C2F57]">Active Rate Contracts</h2>
              <div className="relative">
                <input type="text" placeholder="Search contracts..." className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full sm:w-64" />
                <FiFileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="overflow-x-auto p-6">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#f8f9fa] text-[#1C2F57] text-[13px] uppercase tracking-wider">
                    <th className="p-4 font-bold border-y border-gray-200 w-16 text-center rounded-l-xl">Sr. No.</th>
                    <th className="p-4 font-bold border-y border-gray-200">Rate Document</th>
                    <th className="p-4 font-bold border-y border-gray-200 w-[200px] rounded-r-xl">Published On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3" className="p-16 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <FiFileText size={48} className="mb-4 opacity-20" />
                        <p className="text-gray-500 font-medium">No rate contracts currently available.</p>
                        <p className="text-sm mt-1">Please check back later for updates.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Procurement
