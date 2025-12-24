import React, { useEffect, useState } from 'react'
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
import BlogSection from './components/BlogSection'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import SuccessPopup from './components/SuccessPopup'
import AnnouncementBar from './components/AnnouncementBar'
import useStore from './store/useStore'
import './App.css'

function App() {
  const { isDemoModalOpen, isSuccessPopupOpen, setScrollY } = useStore()
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? (window.location.hash || '#/') : '#/'))

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollY])

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isBlogRoute = hash.startsWith('#/blog')
  const isBlogListRoute = hash === '#/blog' || hash === '#/blog/'
  const isBlogPostRoute = hash.startsWith('#/blog/') && hash.length > '#/blog/'.length
  const blogSlug = isBlogPostRoute ? hash.replace('#/blog/', '').split('?')[0].split('#')[0] : null

  useEffect(() => {
    if (isBlogRoute) return
    if (!hash || !hash.startsWith('#') || hash.startsWith('#/')) return

    const id = hash.slice(1)
    if (!id) return

    window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }, [hash, isBlogRoute])

  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      {isBlogListRoute && <BlogPage />}
      {isBlogPostRoute && <BlogPostPage slug={blogSlug} />}
      {!isBlogRoute && (
        <>
          <Hero />
          <WhatIsDeepJudge />
          <CollectiveKnowledge />
          <Services />
          <Products />
          <Company />
          <SearchSection />
          <AIWorkflows />
          <AutomateSection />
          <BlogSection />
          <CTA />
        </>
      )}
      <Footer />
      {isDemoModalOpen && <DemoModal />}
      {isSuccessPopupOpen && <SuccessPopup />}
    </div>
  )
}

export default App


