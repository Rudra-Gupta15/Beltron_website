import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import InternalPage from './pages/InternalPage'
import TendersPage from './pages/TendersPage'
import BoardOfDirectors from './pages/BoardOfDirectors'
import ManagingDirectors from './pages/ManagingDirectors'
import OurTeam from './pages/OurTeam'
import MissionVision from './pages/MissionVision'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Tenders from './pages/Tenders'
import About from './pages/About'
import Procurement from './pages/Procurement'
import NewsAndEvents from './pages/NewsAndEvents'
import LettersAndCirculars from './pages/LettersAndCirculars'
import ChatBot from './components/ChatBot'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 bg-[#F8FAFF]">
      <Outlet />
    </main>
    <Footer />
    <ChatBot />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/managing-directors" element={<ManagingDirectors />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<InternalPage title="News & Press Releases" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/vacancies" element={<InternalPage title="Current Vacancies" />} />
          <Route path="/procurement" element={<InternalPage title="Procurement" />} />
          <Route path="/tenders" element={<Navigate to="/tenders/current" replace />} />
          <Route path="/tenders/:type" element={<Tenders />} />
          <Route path="/procurement/:type" element={<Procurement />} />
          <Route path="/news-and-events" element={<NewsAndEvents />} />
          <Route path="/letters-and-circulars" element={<LettersAndCirculars />} />
          <Route path="/resources" element={<InternalPage title="Resources & Media" />} />
          <Route path="/contact" element={<InternalPage title="Contact Us" />} />
          <Route path="*" element={<InternalPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
