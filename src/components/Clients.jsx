import React from 'react'
import { partners } from '../data'

const Clients = () => (
  <section id="vendors" className="py-14 bg-govgray border-y border-gray-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
      <h2 className="section-title">Empanelled Vendors & Partners</h2>
      <p className="section-sub">Government-approved partners powering Bihar's digital ecosystem</p>
    </div>
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-10 items-center">
        {[...partners, ...partners].map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm whitespace-nowrap"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Clients
