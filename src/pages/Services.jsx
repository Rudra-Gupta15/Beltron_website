import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiBriefcase, FiMonitor, FiMail, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const originalServices = [
  {
    title: "Manpower Services",
    icon: FiUsers,
    paragraphs: [
      "Beltron provides manpower support to the various departments of Govt. of Bihar. We provide Data Entry Operators, Programmers, and other skilled IT manpower for the betterment of departments to enhance their outcomes.",
      "At present BELTRON has around 4500 IT manpower on contract basis and is still recruiting more. The IT manpower is recruited by ‘Bihar Knowledge Society’. The manpower is outsourced to various state departments."
    ],
    contact: "beltronmanpower@gmail.com",
    bg: "bg-blue-50",
    color: "text-[#0F4BB8]"
  },
  {
    title: "IT Consultancy",
    icon: FiBriefcase,
    paragraphs: [
      'Beltron as a field of activity focuses on advising Government organizations on how best to use information technology (IT) in achieving their different objectives. In addition to providing advice, Beltron often estimates, manages, implements, deploys, and administers IT systems on behalf of their client organizations - a practice known as "outsourcing".',
      "We have empanelled and offered world’s renowned consultancy services to the departments. Some of our empanelled Consultants are actively engaged in transforming the digital landscape of the state."
    ],
    bg: "bg-indigo-50",
    color: "text-indigo-600"
  },
  {
    title: "E-Gov / ITES",
    icon: FiMonitor,
    paragraphs: [
      <>BELTRON joined hands with IL&FS to form a 50-50 Joint venture company called <strong>‘Bihar e-Governance Services & Electronics Ltd (BEST)’</strong> in the year 2006. Its functions are mainly to provide consultancy and Project Management services to the state in e-Governance projects.</>
    ],
    bg: "bg-sky-50",
    color: "text-sky-600"
  }
]

const Services = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20 font-sans">
      
      {/* Premium Header */}
      <div className="relative bg-[#0A192F] pt-24 pb-36 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-[#00B4D8] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-[#0077B6] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-white">Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Services
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl leading-relaxed">
            Providing reliable IT solutions, skilled manpower, and expert consultancy to drive digital governance in Bihar.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-20 relative z-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {originalServices.map((srv, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i}
              className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${srv.bg} ${srv.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <srv.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold text-[#0f2d69] mb-4 group-hover:text-[#00B4D8] transition-colors">{srv.title}</h3>
              
              <div className="text-gray-500 leading-relaxed mb-8 flex-1 text-[15px] space-y-4">
                {srv.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
              
              {srv.contact ? (
                <div className="mt-auto bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Contact specific desk</p>
                  <a href={`mailto:${srv.contact}`} className="text-[14px] font-bold text-[#0F4BB8] hover:underline flex items-center gap-2 break-all">
                    <FiMail /> {srv.contact}
                  </a>
                </div>
              ) : (
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button className="text-[14px] font-bold text-[#0F4BB8] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Service <FiArrowRight />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-[#0F4BB8] to-[#0A2E73] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-white overflow-hidden relative shadow-2xl"
        >
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Need a custom IT solution?</h3>
            <p className="text-blue-100 text-[17px] leading-relaxed">
              Our expert consultancy team is ready to evaluate your departmental needs and architect a tailored digital strategy.
            </p>
          </div>
          <Link 
            to="/contact-us" 
            className="relative z-10 bg-white text-[#0F4BB8] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
