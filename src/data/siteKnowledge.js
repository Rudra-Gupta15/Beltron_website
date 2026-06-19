// ─────────────────────────────────────────────────────────────────────────────
// Site knowledge base for the BELTRON AI assistant.
// Built dynamically from the same data the website renders, so the chatbot's
// answers stay in sync with the actual content. Keep this human-readable — it
// is sent verbatim as grounding context to the Gemini model.
// ─────────────────────────────────────────────────────────────────────────────
import {
  services,
  centres,
  projects,
  tenders,
  vacancies,
  leaders,
} from './index'
import currentTenders from './currentTenders.json'

const list = (arr) => arr.map((x) => `- ${x}`).join('\n')

export const PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About BELTRON', path: '/about' },
  { label: 'Mission & Vision', path: '/mission-vision' },
  { label: 'Board of Directors', path: '/board-of-directors' },
  { label: 'Managing Directors', path: '/managing-directors' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Current Tenders', path: '/tenders/current' },
  { label: 'Archived Tenders', path: '/tenders/archived' },
  { label: 'Procurement / Empanelled Vendors', path: '/procurement' },
  { label: 'News & Events', path: '/news-and-events' },
  { label: 'Letters & Circulars', path: '/letters-and-circulars' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact-us' },
]

export function buildKnowledgeBase() {
  return `
# ABOUT BELTRON
BELTRON (Bihar State Electronics Development Corporation Limited, B.S.E.D.C) is the
nodal IT agency of the Government of Bihar, India. It delivers end-to-end ICT and
e-governance services to state government departments — cloud, application
development, data centres, cyber security, manpower, and procurement support.

# LEADERSHIP
${list(leaders.map((l) => `${l.name} — ${l.role}`))}

# SERVICES OFFERED
${list(services.map((s) => `${s.title}: ${s.desc}`))}

# CENTRES OF EXCELLENCE
${list(centres.map((c) => `${c.title}: ${c.desc}`))}

# KEY PROJECTS
${list(projects.map((p) => `${p.title} (${p.tag}): ${p.desc}`))}

# CURRENT / RECENT TENDERS
${list(
    [...currentTenders, ...tenders]
      .map((t) => t.name || `${t.title} (Ref ${t.ref}, closes ${t.date})`)
      .slice(0, 12)
  )}

# CURRENT VACANCIES
${list(vacancies.map((v) => `${v.title} — ${v.type} (${v.date})`))}

# CONTACT
- Managing Director: mdbeltron@bihar.gov.in
- Manpower Services: beltronmanpower@gmail.com
- ERP Helpdesk: 0612-2281815, +91 9262994967, +91 9262994968
- Full contact details on the Contact Us page (/contact-us)

# WEBSITE PAGES (use these paths when guiding users where to click/navigate)
${list(PAGES.map((p) => `${p.label} → ${p.path}`))}
`.trim()
}
