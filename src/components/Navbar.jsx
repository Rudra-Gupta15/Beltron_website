import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiHome, FiInfo, FiUsers, FiUserCheck, FiTarget, FiPhone, FiGrid, FiCloud, FiMessageSquare, FiMail, FiServer, FiBriefcase } from 'react-icons/fi'

const navItems = [
  {
    label: 'Profile',
    mega: true,
    columns: [
      [
        { label: 'About Us', desc: 'Overview of BELTRON mandate, mission, and role.', href: '/about', icon: FiInfo },
        { label: 'Board of Directors', desc: 'Current board composition and member details.', href: '/board-of-directors', icon: FiUsers },
        { label: 'Managing Directors', desc: 'Historical list of managing directors.', href: '/board-of-directors', icon: FiUserCheck },
      ],
      [
        { label: 'Our Team', desc: 'Unified view of HQ personnel and work allocation.', href: '/about', icon: FiGrid },
        { label: 'Mission & Vision', desc: 'Official organizational hierarchy and goals.', href: '/about', icon: FiTarget },
        { label: 'Contact Us', desc: 'Get in touch with our support and helpdesks.', href: '/contact', icon: FiPhone },
      ]
    ]
  },
  {
    label: 'Projects',
    children: [
      { label: 'Active Projects', href: '/projects' },
      { label: 'Upcoming Initiatives', href: '/projects' },
    ],
  },
  {
    label: 'Services',
    mega: true,
    columns: [
      [
        { label: 'Cloud Services', desc: 'Secure hosting and digital infrastructure.', href: '/services', icon: FiCloud },
        { label: 'Messaging Services', desc: 'Bulk SMS and notification delivery.', href: '/services', icon: FiMessageSquare },
        { label: 'Email Services', desc: 'Official bulk email communication services.', href: '/services', icon: FiMail },
      ],
      [
        { label: 'Manpower Services', desc: 'Skilled IT professionals supply.', href: '/services', icon: FiUsers },
        { label: 'Data Centre Services', desc: 'Robust server and managed hosting solutions.', href: '/services', icon: FiServer },
        { label: 'IT Consultancy', desc: 'Expert tech guidance for government.', href: '/services', icon: FiBriefcase },
      ]
    ]
  },
  {
    label: 'Procurement',
    children: [
      { label: 'E-Procurement', href: '/tenders' },
      { label: 'Rate Contract', href: '/tenders' },
    ],
  },
  {
    label: 'Tenders',
    children: [
      { label: 'Current Tenders', href: '/tenders' },
      { label: 'Archived Tenders', href: '/tenders' },
    ],
  },
  { label: 'Vacancies', href: '/vacancies' },
  {
    label: 'Resources',
    children: [
      { label: 'Letters & Circulars', href: '/resources' },
      { label: 'RTI', href: '/resources' },
      { label: 'Downloads', href: '/resources' },
    ],
  },
  { label: 'Media', href: '/news' },
]

const DropdownMenu = ({ item }) => {
  if (item.mega) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-3 bg-white border border-[#D1DFEC] rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-5 z-50 w-[640px] grid grid-cols-2 gap-3"
      >
        {item.columns.map((col, cIdx) => (
          <div key={cIdx} className="flex flex-col gap-3">
            {col.map((link, lIdx) => {
              const Icon = link.icon || FiInfo;
              return (
                <Link
                  key={lIdx}
                  to={link.href}
                  className="flex items-start gap-4 p-4 border border-[#e2e8f0] rounded-[10px] transition-all hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:border-[#0F4BB8] bg-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] text-[#0F4BB8] flex items-center justify-center shrink-0 group-hover:bg-[#0F4BB8] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 mt-[-2px]">
                    <h5 className="text-[13px] font-bold text-[#0f2d69] mb-1 group-hover:text-[#0F4BB8] transition-colors">{link.label}</h5>
                    <p className="text-[11.5px] text-[#64748b] leading-relaxed">{link.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-1 bg-white border border-[#D1DFEC] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-1.5 z-50 min-w-[220px]"
    >
      {item.children.map((child, i) => (
        <li key={i}>
          <Link
            to={child.href}
            className="block px-3 py-2 text-[13px] font-semibold text-[#334155] rounded-lg transition-all hover:bg-[#F4F7FB] hover:text-[#0F4BB8]"
          >
            {child.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  )
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`w-full bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-md border-b border-blue-100/80' : 'border-b border-blue-100/50'}`}>
      <div className="max-w-[90rem] mx-auto px-3 md:px-5 xl:px-4 2xl:px-6">
        <div className="flex items-center justify-between" style={{ height: '76px' }}>

          {/* Logos */}
          <div className="flex items-center gap-4 shrink-0 py-2">
            <div className="hidden sm:flex items-center">
              <img src="/assets/bihar-sarkar-logo.png" alt="Bihar Sarkar" className="h-12 xl:h-14 w-auto object-contain" />
            </div>
            <Link to="/" className="flex items-center border-l-2 border-gray-200/80 pl-4 h-[3.5rem]">
              <img src="/assets/beltron-logo.png" alt="BELTRON" className="h-10 xl:h-[3rem] w-auto object-contain translate-y-[2px]" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 ml-auto">
            
            <Link to="/" className="group relative rounded-md border border-transparent px-2.5 2xl:px-3 py-2 2xl:py-2.5 text-[#1C2F57] transition hover:border-cyan-100 hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff] hover:text-[#0F4BB8]">
              <FiHome size={16} />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#12B8FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {navItems.map((item, i) => (
              <div
                key={i}
                className="relative py-1"
                onMouseEnter={() => (item.children || item.mega) && setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || '#'}
                  className="group relative flex h-10 2xl:h-11 items-center gap-1 rounded-md px-2.5 2xl:px-3 py-2 2xl:py-2.5 text-[14px] 2xl:text-[15px] font-semibold tracking-[0.005em] text-[#1C2F57] transition border border-transparent hover:border-cyan-100 hover:bg-gradient-to-r hover:from-[#edf6ff] hover:to-[#e4f2ff] hover:text-[#0F4BB8] whitespace-nowrap"
                >
                  {item.label}
                  {(item.children || item.mega) && <FiChevronDown size={14} className="mt-[1px] transition-transform duration-200 group-hover:rotate-180" />}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#12B8FF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <AnimatePresence>
                  {(item.children || item.mega) && activeDropdown === i && (
                    <DropdownMenu item={item} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center ml-4">
            <button
              className="w-10 h-10 rounded-md border border-blue-100 bg-white text-[#1C2F57] flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(m => !m)}
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden xl:hidden border-t border-blue-100 bg-[#f8fbff]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <div key={i}>
                  <Link
                    to={item.href || '#'}
                    className="block px-3 py-2.5 text-[14px] font-semibold text-[#1C2F57] hover:text-[#0F4BB8] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => !item.children && !item.mega && setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 flex flex-col gap-0.5">
                      {item.children.map((child, j) => (
                        <Link key={j} to={child.href} className="block px-3 py-1.5 text-[13px] text-gray-600 hover:text-[#0F4BB8] rounded-lg" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.mega && (
                    <div className="pl-4 mt-1 flex flex-col gap-0.5">
                      {item.columns.flat().map((child, j) => (
                        <Link key={j} to={child.href} className="block px-3 py-1.5 text-[13px] text-gray-600 hover:text-[#0F4BB8] rounded-lg" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
