import React from 'react'
import heroImg from '../assets/images/TempHeroImage.jpg'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-20 mb-4"   style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional overlay for better text contrast */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            MANN TRANS INC
        </h1>
        <p className="my-4 text-2xl text-white">
            Delivering Excellence, On Time, Every Time.
        </p>
    </div>
</section>

  )
}

export default Hero
