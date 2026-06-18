import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiChevronRight, FiUser } from 'react-icons/fi'

const directors = [
  {
    name: 'Mihir Kumar Singh, I.A.S',
    role: 'CHAIRMAN',
    details: 'Development Commissioner, Bihar-cum-Chairman, BSEDC Ltd., Old Secretariat, Patna',
    image: '/directors/mihir_kumar.png',
    position: 'object-right'
  },
  {
    name: 'K. Senthil Kumar, I.A.S',
    role: 'DIRECTOR',
    details: 'Additional Chief Secretary, Labour Resources & Migrant Workers Welfare Department, Govt. of Bihar',
    image: '/directors/k_senthil.png'
  },
  {
    name: 'Pankaj Kumar, I.A.S',
    role: 'DIRECTOR',
    details: 'Principal Secretary, Rural Development Department, Govt. of Bihar',
    image: '/directors/pankaj_kumar.png'
  },
  {
    name: 'Abhay Kumar Singh, I.A.S',
    role: 'DIRECTOR',
    details: 'Secretary, Information Technology Department, Govt. of Bihar',
    image: '/directors/abhay_kumar.png',
    position: 'object-[center_30%]'
  },
  {
    name: 'Kaushal Kishore, I.A.S',
    role: 'MANAGING DIRECTOR',
    details: 'Managing Director, BSEDC Ltd., Beltron Bhawan, Shastri Nagar, Patna',
    image: '/images/leaders/kaushal.png'
  },
  {
    name: 'Smt. Rachana Patil, I.A.S',
    role: 'DIRECTOR',
    details: 'Secretary (Expenditure), Finance Department, Govt. of Bihar, Patna',
    image: '/directors/rachana_patil.png'
  },
  {
    name: 'Himanshu Sharma, I.A.S',
    role: 'DIRECTOR',
    details: 'Secretary, Science, Technology & Technical Education Department, Govt. of Bihar',
    image: '/directors/himanshu_sharma.png'
  },
  {
    name: '-',
    role: 'DIRECTOR',
    details: 'Secretary (Resources), Finance Department, Govt. of Bihar, Patna',
    image: null
  },
  {
    name: 'Nitin Kumar Puri',
    role: 'DIRECTOR',
    details: 'Executive Director, NIELIT, Patna',
    image: '/directors/nitin_kumar.png'
  },
  {
    name: 'Rajiv Misra',
    role: 'DIRECTOR',
    details: 'HoD, IT Department, IIT Patna',
    image: '/directors/rajiv_misra.png'
  }
]

const BoardOfDirectors = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Page Header with Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            Board of Directors
          </h1>
          
          <nav className="flex items-center text-[13px] font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1.5 hover:text-[#0F4BB8] transition-colors">
              <FiHome size={14} />
              Home
            </Link>
            <FiChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-[#003A8C] font-semibold">Board of Directors</span>
          </nav>
        </div>
      </div>

      {/* Directors Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 gap-6">
          {directors.map((director, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="pt-8 pb-2 flex items-center justify-center bg-white relative">
                <div className="absolute top-0 w-full h-1/2 bg-gray-50 border-b border-gray-100"></div>
                {director.image ? (
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className={`w-48 h-48 rounded-full object-cover shadow-md border-4 border-white ring-1 ring-gray-200 relative z-10 bg-white ${director.position || 'object-top'}`}
                  />
                ) : (
                  <div className="w-48 h-48 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#0A2E73] shadow-inner border-4 border-white ring-1 ring-gray-200 relative z-10">
                    <FiUser size={72} />
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="px-6 pb-6 pt-2 flex flex-col flex-1 text-center items-center bg-white">
                <span className={`text-[11px] font-bold tracking-[0.15em] mb-3 px-3 py-1 rounded-full ${
                  director.role === 'CHAIRMAN' ? 'bg-indigo-50 text-indigo-700' :
                  director.role === 'MANAGING DIRECTOR' ? 'bg-emerald-50 text-emerald-700' :
                  'bg-blue-50 text-[#0A2E73]'
                }`}>
                  {director.role}
                </span>
                
                <h3 className="text-[17px] font-bold text-[#0F172A] mb-3 leading-snug">
                  {director.name}
                </h3>
                
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed mt-auto">
                  {director.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoardOfDirectors
