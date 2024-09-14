import React from 'react'
import heroImg from '../assets/images/TempHeroImage.jpg'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center"   style={{ backgroundImage: `url(${heroImg})`, padding: '150px 0'}}>
    <div className="absolute inset-10 bg-black bg-opacity-20"></div> 
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-7xl">
            MANN TRANS INC
        </h1>
        <p className="my-4 text-2xl text-white">
            Delivering Excellence, On Time, Every Time.
        </p>
    </div>
</section>

  )
}

export default Hero;
