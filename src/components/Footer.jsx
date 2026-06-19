import React from 'react'
import { Link } from 'react-router-dom'
import { usefulLinks, resourceLinks, partners } from '../data'
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'

const Footer = () => (
  <>
    {/* Other Important Links (Light Theme matching NICSI reference) */}
    <section className="py-10 bg-[#F4F7FB] relative overflow-hidden border-t border-gray-200/60 text-gray-800">
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(10,46,115,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(10,46,115,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-[13px] font-bold tracking-[0.2em] text-[#0F4BB8] uppercase mb-4 pl-2">
          Other Important Links
        </h2>
        <div className="bg-gray-50/50 border border-gray-200/60 rounded-[1.25rem] p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)]">
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-4 items-center">
              {[...partners, ...partners, ...partners].map((p, i) => (
                  <a key={i} href="#" className="flex-shrink-0 h-[54px] px-6 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:border-[#0F4BB8] hover:shadow-[0_4px_12px_rgba(10,46,115,0.06)] transition-all duration-300 group">
                    <img 
                      src={p.logo} 
                      alt={p.name} 
                      className="h-6 w-auto object-contain transition-all duration-300"
                    />
                    <span className="text-[14px] font-bold text-[#1C2F57] group-hover:text-[#0A2E73] transition-colors">{p.name}</span>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer id="contact" className="text-white bg-[linear-gradient(115deg,#0a2e73_0%,#0f4bb8_50%,#0a2e73_100%)] relative overflow-hidden">
      {/* Subtle blurs in footer */}
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(110, 220, 255, 0.1)' }}></div>
      <div className="pointer-events-none absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(133, 232, 255, 0.1)' }}></div>

      {/* Main Footer Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12 relative z-10">

        {/* Col 1 - About */}
        <div>
          <div className="mb-6 inline-block bg-white rounded-xl px-4 py-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.2)] border border-white/10 ring-1 ring-black/5">
            <img src="/assets/beltron-logo.png" alt="BELTRON" className="h-10 w-auto object-contain" />
          </div>
          <h4 className="text-[11px] font-black tracking-[0.2em] text-cyan-200/80 uppercase mb-4">About BELTRON</h4>
          <p className="text-[14px] text-blue-100/90 leading-relaxed mb-6 font-medium">
            Bihar State Electronics Development Corporation Ltd. (BELTRON), established as a Government of Bihar 
            undertaking, is engaged in businesses related to Electronics, Computer goods, and IT services.
          </p>
          <a href="#about" className="inline-block border border-white/30 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            Know More
          </a>
        </div>

        {/* Col 2 - Useful Links */}
        <div>
          <h4 className="text-[11px] font-black tracking-[0.2em] text-cyan-200/80 uppercase mb-5">Useful Links</h4>
          <ul className="flex flex-col gap-3">
            {usefulLinks.map((l, i) => (
              <li key={i}>
                <Link to={l.path} className="text-[14px] font-medium text-blue-100/90 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-cyan-400 text-lg leading-none">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Resources */}
        <div>
          <h4 className="text-[11px] font-black tracking-[0.2em] text-cyan-200/80 uppercase mb-5">Resources & Media</h4>
          <ul className="flex flex-col gap-3">
            {resourceLinks.map((l, i) => (
              <li key={i}>
                <Link to={l.path} className="text-[14px] font-medium text-blue-100/90 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-cyan-400 text-lg leading-none">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Contact */}
        <div>
          <h4 className="text-[11px] font-black tracking-[0.2em] text-cyan-200/80 uppercase mb-5">Contact Us</h4>
          <div className="flex flex-col gap-4 text-[14px] font-medium text-blue-100/90">
            <p className="flex gap-3 items-start">
              <span className="text-cyan-400 mt-1">📍</span> 
              <span>Bihar State Electronics Development Corporation Ltd (Beltron), Baldev Bhawan Rd, Shastri Nagar, Patna, Bihar 800023</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="text-cyan-400">📞</span> 
              <span>0612-2281856 , 0612-2281857</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="text-cyan-400">📠</span> 
              <span>0612-2281856 , 0612-2281857</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="text-cyan-400">✉️</span> 
              <span>mdbeltron@bihar.gov.in</span>
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            {[<FiTwitter />, <FiFacebook />, <FiInstagram />, <FiLinkedin />].map((icon, i) => (
              <a key={i} href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-lg hover:bg-white/10 hover:border-white/40 transition-colors bg-white/5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Bar */}
      <div className="border-t border-blue-400/20 relative z-10">
        <div className="max-w-[90rem] mx-auto px-4 py-5 flex flex-wrap gap-4 justify-center">
          {['Sitemap', 'Terms & Conditions', 'Privacy Policy', 'Copyright Policy', 'Help', 'Website Policy', 'Hyperlinking Policy', 'Accessibility Statement'].map((l, i) => (
            <a key={i} href="#" className="text-[13px] font-medium text-blue-100/70 hover:text-white transition-colors px-2 border-r border-blue-400/20 last:border-0">
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Meta Bar */}
      <div className="border-t border-blue-400/20 bg-black/10 relative z-10">
        <div className="max-w-[90rem] mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Ownership', val: 'Content owned and maintained by BSEDC - BELTRON, Government of Bihar.' },
            { label: 'Development & Hosting', val: 'Website designed and developed by BSEDC - BELTRON.' },
            { label: 'Governance Baseline', val: 'Public pages are maintained with accessibility and security controls.' },
            { label: 'Last Updated', val: 'June 2026' },
          ].map((item, i) => (
            <div key={i}>
              <span className="block text-[10px] font-black tracking-[0.15em] uppercase text-cyan-200/60 mb-1.5">{item.label}</span>
              <span className="text-[12px] font-medium text-blue-100/80 leading-snug block pr-4">{item.val}</span>
            </div>
          ))}
        </div>
        
        {/* Hidden Credit Easter Egg */}
        <a href="https://rudra-gupta.vercel.app/" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 p-5 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 cursor-pointer group/egg">
          <span className="font-bold tracking-[0.2em] text-[9px] text-gray-400 group-hover/egg:text-gray-300 transition-colors uppercase">
            Designed By
          </span>
          <FaRobot className="text-[#38bdf8] text-[14px] opacity-80 group-hover/egg:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Branding Strip */}
      <div className="bg-white text-gray-800 relative z-10 py-6 border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-[#E33E18]">NIC</span>
              <span className="text-[10px] font-bold tracking-widest text-gray-500">NATIONAL INFORMATICS CENTRE</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none text-blue-900">Digital <span className="text-red-600">India</span></span>
              <span className="text-[10px] font-bold tracking-widest text-gray-500">POWER TO EMPOWER</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 font-medium">
            This site is best viewed in Chrome, Firefox, or Edge at 1920x1080 resolution.
          </p>
        </div>
      </div>

    </footer>
  </>
)

export default Footer
