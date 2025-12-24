import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsDeepJudge from './components/WhatIsDeepJudge'
import CollectiveKnowledge from './components/CollectiveKnowledge'
import Services from './components/Services'
import Products from './components/Products'
import Company from './components/Company'
import SearchSection from './components/SearchSection'
import AIWorkflows from './components/AIWorkflows'
import AutomateSection from './components/AutomateSection'
import StatsSection from './components/StatsSection'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import SuccessPopup from './components/SuccessPopup'
import AnnouncementBar from './components/AnnouncementBar'
import useStore from './store/useStore'
import './App.css'

function App() {
  const { isDemoModalOpen, isSuccessPopupOpen, setScrollY } = useStore()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollY])

  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <WhatIsDeepJudge />
      <CollectiveKnowledge />
      <Services />
      <Products />
      <Company />
      <SearchSection />
      <AIWorkflows />
      <AutomateSection />
      <StatsSection />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
      {isDemoModalOpen && <DemoModal />}
      {isSuccessPopupOpen && <SuccessPopup />}
    </div>
  )
}

export default App


