import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { BiCloudDownload } from 'react-icons/bi'
import {FaCode} from "react-icons/fa"

const Nav = () => {
  return (
    <nav className="fixed w-full h-[12vh] z-[100] bg-[#0C0D1F]/50 backdrop-blur-sm transition-all duration-200">
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FaCode className="w-5 h-5 text-black"/>
                </div>
                <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                  Pablo
                </h1>
            </div>

            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => (
                    <Link 
                      key={link.id} 
                      href={link.url} 
                      className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="px-8 py-2.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
                  <BiCloudDownload className="w-5 h-5"/>
                  <span className="font-semibold">Download CV</span>
              </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav