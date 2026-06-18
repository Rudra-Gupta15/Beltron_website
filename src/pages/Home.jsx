import React from 'react'
import HeroSlider from '../components/HeroSlider'
import NoticeTicker from '../components/NoticeTicker'
import DocumentBoard from '../components/DocumentBoard'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import CentresOfExcellence from '../components/CentresOfExcellence'
import Clients from '../components/Clients'
import GallerySection from '../components/GallerySection'
import Careers from '../components/Careers'
import News from '../components/News'

const Home = () => (
  <>
    <HeroSlider />
    <NoticeTicker />
    <DocumentBoard />
    <About />
    <Projects />
    <Services />
    <CentresOfExcellence />
    <Clients />
    <GallerySection />
    <Careers />
    <News />
  </>
)

export default Home
