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
    }, 6000)
    return () => clearInterval(timer)
  }, [paused])

  const slide = heroSlides[current]

  return (
    <section id="home" className={`hero relative overflow-hidden ${slide.bg}`}>
      {/* Decorative blurs matching NICSI reference */}
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(110, 220, 255, 0.24)' }}></div>
      <div className="pointer-events-none absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(133, 232, 255, 0.2)' }}></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full z-20" style={{ background: 'linear-gradient(to right, rgba(126,226,255,0.72), rgba(189,243,255,0.7), rgba(126,226,255,0.72))' }}></div>

      <div className="max-w-[90rem] mx-auto px-6 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="hero-inner"
          >
            {/* Left Content */}
            <div className="hero-content">
              <span className="hero-tag">{slide.tag}</span>
              <p className="hero-label">BELTRON Mission Tracks</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>

              <div className="hero-btns">
                <a href="#services" className="btn-white">{slide.btn}</a>
                <a href="#contact" className="btn-ghost">{slide.btn2}</a>
              </div>

              {slide.paths && (
                <div className="hero-paths">
                  <span className="paths-label">QUICK PATHS</span>
                  <div className="paths-list">
                    {slide.paths.map((p, i) => (
                      <button key={i} className="quick-path-btn">{p}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Card */}
            <div className="hero-card-container bg-[#1E3A5F]/40 backdrop-blur-md border-[1.5px] border-[#38BDF8]/30 rounded-[2rem] p-5 shadow-2xl">

              {current === 0 ? (
                <>
                  <div className="hero-card-header mb-4">
                    <span className="hero-card-header-label text-xs font-bold tracking-widest text-white/70 uppercase mb-1 block">SERVICE PORTFOLIO</span>
                    <p className="hero-card-header-desc text-white text-sm">Integrated BELTRON offerings for digital governance delivery.</p>
                  </div>
                  {/* Services Grid for Slide 1 */}
                  <div className="services-grid">
                    <div className="service-mini-card"><span className="service-mini-icon">☁️</span><span className="service-mini-title">Cloud Services</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">💬</span><span className="service-mini-title">Messaging Services</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">📧</span><span className="service-mini-title">Email Services</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">👥</span><span className="service-mini-title">Manpower Services</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">🗄️</span><span className="service-mini-title">Data Centre Services</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">🔒</span><span className="service-mini-title">Security Audit</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">💡</span><span className="service-mini-title">IT Consultancy</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">🛠️</span><span className="service-mini-title">App Development</span></div>
                    <div className="service-mini-card"><span className="service-mini-icon">🌐</span><span className="service-mini-title">Web Development</span></div>
                  </div>
                </>
              ) : (
                <>
                  {/* Map Image for Slides 2,3,4 */}
                  <div className="hero-card-img rounded-md overflow-hidden relative border border-white/10 bg-[#06102B]" style={{ height: '320px' }}>
                    <div className="absolute inset-0 flex items-center justify-center p-0">
                      <img src={slide.image} alt={slide.label} className="w-full h-full object-cover filter invert drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] opacity-90 transition-transform duration-1000 hover:scale-105" />
                    </div>
                    <div className="hero-card-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06102B] via-[#06102B]/80 to-transparent p-6 pt-16 text-left">
                      <span className="track-label block text-[10px] font-bold text-white/80 tracking-[0.15em] mb-2 uppercase">{slide.label} TRACK</span>
                      <p className="text-white text-[15px] font-semibold leading-relaxed max-w-lg">{slide.desc}</p>
                    </div>
                  </div>

                  {/* Tracks row below the image inside the same container */}
                  <div className="hero-tracks mt-4 grid grid-cols-3 gap-3">
                    {slide.tracks && slide.tracks.map((t, i) => (
                      <div key={i} className="track-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition hover:bg-white/10">
                        <span className="track-name block text-[10px] font-bold text-white/60 tracking-wider uppercase mb-2">{t.label}</span>
                        <p className="track-desc text-[13px] font-semibold text-white/95 leading-snug">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Indicators Bar */}
      <div className="hero-bottom-bar mt-8">
        <div className="max-w-7xl mx-auto w-full flex">
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
              {paused ? '▶ Resume Auto Slide' : '⏸ Pause Auto Slide'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider