import React from 'react'
import { BiEnvelope, BiLocationPlus, BiMap, BiPhone, BiSolidLocationPlus } from 'react-icons/bi'
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="w-[90] md:w-[80%] lg:w-[70%] mx-auto grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Schedule a call with me to see if I can help
            </h1>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              Reach out to me today and let’s discuss how I can help you achieve your goals.
            </p>
            <div className="mt-7">
              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />
                <p className="text-x1 font-bold text-gray-400">
                  Mogi das Cruzes, São Paulo
                </p>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />
                <p className="text-x1 font-bold text-gray-400">
                  +9843582345
                </p>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                <p className="text-x1 font-bold text-gray-400">
                  hello@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8 space-x-3">
              <div className="w-14 h-14 bg-blue-950/60 justify-center rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <FaGithub className="text-white w-6 h-6"/>
              </div>

              <div className="w-14 h-14 bg-blue-950/60 justify-center rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <FaLinkedin className="text-white w-6 h-6"/>
              </div>

              <div className="w-14 h-14 bg-blue-950/60 justify-center rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <FaInstagram className="text-white w-6 h-6"/>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact