import React from 'react'
import HeroSection from '../COMPONENTS/HeroSection'
import MenuSection from '../COMPONENTS/MenuSection'
import About from '../COMPONENTS/about'
import Famous from '../COMPONENTS/Famous'
import FreeDeliverySection from '../COMPONENTS/FreeDeliverySection'

function Home() {
  return (
    <div className='font-roboto bg-pink-100 pt-10'>
    <HeroSection />
    <Famous />
    <About />
    <MenuSection />
    <FreeDeliverySection />
    </div>
  )
}

export default Home
