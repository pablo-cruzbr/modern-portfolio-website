import React from 'react'
import Hero from './Hero/Hero'
import Services from './Service/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ClientReview from './ClientRaview/ClientReview'
import Blog from './Blog/Blog'
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <ClientReview/>
      <Blog/>
    </div>
  )
}

export default Home