import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6x1 mt-6 text-center font-bold tracking-wide">
            Colleborate with brand <br/>
            and agencies to create
            <br/>impactful results
        </h1>
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 x1:grid-cols-4 gap-10 mt-20 items-center">
            <div>
                <ServiceCard/>
            </div>
        </div>
    </div>
  )
}

export default Services