"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
        <div className="relative z-10 flex-col items-center"></div>
            <Image
                src= "/img/s1.webp"
                alt='heroimage'
                width={200}
                height={200}
                className='rounded-full border-8 border-[#0c0c48aa]'
                data-aos="fade-up"
            />
              <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-2xl md:text-5xl lg:text-6x1 mt-6 text-center font-bold tracking-wide">Creating web products, <br/> brands, <span className="text-cyan-200">an experienciences.</span></h1> 

          <h2  data-aos="fade-up" data-aos-delay="400" className="mt-5 text-base px-2 text-center sm:text-2xl font-medium flex flex-wrap justify-center items-center">
              Hi, I'm Pablo - A Passionate
              <span className="text-cyan-200 font-bold ml-2"> 
                <Typewriter
                  options={{
                      strings: [
                        "Fullstack Developer",
                        "Frontend Developer",
                        "Backend Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                      wrapperClassName: "pl-1" 
                  }}
                />
              </span>
            </h2>
          
          <button  data-aos="fade-up" data-aos-delay="600" className="mt-6 px-4 py-2 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
            <span>See my work</span>
            <BsArrowRight className="w-5 h-5 inline-block ml-2" /> 
          </button>
    </div>
  )
}

export default Hero