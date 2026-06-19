import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiFileText, FiArrowRight, FiLoader } from 'react-icons/fi'
import { vacancies, projects } from '../data/index'
import circularsData from '../data/lettersAndCirculars.json'
import currentTendersData from '../data/currentTenders.json'

const tabs = ['Latest Tenders', 'Recruitments', 'Important Circulars']

// Helper to generate a realistic looking fake file size
const getDocSize = (title) => {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (1.2 + (Math.abs(hash) % 45) / 10).toFixed(1) + ' MB';
}

const formattedTenders = currentTendersData.slice(0, 5).map(t => ({
  title: t.name,
  date: t.closeDate,
  size: getDocSize(t.name)
}))

const formattedVacancies = vacancies.map(v => ({
  title: `${v.title} - ${v.type}`,
  date: v.date,
  size: getDocSize(v.title)
}))

const formattedCirculars = circularsData.slice(0, 5).map(c => ({
  title: c.name,
  date: c.publishDate,
  size: getDocSize(c.name)
}))

const DocumentBoard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [documents, setDocuments] = useState({
    'Latest Tenders': formattedTenders,
    'Recruitments': formattedVacancies,
    'Important Circulars': formattedCirculars
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // If you need to fetch from a real backend in the future:
    // fetch('http://localhost:3001/documents')
    //   .then(res => res.json())
    //   .then(data => {
    //     setDocuments(data)
    //     setLoading(false)
    //   })
    //   .catch(err => {
    //     console.error("Failed to fetch live documents:", err)
    //     setLoading(false)
    //   })
  }, [])

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Tabbed Document List */}
          <div className="lg:col-span-2 flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {/* Clean Corporate Tabs Header */}
            <div className="flex border-b border-gray-200 bg-gray-50/50 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 text-[14px] font-bold whitespace-nowrap transition-colors relative ${
                    activeTab === tab 
                    ? 'text-[#0A2E73] bg-white' 
                    : 'text-gray-500 hover:text-[#0A2E73] hover:bg-white/50'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0A2E73]" />
                  )}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="flex flex-col">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 text-[#0A2E73]">
                  <FiLoader className="animate-spin mb-3" size={28} />
                  <span className="text-[15px] font-bold">Loading documents...</span>
                </div>
              ) : documents[activeTab]?.length > 0 ? (
                documents[activeTab].map((doc, i) => (
                  <div key={i} className="group flex items-start gap-4 p-5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors">
                    <div className="mt-0.5 text-[#0A2E73]">
                      <FiFileText size={20} />
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-[15px] font-semibold text-[#1C2F57] group-hover:text-[#0A2E73] transition-colors line-clamp-2 leading-snug mb-1.5">
                        {doc.title}
                      </h4>
                      <div className="flex items-center gap-4 text-[13px] text-gray-500 font-medium">
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-gray-500 text-[15px] font-medium">
                  No documents found for {activeTab}.
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-right">
              <Link 
                to={activeTab === 'Latest Tenders' ? '/tenders/current' : activeTab === 'Recruitments' ? '/vacancies' : '/letters-and-circulars'} 
                className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0A2E73] hover:text-blue-700 transition-colors"
              >
                View All {activeTab} <FiArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Quick Links / Static Info Panel */}
          <div className="bg-[#0A2E73] rounded-xl shadow-sm p-8 text-white flex flex-col relative overflow-hidden">
             {/* subtle geometric pattern */}
             <div className="absolute top-0 right-0 w-48 h-48 border-[20px] border-white/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
             
             <div className="relative z-10 mb-6 pb-4 border-b border-white/20">
               <h3 className="text-[20px] font-bold tracking-tight">Digital Initiatives</h3>
             </div>
             
             <div className="flex flex-col gap-3 flex-1 relative z-10">
               {projects.slice(0, 4).map((item, i) => (
                 <Link to="/projects" key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/15 transition-colors border border-transparent hover:border-white/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                   <span className="text-[14px] font-medium text-gray-100 hover:text-white transition-colors">{item.title}</span>
                 </Link>
               ))}
             </div>
             
             <div className="mt-8 relative z-10">
               <Link to="/projects" className="flex items-center justify-center gap-2 w-full bg-white text-[#0A2E73] py-3 rounded-lg font-bold text-[14px] hover:bg-gray-100 transition-colors shadow-sm">
                 Explore All Initiatives <FiArrowRight size={16} />
               </Link>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default DocumentBoard
