import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiChevronRight } from 'react-icons/fi'

const InternalPage = ({ title }) => {
  const location = useLocation()
  
  // Basic breadcrumb logic
  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Page Header with Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
            {title}
          </h1>
          
          <nav className="flex items-center text-[13px] font-medium text-gray-500">
            <Link to="/" className="flex items-center gap-1.5 hover:text-[#0F4BB8] transition-colors">
              <FiHome size={14} />
              Home
            </Link>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`
              const isLast = index === pathnames.length - 1
              return (
                <React.Fragment key={to}>
                  <FiChevronRight size={14} className="mx-2 text-gray-400" />
                  {isLast ? (
                    <span className="text-[#003A8C] font-semibold capitalize">{value.replace(/-/g, ' ')}</span>
                  ) : (
                    <Link to={to} className="hover:text-[#0F4BB8] transition-colors capitalize">
                      {value.replace(/-/g, ' ')}
                    </Link>
                  )}
                </React.Fragment>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Page Content Placeholder */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-[#D1DFEC] p-12 text-center shadow-sm">
          <p className="text-gray-500 text-lg">
            This is a dedicated internal page for <strong>{title}</strong>.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            In a complete CMS, this content would be fetched dynamically.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InternalPage
