import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import InternalPage from './pages/InternalPage'
import TendersPage from './pages/TendersPage'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Navbar />
    <main className="flex-1 bg-[#F8FAFF]">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tenders" element={<TendersPage />} />
          <Route path="/about" element={<InternalPage title="About Us" />} />
          <Route path="/board-of-directors" element={<InternalPage title="Board of Directors" />} />
          <Route path="/news" element={<InternalPage title="News & Press Releases" />} />
          <Route path="/services" element={<InternalPage title="Services" />} />
          <Route path="/projects" element={<InternalPage title="Projects" />} />
          <Route path="/vacancies" element={<InternalPage title="Current Vacancies" />} />
          <Route path="/resources" element={<InternalPage title="Resources & Media" />} />
          <Route path="/contact" element={<InternalPage title="Contact Us" />} />
          <Route path="*" element={<InternalPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
