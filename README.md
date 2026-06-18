# BSEDC BELTRON Website — v2

A pixel-faithful React + Vite + Tailwind CSS clone of the NICSI (nicsi.nic.in) government portal layout, populated with Bihar State Electronics Development Corporation (BELTRON) content.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Folder Structure

```
beltron-v2/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root: TopBar + Navbar + Home + Footer
    ├── index.css             # Tailwind + Swiper imports + global animations
    │
    ├── data/
    │   └── index.js          # ✅ All site content (slides, notices, services, etc.)
    │
    ├── pages/
    │   └── Home.jsx          # Assembles all sections in order
    │
    └── components/
        ├── TopBar.jsx        # Very top gov bar (accessibility, logos, font size)
        ├── Navbar.jsx        # Sticky mega nav with dropdowns (Framer Motion)
        ├── HeroSlider.jsx    # 70vh auto-sliding hero (Swiper.js)
        ├── NoticeTicker.jsx  # Scrolling tender/result notices
        ├── About.jsx         # Profile + Stats + Leadership + MD Message
        ├── Projects.jsx      # Dark bg project cards (6 cards)
        ├── Services.jsx      # 4-col service grid (hover: blue)
        ├── CentresOfExcellence.jsx  # 5 horizontal CoE cards
        ├── Clients.jsx       # Auto-scroll marquee vendor logos
        ├── Careers.jsx       # Tenders (left) + Vacancies (right)
        ├── News.jsx          # Tabbed media section
        └── Footer.jsx        # 4-col dark footer + policy + meta bar
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#0a4f9e` |
| Dark Blue | `#003366` |
| Light Blue | `#1d75d8` |
| Gov Gray | `#f5f5f5` |
| Text | `#333333` |
| Font | Inter + Poppins |

---

## ✏️ Updating Content

All text content lives in **`src/data/index.js`**. To update:
- Hero slides → `heroSlides[]`
- Notices ticker → `notices[]`
- Leadership → `leaders[]`
- Services → `services[]`
- Projects → `projects[]`
- Tenders → `tenders[]`
- Vacancies → `vacancies[]`

---

## 🔧 Tech Stack

| Library | Purpose |
|---------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool (fast HMR) |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Swiper.js 11 | Hero carousel |
| React Icons | Icon library |

---

*Content based on bsedc.bihar.gov.in · Layout inspired by nicsi.nic.in*
