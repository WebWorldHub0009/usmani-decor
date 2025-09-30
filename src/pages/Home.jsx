import React from 'react'


import WhyChooseUs from '../components/WhyChooseUs'
import ServicesSection from '../components/ServiceSection'
import HowWeWork from '../components/HowItWork'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import OurTeam from '../components/OurTeam'

import Hero from '../components/HeroSection'


const Home = () => {
  return (
   <>
   <Hero/>
   <AboutSection/>
   <WhyChooseUs/>
   <HowWeWork/>
   <ServicesSection/>
   <StatsSection/>
   <OurTeam/>

   </>
  )
}

export default Home