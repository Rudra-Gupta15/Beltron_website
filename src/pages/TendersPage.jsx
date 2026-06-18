import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiChevronRight, FiDownload, FiSearch, FiFilter } from 'react-icons/fi'

const mockTenders = [
  { id: 'NIT/2024/001', title: 'Supply and Installation of Desktop Computers for various departments.', date: '2024-06-15', closing: '2024-07-05', status: 'Active', file: 'Tender_Document_001.pdf', size: '2.4 MB' },
  { id: 'RFP/2024/045', title: 'Selection of Agency for Cloud Hosting Services (MeitY Empanelled).', date: '2024-06-10', closing: '2024-06-30', status: 'Active', file: 'Cloud_RFP_Final.pdf', size: '5.1 MB' },
  { id: 'NIT/2024/003', title: 'Empanelment of Agencies for Data Entry Operations.', date: '2024-05-20', closing: '2024-06-10', status: 'Closed', file: 'Data_Entry_Empanelment.pdf', size: '1.8 MB' },
  { id: 'CORR/2024/01', title: 'Corrigendum 1: Extension of last date for RFP/2024/045.', date: '2024-06-12', closing: '2024-06-30', status: 'Active', file: 'Corrigendum_01.pdf', size: '450 KB' },
  { id: 'NIT/2024/005', title: 'Procurement of Biometric Attendance Devices (Aadhaar Enabled).', date: '2024-05-01', closing: '2024-05-21', status: 'Closed', file: 'Biometric_Tender.pdf', size: '3.2 MB' },
]

const TendersPage = () => {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredTenders = mockTenders.filter(t => {
    const matchesFilter = filter === 'All' || t.status === filter;
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  })

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Tenders & Procurements</h1>
          <nav className="flex items-center text-[13px] font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1.5 hover:text-[#0F4BB8] transition-colors"><FiHome size={14} /> Home</Link>
            <FiChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-[#003A8C] font-semibold">Tenders</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl border border-[#D1DFEC] shadow-sm overflow-hidden">
          
          {/* Controls */}
          <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50/50 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search tender title or ID..." 
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0F4BB8] focus:ring-1 focus:ring-[#0F4BB8] text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FiFilter className="text-gray-500" size={16} />
              <select 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0F4BB8] w-full md:w-auto"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active Tenders</option>
                <option value="Closed">Closed Tenders</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F4BB8] text-white text-[13px] uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Tender Ref. No.</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Published Date</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Closing Date</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Document</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((tender, i) => (
                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-[13px] text-gray-600 font-medium whitespace-nowrap">{tender.id}</td>
                      <td className="px-6 py-4 font-medium text-[#1C2F57] max-w-md">{tender.title}</td>
                      <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{tender.date}</td>
                      <td className="px-6 py-4 font-medium text-red-600 whitespace-nowrap">{tender.closing}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${tender.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                          {tender.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0F4BB8] text-[#0F4BB8] hover:bg-[#0F4BB8] hover:text-white transition-colors text-[13px] font-semibold whitespace-nowrap group">
                          <FiDownload size={14} className="group-hover:animate-bounce" />
                          <span className="flex flex-col items-start leading-none">
                            PDF
                            <span className="text-[9px] opacity-80 mt-0.5">{tender.size}</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      No tenders found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TendersPage
