import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiChevronRight, FiFileText, FiDownload } from 'react-icons/fi'

const Procurement = () => {
  const { type } = useParams()
  const isEProcurement = type === 'eprocurement'
  const title = isEProcurement ? 'E-Procurement' : 'Rate Contract'

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#1C2F57] text-white pt-10 pb-16">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} className="opacity-70" />
            <span className="opacity-80">Procurement</span>
            <FiChevronRight size={14} className="opacity-70" />
            <span className="text-white">{title}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg shrink-0">
              <FiFileText size={24} className="text-[#4DB8FF]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                {title}
              </h1>
              <p className="text-blue-200 text-[15px] md:text-base max-w-2xl leading-relaxed">
                {isEProcurement 
                  ? 'Access the official electronic procurement portal and related guidelines.'
                  : 'View and download official rate contracts for various services and equipment.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          {isEProcurement ? (
            <div className="p-8 md:p-12">
              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-[15px]">
                <p className="mb-6">
                  In this eGovernance era, the government of Bihar strongly believes that the Information Technology has to be utilized by each and every individual of Bihar. Hence, Bihar State Electronics Development Corporation; Patna, a Government of Bihar undertaking, has taken an initiative and appointed the service providers, M/s. KEONICS in consortium with M/s.Antares Systems Limited, from Bangalore, Karnataka for the eTendering / eProcurement solution and issued a strategy paper on the subject.
                </p>
                <div className="mt-8">
                  <a 
                    href="https://eproc2.bihar.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0F4BB8] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0c3d96] transition-colors"
                  >
                    Go to E-Procurement Portal <FiChevronRight />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-0">
              <div className="overflow-x-auto p-4 bg-white">
                <table className="w-full text-left border-collapse border border-gray-300 min-w-[800px]">
                  <thead>
                    <tr className="bg-[#f8f9fa] border-b border-gray-300 text-[#1C2F57] text-[14px]">
                      <th className="p-3 font-bold border border-gray-300 w-16 text-center">Sr. No.</th>
                      <th className="p-3 font-bold border border-gray-300">Rate Document</th>
                      <th className="p-3 font-bold border border-gray-300 w-[200px]">Published On</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="3" className="p-8 text-center text-gray-500 border border-gray-300">
                        No Data to show, please refresh or come back again in sometime
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Procurement
