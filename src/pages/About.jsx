import React from 'react'
import AboutHero from '../components/AboutHero'
import Testimonials from "../components/Testimonials"
import FAQ from '../components/Faq'
import VisionMissionGoal from '../components/VisionMissionGoal'
import OurStory from '../components/OurStory'
import OurTeam from '../components/OurTeam'

const About = () => {
  return (
 <>
 <AboutHero/>
 <OurStory/>
 <VisionMissionGoal/>
 <Testimonials/>
 <FAQ/>
 <OurTeam/>
 </>
  )
}

export default About