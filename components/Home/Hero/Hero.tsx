"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
        <div className="relative z-10 flex-col items-center"></div>
            <Image
                src= "/img/s1.webp"
                alt='heroimage'
                width={150}
                height={150}
                className='rounded-full border-8 border-[#0c0c48aa]'
            />
              <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6x1 mt-6 text-center font-bold tracking-wide">Creating web products, <br/> brands, <span className="text-cyan-200">an experienciences.</span></h1> 

          <h2 className="mt-5 text-base px-2 text-center sm:text-2xl font-medium flex flex-wrap justify-center items-center">
              Hi, I'm Pablo - A Passionate
              <span className="text-cyan-200 font-bold ml-2"> 
                <Typewriter
                  options={{
                      strings: [
                        "Frontend Developer",
                        "Backend Developer",
                        "Fullstack Developer",
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
    </div>
  )
}

export default Hero