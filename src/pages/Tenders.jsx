import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { FiChevronRight, FiSearch, FiFileText } from 'react-icons/fi'

import currentTendersData from '../data/currentTenders.json'
import archivedTendersData from '../data/archivedTenders.json'

const Tenders = () => {
  const { type } = useParams()
  const [searchQuery, setSearchQuery] = useState('')

  if (type !== 'current' && type !== 'archived') {
    return <Navigate to="/tenders/current" replace />
  }

  const isCurrent = type === 'current'
  const title = isCurrent ? 'Current Tenders' : 'Archived Tenders'
  const data = isCurrent ? currentTendersData : archivedTendersData

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredData = data.filter(tender =>
    tender.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const handlePrev = () => setCurrentPage(p => Math.max(1, p - 1))
  const handleNext = () => setCurrentPage(p => Math.min(totalPages, p + 1))

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#f1f5f9] py-6 px-4 border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-[14px] text-gray-500 mb-6 font-medium">
            <Link to="/" className="hover:text-[#0F4BB8] flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span className="mx-1">&raquo;</span>
            <span className="text-[#0F4BB8]">Tenders</span>
          </div>
          
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#1C2F57]">
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-6 mt-8">
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-4 bg-[#fcfcfc] border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-[350px]">
              <input 
                type="text" 
                placeholder={`Search for ${title}..`}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#0F4BB8] focus:border-[#0F4BB8] transition-all text-[14px]"
              />
            </div>
            
            <div className="flex items-center gap-4 text-[14px] text-gray-700">
              <span>Showing {paginatedData.length > 0 ? startIndex + 1 : 0} to {startIndex + paginatedData.length} of {filteredData.length}</span>
              <div className="flex">
                <button 
                  onClick={handlePrev} 
                  disabled={currentPage === 1}
                  className="px-4 py-1.5 border border-gray-300 bg-white font-semibold text-gray-800 hover:bg-gray-50 rounded-l-[3px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="px-4 py-1.5 border-t border-b border-r border-gray-300 bg-white font-semibold text-gray-800 hover:bg-gray-50 rounded-r-[3px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto p-4 bg-white">
            <table className="w-full text-left border-collapse border border-gray-300 min-w-[800px]">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-gray-300 text-[#1C2F57] text-[14px]">
                  <th className="p-3 font-bold border border-gray-300 w-16 text-center">Sr. No.</th>
                  <th className="p-3 font-bold border border-gray-300">Tender Name</th>
                  <th className="p-3 font-bold border border-gray-300 w-[180px]">Bid Closing Date Time</th>
                  <th className="p-3 font-bold border border-gray-300 w-[180px]">Bid Opening Date Time</th>
                  <th className="p-3 font-bold border border-gray-300 w-[120px]">Tender Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((tender, index) => (
                  <tr key={tender.id} className="border-b border-gray-300 hover:bg-gray-50/50 transition-colors">
                    <td className="p-3 text-[15px] text-gray-800 border border-gray-300 align-top">
                      {tender.id}
                    </td>
                    <td className="p-3 text-[15px] border border-gray-300 align-top">
                      <div className="flex justify-between items-start gap-4">
                        <a href="#" className="text-[#333399] underline font-medium leading-relaxed">
                          {tender.name}
                        </a>
                        {tender.isNew && (
                          <span className="shrink-0 mt-0.5 inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm shadow-red-200 tracking-wide">
                            NEW
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-[14px] text-gray-800 border border-gray-300 align-top">
                      {tender.closeDate}
                    </td>
                    <td className="p-3 text-[14px] text-gray-800 border border-gray-300 align-top">
                      {tender.openDate}
                    </td>
                    <td className="p-3 text-[14px] text-gray-800 border border-gray-300 align-top">
                      {tender.status}
                    </td>
                  </tr>
                ))}
                {paginatedData.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500 border border-gray-300">
                      No tenders found matching your search.
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

export default Tenders
