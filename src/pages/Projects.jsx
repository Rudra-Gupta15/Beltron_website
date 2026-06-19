import React, { useState } from 'react'
import { FiBriefcase, FiChevronRight, FiFolder, FiCheckCircle, FiClock, FiActivity, FiSearch, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import extractedProjects from '../data/projects.json'

const statusOptions = ['All', 'Active', 'Upcoming', 'Completed']

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // We assign mock statuses to the extracted projects based on keywords or randomly if none exists,
  // to make the demo realistic according to the "Active / Upcoming" requirement.
  const projects = extractedProjects.map((proj, i) => {
    let status = 'Active'
    let color = '#0F4BB8'
    let icon = <FiActivity className="text-[#0F4BB8]" />
    
    const titleLower = proj.title.toLowerCase()
    if (titleLower.includes('closed') || titleLower.includes('completed')) {
      status = 'Completed'
      color = '#059669'
      icon = <FiCheckCircle className="text-[#059669]" />
    } else if (titleLower.includes('upcoming') || titleLower.includes('selection')) {
      status = 'Upcoming'
      color = '#D97706'
      icon = <FiClock className="text-[#D97706]" />
    } else if (i % 3 === 0) {
      status = 'Upcoming'
      color = '#D97706'
      icon = <FiClock className="text-[#D97706]" />
    } else if (i % 5 === 0) {
      status = 'Completed'
      color = '#059669'
      icon = <FiCheckCircle className="text-[#059669]" />
    }

    return {
      ...proj,
      status,
      color,
      icon,
      // Create a mock description since the website didn't have one in the card
      desc: `Implementing ${proj.title.replace(/[\u2013\u2026-]/g, '').trim()} to enhance digital infrastructure and service delivery across government departments in Bihar.`
    }
  })

  const filteredProjects = projects.filter(p => {
    const matchesTab = activeTab === 'All' || p.status === activeTab
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const getImageForProject = (title) => {
    const t = title.toLowerCase();
    if (t.includes('hrms') || t.includes('human')) return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80';
    if (t.includes('procurement') || t.includes('finance')) return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
    if (t.includes('court') || t.includes('law')) return 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80';
    if (t.includes('ai ') || t.includes('artificial')) return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80';
    if (t.includes('security') || t.includes('audit')) return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80';
    if (t.includes('network') || t.includes('mpls') || t.includes('bswan') || t.includes('internet')) return 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80';
    if (t.includes('data') || t.includes('baaf')) return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80';
    
    // Default fallback array
    const fallbacks = [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    ];
    return fallbacks[t.length % fallbacks.length];
  };

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0f2d69] py-16 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/grid-pattern.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-white">Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <FiFolder className="opacity-80" /> Digital Projects
          </h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            Explore key BELTRON projects, infrastructure augmentations, and implementation updates across Bihar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        
        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-4 md:p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {statusOptions.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-[#0f2d69] shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F4BB8]/20 focus:border-[#0F4BB8] transition-all text-sm"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx}
              className="relative rounded-[20px] overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 group flex flex-col h-[320px] md:h-[360px]"
            >
              {/* Background Image */}
              <img 
                src={getImageForProject(proj.title)}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Colored & Dark Overlay */}
              <div 
                className="absolute inset-0 opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70"
                style={{ backgroundColor: proj.color }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/30"></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                
                {/* Top Row: Number & Badge */}
                <div className="flex justify-between items-start w-full">
                  <span 
                    className="text-5xl md:text-6xl text-white/30 font-light leading-none"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  <span className="px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border border-white/20 bg-white/10 backdrop-blur-md text-white/90">
                    {proj.title.substring(0, 15).split(' ')[0]} {proj.status === 'Upcoming' ? 'PLAN' : 'TECH'}
                  </span>
                </div>

                {/* Bottom Row: Title */}
                <div className="mt-auto flex justify-between items-end gap-6">
                  <h3 
                    className="text-lg md:text-xl font-bold text-white leading-tight md:leading-snug line-clamp-3"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <FiFolder size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">We couldn't find any projects matching your search.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects
