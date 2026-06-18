# BSEDC BELTRON Website 

A comprehensive, pixel-faithful React + Vite + Tailwind CSS clone of the NICSI (nicsi.nic.in) government portal layout, deeply integrated and populated with Bihar State Electronics Development Corporation (BELTRON) content.

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

## 📁 Folder Structure & Architecture

```
beltron-v2/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
├── extract.py                # Python script to extract general live Beltron data
├── extract_tenders.py        # Python script to scrape live Tenders
│
└── src/
    ├── main.jsx              # Entry point (React Router setup)
    ├── App.jsx               # Root Layout: TopBar + Navbar + Routing + Footer
    ├── index.css             # Tailwind + Swiper imports + global animations
    │
    ├── data/
    │   ├── index.js          # Core static data (hero slides, quick links, etc.)
    │   ├── currentTenders.json
    │   ├── archivedTenders.json
    │   ├── projects.json
    │   ├── newsAndEvents.json
    │   └── lettersAndCirculars.json
    │
    ├── pages/                # Individual Route Pages
    │   ├── Home.jsx          # Assembles all homepage components
    │   ├── About.jsx
    │   ├── BoardOfDirectors.jsx
    │   ├── ManagingDirectors.jsx
    │   ├── OurTeam.jsx
    │   ├── MissionVision.jsx
    │   ├── Tenders.jsx       # Tabbed interface for current/archived
    │   ├── Projects.jsx
    │   ├── Services.jsx
    │   ├── Gallery.jsx
    │   ├── Procurement.jsx
    │   ├── NewsAndEvents.jsx
    │   ├── LettersAndCirculars.jsx
    │   └── ContactUs.jsx
    │
    └── components/           # Reusable UI Components
        ├── TopBar.jsx        # Accessibility, language, and font size controls
        ├── Navbar.jsx        # Sticky mega nav with responsive dropdowns
        ├── HeroSlider.jsx    # 70vh auto-sliding hero (Swiper.js)
        ├── NoticeTicker.jsx  # Scrolling marquee notices
        ├── About.jsx         # Homepage About overview
        ├── Projects.jsx      # Homepage Projects
        ├── Services.jsx      # Homepage Services grid
        ├── CentresOfExcellence.jsx 
        ├── Clients.jsx       # Marquee vendor logos
        ├── DocumentBoard.jsx # Tenders / Vacancies board
        ├── News.jsx          # Tabbed media section
        ├── GallerySection.jsx # Homepage dynamic gallery preview
        └── Footer.jsx        # Comprehensive footer
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

The application uses a hybrid approach to content management:
1. **Static Data**: Core homepage elements (hero slider, static links) are managed in `src/data/index.js`.
2. **Dynamic JSON Data**: Large datasets like Tenders, Projects, News, and Letters are stored in `.json` files within `src/data/`.
3. **Data Extraction Scripts**: You can run `python extract.py` or `python extract_tenders.py` to automatically scrape and sync live updates from the official `bsedc.bihar.gov.in` website into the local `.json` stores!

---

## 🔧 Tech Stack

| Library | Purpose |
|---------|---------|
| React 18 | UI framework |
| React Router DOM v6 | Multi-page routing |
| Vite 5 | Build tool (fast HMR) |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Swiper.js 11 | Hero carousel |
| React Icons | Icon library |

---

*Content dynamically synced from bsedc.bihar.gov.in · Layout inspired by robust government portals.*
