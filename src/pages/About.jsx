import React from 'react'
import { FiTarget, FiCompass, FiCheckCircle, FiInfo } from 'react-icons/fi'

const About = () => {
  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0A2E73] text-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Driving the e-Development of Bihar to empower society through reliable, citizen-centric IT services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left Content */}
          <div className="p-8 md:p-12 md:w-2/3">
            
            {/* Who We Are */}
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0A2E73] flex items-center justify-center">
                  <FiInfo size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
                <p>
                  Bihar State Electronics Development Corporation Ltd. (BSEDC Ltd.), is a Govt. of Bihar undertaking engaged in businesses related to Electronics, Computer goods and IT services. The corporation caters to the technological needs of the government and carries out IT project conceptualization and implementation for the State Government Departments and agencies.
                </p>
                <p>
                  BSEDC believes that an opportunity for delivering solutions and IT services is beyond the routine delivery of IT services and solutions, understand vision, mission of the organization, assess the needs of the stakeholders, work towards measurable objectives and deliver value to the beneficiaries by delivering superior value through its services and solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-14 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0A2E73] flex items-center justify-center">
                  <FiTarget size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <ul className="space-y-5">
                {[
                  "To Provide Excellent Electronic, IT Goods, IT Services to the Government of Bihar.",
                  "To help its clients adapt themselves to the modern management techniques.",
                  "To create a robust IT eco-system for enhancing competitiveness and productivity of the key economic sectors affecting the lives of the majority of the population of the State.",
                  "To disseminate the IT and ITeS activities across the State so that rural population is equally benefited.",
                  "To significantly enhance the availability of skilled manpower in the Government sector.",
                  "To provide seamless and reliable citizen-centric services and information for the public, thereby enhancing efficiency, transparency and accountability of Government."
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 text-[#0A2E73]">
                      <FiCheckCircle size={20} />
                    </div>
                    <span className="text-[15px] text-gray-800 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#0A2E73] flex items-center justify-center">
                  <FiCompass size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-[#0A2E73] font-semibold leading-relaxed bg-[#f0f4fc] p-6 rounded-xl border border-blue-100">
                e-Development of Bihar as the engine for transition into a developed State and an empowered society.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="md:w-1/3 bg-gray-100 relative min-h-[300px]">
             <img src="/images/mission-vision.png" alt="Mission and Vision" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E73]/90 via-[#0A2E73]/40 to-transparent flex flex-col justify-end p-8">
               <div className="w-12 h-1 bg-yellow-400 mb-4 rounded-full"></div>
               <h3 className="text-white text-3xl font-bold leading-tight">Empowering Bihar<br/>Through Technology</h3>
               <p className="text-blue-100 mt-3 text-sm font-medium">Building a robust digital ecosystem for tomorrow.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
