import React, { useState } from 'react'
import { FiImage, FiChevronRight, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import galleryData from '../data/gallery.json'

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState('All Albums')
  const [selectedImage, setSelectedImage] = useState(null)

  // Filter out empty albums
  const validAlbums = galleryData.filter(album => album.images.length > 0 || (album.videos && album.videos.length > 0))
  const albumNames = ['All Albums', ...validAlbums.map(a => a.title)]

  const displayAlbums = activeAlbum === 'All Albums' 
    ? validAlbums 
    : validAlbums.filter(a => a.title === activeAlbum)

  return (
    <div className="bg-[#F8FAFF] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#0f2d69] py-16 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/grid-pattern.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-4 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-white">Gallery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <FiImage className="opacity-80" /> Media Gallery
          </h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            A visual journey highlighting our activities, events, and programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        
        {/* Album Filters */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-4 md:p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {albumNames.map((name, i) => (
              <button
                key={i}
                onClick={() => setActiveAlbum(name)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeAlbum === name
                    ? 'bg-[#0F4BB8] text-white shadow-md'
                    : 'bg-[#F4F7FB] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0f2d69]'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-12">
          {displayAlbums.map((album, idx) => (
            <div key={idx} className="animate-fade-in">
              {activeAlbum === 'All Albums' && (
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#0f2d69]">{album.title}</h2>
                  <div className="h-[1px] flex-1 bg-gray-200"></div>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {album.images.map((imgSrc, i) => (
                  <div 
                    key={i} 
                    className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer shadow-sm hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${album.title} image ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d69]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-medium line-clamp-2">
                        {album.title}
                      </span>
                    </div>
                  </div>
                ))}
                {album.videos && album.videos.map((vidSrc, i) => (
                  <div 
                    key={`vid-${i}`} 
                    className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-200 shadow-sm transition-all"
                  >
                    <iframe
                      loading="lazy"
                      src={vidSrc}
                      title={`${album.title} Video ${i + 1}`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {displayAlbums.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FiImage size={48} className="mx-auto mb-4 opacity-20" />
              <p>No images found for this album.</p>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/80 p-2 rounded-full"
              >
                <FiX size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
