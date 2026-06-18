import React from 'react'

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop', title: 'IT Conclave 2026', tag: 'Event' },
  { img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop', title: 'Data Centre Inauguration', tag: 'Inauguration' },
  { img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop', title: 'Tech Saksham Workshop', tag: 'Workshop' },
  { img: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop', title: 'StartUp Bihar Meet', tag: 'Event' },
]

const GallerySection = () => (
  <section className="py-20 bg-white border-t border-gray-100">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[12px] font-bold tracking-[0.14em] text-[#003A8C] uppercase shadow-sm">
            Media
          </span>
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#0F172A] mt-3 tracking-tight">Photo Gallery</h2>
        </div>
        <a href="#" className="hidden md:inline-flex mt-4 text-[#003A8C] font-bold text-[14px] hover:underline underline-offset-4 transition-all items-center gap-2">
          View All Photos →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, i) => (
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
        <a href="#" className="inline-flex text-[#0F4BB8] font-bold text-[14px] hover:text-[#0A2E73] transition-colors items-center gap-2 border-b-2 border-[#0F4BB8] pb-1">
          View All Photos →
        </a>
      </div>

    </div>
  </section>
)

export default GallerySection
