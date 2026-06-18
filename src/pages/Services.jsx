import React from 'react'
import { FiUsers, FiBriefcase, FiMonitor, FiMail, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0f2d69] py-16 text-white px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-white">Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            Providing reliable IT solutions, skilled manpower, and expert consultancy to drive digital governance in Bihar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        
        {/* Manpower Services Section */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-8 md:p-10 mb-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0F4BB8] flex items-center justify-center shrink-0">
              <FiUsers size={28} />
            </div>
            <h2 className="text-2xl font-bold text-[#0f2d69]">Manpower Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Beltron provides manpower support to the various departments of Govt. of Bihar. We provide Data Entry Operators, Programmers, and other skilled IT manpower for the betterment of departments to enhance their outcomes.
              </p>
              <p>
                At present BELTRON has around 4500 IT manpower on contract basis and is still recruiting more. The IT manpower is recruited by ‘Bihar Knowledge Society’. The manpower is outsourced to various state departments.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="bg-[#F4F7FB] border border-[#D1DFEC] rounded-xl p-6 h-full flex flex-col justify-center transition-colors hover:border-[#0F4BB8]">
                <h4 className="font-bold text-[#1C2F57] mb-2 flex items-center gap-2">
                  <FiMail className="text-[#0F4BB8]" /> Contact
                </h4>
                <p className="text-[13px] text-gray-500 mb-2">Send manpower related queries to:</p>
                <a href="mailto:beltronmanpower@gmail.com" className="text-[#0F4BB8] font-semibold hover:underline break-all">
                  beltronmanpower@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IT Consultancy Section */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-8 md:p-10 mb-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0F4BB8] flex items-center justify-center shrink-0">
              <FiBriefcase size={28} />
            </div>
            <h2 className="text-2xl font-bold text-[#0f2d69]">IT Consultancy</h2>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Beltron as a field of activity focuses on advising Government organizations on how best to use information technology (IT) in achieving their different objectives. In addition to providing advice, Beltron often estimates, manages, implements, deploys, and administers IT systems on behalf of their client organizations - a practice known as "outsourcing".
            </p>
            <p>
              We have empanelled and offered world’s renowned consultancy services to the departments. Some of our empanelled Consultants are actively engaged in transforming the digital landscape of the state.
            </p>
          </div>
        </div>

        {/* E-Gov / ITES Section */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-8 md:p-10 mb-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0F4BB8] flex items-center justify-center shrink-0">
              <FiMonitor size={28} />
            </div>
            <h2 className="text-2xl font-bold text-[#0f2d69]">E-Gov / ITES</h2>
          </div>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              BELTRON joined hands with IL&FS to form a 50-50 Joint venture company called <strong>‘Bihar e-Governance Services & Electronics Ltd (BEST)’</strong> in the year 2006. Its functions are mainly to provide consultancy and Project Management services to the state in e-Governance projects.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
