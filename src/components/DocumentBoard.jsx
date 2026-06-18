import React, { useState, useEffect } from 'react'
import { FiDownload, FiFileText, FiArrowRight, FiLoader } from 'react-icons/fi'

const tabs = ['Latest Tenders', 'Recruitments', 'Important Circulars']

const DocumentBoard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [documents, setDocuments] = useState({
    'Latest Tenders': [],
    'Recruitments': [],
    'Important Circulars': []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch live data from the local json-server backend
    fetch('http://localhost:3001/documents')
      .then(res => res.json())
      .then(data => {
        setDocuments(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch live documents:", err)
        setLoading(false) // Optionally handle error state here
      })
  }, [])

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Tabbed Document List */}
          <div className="lg:col-span-2 bg-white border border-blue-100 rounded-xl shadow-[0_10px_30px_rgba(10,46,115,0.08)] overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-blue-100 bg-[#f8fbff] overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-colors relative ${
                    activeTab === tab 
                    ? 'text-[#0F4BB8] bg-white' 
                    : 'text-gray-600 hover:text-[#0F4BB8] hover:bg-white/50'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E53935]" />
                  )}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="p-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 text-[#0F4BB8]">
                  <FiLoader className="animate-spin mb-3" size={24} />
                  <span className="text-sm font-semibold">Loading live documents...</span>
                </div>
              ) : documents[activeTab]?.length > 0 ? (
                documents[activeTab].map((doc, i) => (
                  <div key={i} className="group flex items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition">
                    <div className="mt-1 bg-blue-100 text-[#0F4BB8] p-2 rounded">
                      <FiFileText size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-semibold text-[#1C2F57] group-hover:text-[#0F4BB8] transition line-clamp-2 leading-snug mb-1">
                        {doc.title}
                      </h4>
                      <div className="flex items-center gap-4 text-[12px] text-gray-500 font-medium">
                        <span>{doc.date}</span>
                        <span className="bg-red-50 text-red-600 px-1.5 rounded">PDF ({doc.size})</span>
                      </div>
                    </div>
                    <a href="#" className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-blue-200 text-[#0F4BB8] hover:bg-[#0F4BB8] hover:text-white transition shadow-sm">
                      <FiDownload size={14} />
                    </a>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500 text-sm">No documents found.</div>
              )}
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-100 text-right">
              <a href="#" className="inline-flex items-center gap-1 text-[13px] font-bold text-[#0F4BB8] hover:text-[#0A2E73] transition">
                View All {activeTab} <FiArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Quick Links / Static Info Panel */}
          <div className="bg-gradient-to-br from-[#0A2E73] to-[#0F4BB8] rounded-xl shadow-[0_10px_30px_rgba(10,46,115,0.15)] p-6 text-white flex flex-col relative overflow-hidden">
             {/* decorative background element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
             
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-white/20 pb-3 relative z-10">
               Digital Initiatives
             </h3>
             
             <div className="flex flex-col gap-3 flex-1 relative z-10">
               {['Bihar State Data Centre (SDC)', 'BSWAN (Bihar State Wide Area Network)', 'e-Procurement Portal', 'ERP Implementation'].map((item, i) => (
                 <a href="#" key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition group shadow-sm">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 group-hover:scale-150 transition-transform" />
                   <span className="text-[14px] font-semibold tracking-wide">{item}</span>
                 </a>
               ))}
             </div>
             
             <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
               <a href="#" className="flex items-center justify-center gap-2 w-full bg-white text-[#0A2E73] py-2.5 rounded-lg font-bold text-[14px] hover:bg-gray-100 transition shadow-sm">
                 Explore All Initiatives <FiArrowRight size={16} />
               </a>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default DocumentBoard
