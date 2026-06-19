import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data'
import './HeroSlider.css'

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [paused])

  const slide = heroSlides[current]

  return (
    <section id="home" className={`hero relative overflow-hidden ${slide.bg}`}>
      {/* Decorative blurs matching NICSI reference */}
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(110, 220, 255, 0.24)' }}></div>
      <div className="pointer-events-none absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(133, 232, 255, 0.2)' }}></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full z-20" style={{ background: 'linear-gradient(to right, rgba(126,226,255,0.72), rgba(189,243,255,0.7), rgba(126,226,255,0.72))' }}></div>

      <div className="max-w-[80rem] mx-auto px-8 w-full relative z-10 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center pb-8 pt-4"
          >
            {/* Left Content */}
            <div className="flex flex-col items-start text-left border-l-[4px] border-white/30 pl-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-white"></span>
                <span className="text-[11px] font-bold tracking-[0.25em] text-white uppercase">{slide.tag}</span>
              </div>
              
              <h1 className="text-[38px] md:text-[48px] font-black text-white leading-[1.1] mb-5 tracking-tight">
                {slide.title}
              </h1>
              
              <p className="text-[16px] md:text-[17px] text-white/80 font-medium max-w-xl leading-relaxed mb-8">
                {slide.desc}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <a href="#services" className="bg-white text-[#0A2E73] px-7 py-3 text-[14px] font-bold rounded-md hover:bg-gray-100 transition-colors shadow-[0_4px_14px_rgba(255,255,255,0.2)]">
                  {slide.btn}
                </a>
                <a href="#contact" className="border border-white/40 text-white px-7 py-3 text-[14px] font-bold rounded-md hover:bg-white/10 transition-colors">
                  {slide.btn2}
                </a>
              </div>

              {slide.paths && (
                <div className="pt-5 border-t border-white/20 w-full">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 block mb-3 uppercase">Quick Access</span>
                  <div className="flex flex-wrap gap-2.5">
                    {slide.paths.map((p, i) => (
                      <button key={i} className="text-[12px] font-bold text-white/90 hover:text-white px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/20 transition-all">
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Card - Square with Curved Corners */}
            <div className="relative w-full max-w-[500px] mx-auto lg:mr-0 lg:ml-auto aspect-square">
              {/* Layered background block */}
              <div className="absolute top-4 -right-4 w-full h-full bg-white/10 border border-white/20 rounded-3xl pointer-events-none"></div>
              
              <div className="relative bg-white/10 backdrop-blur-3xl border border-white/30 rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] w-full h-full flex flex-col">
                {current === 0 ? (
                  <div className="flex flex-col h-full">
                    <div className="mb-4 border border-white/20 rounded-2xl p-4 bg-[#0F172A]/60 shadow-inner">
                      <span className="text-[11px] font-bold tracking-[0.15em] text-[#00B4D8] uppercase block mb-1">Service Portfolio</span>
                      <p className="text-white font-semibold text-[14px]">Integrated BELTRON offerings for digital governance delivery.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                      {[
                        { icon: '☁️', title: 'Cloud Services', bg: 'bg-[#EBF5FF]', color: 'text-[#1E40AF]' },
                        { icon: '💬', title: 'Messaging Services', bg: 'bg-[#E0F2FE]', color: 'text-[#0369A1]' },
                        { icon: '📧', title: 'Email Services', bg: 'bg-[#FFEDD5]', color: 'text-[#9A3412]' },
                        { icon: '👥', title: 'Manpower Services', bg: 'bg-[#F3E8FF]', color: 'text-[#6B21A8]' },
                        { icon: '🗄️', title: 'Data Centre Services', bg: 'bg-[#DCFCE7]', color: 'text-[#166534]' },
                        { icon: '🔒', title: 'Security Audit Services', bg: 'bg-[#FFE4E6]', color: 'text-[#9F1239]' },
                        { icon: '💡', title: 'IT Consultancy Services', bg: 'bg-[#F0F9FF]', color: 'text-[#075985]' },
                        { icon: '🛠️', title: 'Application Development', bg: 'bg-[#E0F2FE]', color: 'text-[#0369A1]' },
                        { icon: '🌐', title: 'Software & Website Dev', bg: 'bg-[#FEF3C7]', color: 'text-[#92400E]' },
                        { icon: '📱', title: 'Mobile App Development', bg: 'bg-[#F5F3FF]', color: 'text-[#5B21B6]' },
                        { icon: '🎥', title: 'VC Services', bg: 'bg-[#ECFDF5]', color: 'text-[#065F46]' },
                        { icon: '📄', title: 'Scanning & Digitization', bg: 'bg-[#FFF1F2]', color: 'text-[#9F1239]' }
                      ].map((srv, i) => (
                        <div key={i} className={`${srv.bg} ${srv.color} p-3 rounded-xl flex flex-col gap-2 hover:brightness-95 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-white/50`}>
                          <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-sm shadow-sm">
                            {srv.icon}
                          </div>
                          <span className="text-[11px] font-extrabold leading-tight mt-auto">{srv.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative flex-1 min-h-0 mb-4 bg-black overflow-hidden rounded-2xl group border border-white/10 shadow-lg">
                      <img src={slide.image} alt={slide.label} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040A1A] via-[#040A1A]/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[10px] font-bold text-[#00B4D8] tracking-[0.2em] uppercase block mb-1 drop-shadow-md">{slide.label} TRACK</span>
                        <p className="text-white font-bold text-[14px] leading-snug line-clamp-3 drop-shadow-md">{slide.desc}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-auto">
                      {slide.tracks && slide.tracks.map((t, i) => (
                        <div key={i} className="bg-[#0F172A]/70 border border-white/10 rounded-xl p-3 hover:bg-[#0F172A] transition-colors flex flex-col justify-center text-center shadow-inner backdrop-blur-md">
                          <span className="block text-[9px] font-bold text-[#00B4D8] tracking-[0.1em] uppercase mb-1">{t.label}</span>
                          <p className="text-[11px] font-bold text-white/90 leading-tight line-clamp-2">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Indicators Bar */}
      <div className="hero-bottom-bar mt-8 relative">
        <div className="max-w-7xl mx-auto w-full flex overflow-x-auto no-scrollbar -mt-[10px] pt-[10px]">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              className={`indicator ${i === current ? 'active' : ''}`}
              onClick={() => {
                setCurrent(i)
                setPaused(true)
              }}
            >
              <span className="indicator-num">0{i + 1}</span>
              <span className="indicator-dot" />
              <span className="indicator-text">{s.label}</span>
            </button>
          ))}
          <div className="controls-wrap">
            <button
              className="pause-btn"
              onClick={() => setPaused(p => !p)}
            >
              <span className="flex items-center gap-1.5">
                <span>{paused ? '▶' : '⏸'}</span>
                <span className="hidden sm:inline">{paused ? 'Resume Auto Slide' : 'Pause Auto Slide'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider