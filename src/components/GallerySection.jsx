import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const galleryCategories = [
  'All',
  'Bihar Agritech Summit',
  'Jal Jivan Hariyali',
  'Bihar IT/ITeS Conclave',
  'Patna Ideathon (2018)',
  'Events in Beltron (2)'
]

const galleryItems = [
  { img: 'https://bsedc.bihar.gov.in/media/cache/82/6a/826afec3b2216fdcda0106bfa85d0a55.webp', title: 'Bihar Agritech Summit', tag: 'Summit', category: 'Bihar Agritech Summit' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/0b/b7/0bb75ff03b2ff17168c5e5eb7fa24fc7.webp', title: 'Jal Jivan Hariyali Mission', tag: 'Campaign', category: 'Jal Jivan Hariyali' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/40/f0/40f00c6f7b50d4c34dae739aab2bf8ac.webp', title: 'Bihar IT/ITeS Conclave', tag: 'Conclave', category: 'Bihar IT/ITeS Conclave' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/27/8b/278bd052b2bac484908793ce3a6aec48.webp', title: 'Patna Ideathon 2018', tag: 'Ideathon', category: 'Patna Ideathon (2018)' },
  { img: 'https://img.youtube.com/vi/e4cVI0DBp4A/hqdefault.jpg', title: 'Events in Beltron', tag: 'Event', category: 'Events in Beltron (2)' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/bd/c7/bdc790c58120390d4480a6f1363483f6.webp', title: 'Agritech Innovations Expo', tag: 'Expo', category: 'Bihar Agritech Summit' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/bc/8a/bc8a9e3869c0da5907583a053888c643.webp', title: 'IT Leaders Meet', tag: 'Meetup', category: 'Bihar IT/ITeS Conclave' },
  { img: 'https://bsedc.bihar.gov.in/media/cache/3e/7c/3e7cc025f3ce1d21970d556616eb8bfb.webp', title: 'Startup Pitches', tag: 'Pitch', category: 'Patna Ideathon (2018)' },
]

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? galleryItems.slice(0, 8) // Show up to 8 items by default if All is selected
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 pb-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#003A8C] uppercase shadow-sm">
              Media
            </span>
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0F172A] mt-3 tracking-tight">Photo Gallery</h2>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex mt-4 text-[#003A8C] font-bold text-[14px] hover:underline underline-offset-4 transition-all items-center gap-2">
            View All Photos →
          </Link>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {galleryCategories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-[14px] font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#0A2E73] text-white shadow-md' 
                  : 'bg-[#F8FAFC] text-gray-600 hover:bg-[#F1F5F9] border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, i) => (
            <div key={i} className="group relative rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(10,46,115,0.15)] transition-all duration-500 cursor-pointer">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E73]/90 via-[#0A2E73]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-5 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#E53935] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm mb-2">
                  {item.tag}
                </span>
                <h3 className="text-white font-bold text-[16px] leading-snug">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/gallery" className="inline-flex text-[#0F4BB8] font-bold text-[14px] hover:text-[#0A2E73] transition-colors items-center gap-2 border-b-2 border-[#0F4BB8] pb-1">
            View All Photos →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default GallerySection
