import React from 'react'
import { FiTarget, FiCompass, FiCheckCircle } from 'react-icons/fi'

const MissionVision = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0f2d69] py-16 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/grid-pattern.png')]"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Mission & Vision</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg relative z-10">
          Empowering Bihar Through Technology
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 md:p-10 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0F4BB8] flex items-center justify-center shrink-0">
                <FiTarget size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#0f2d69]">Our Mission</h2>
            </div>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <FiCheckCircle className="text-[#0F4BB8] shrink-0 mt-1" />
                <span>To provide state-of-the-art IT infrastructure and e-Governance solutions.</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-[#0F4BB8] shrink-0 mt-1" />
                <span>To empower government departments with technological advancements.</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="text-[#0F4BB8] shrink-0 mt-1" />
                <span>To ensure transparency, efficiency, and reliability in public services.</span>
              </li>
            </ul>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 md:p-10 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0F4BB8] flex items-center justify-center shrink-0">
                <FiCompass size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#0f2d69]">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To transform Bihar into a digitally empowered society and knowledge economy by providing robust, scalable, and inclusive technological solutions.
            </p>
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm">
               <img src="/images/mission-vision.png" alt="Mission and Vision" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MissionVision
