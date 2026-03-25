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
       <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 items-start">

            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" >
            <ServiceCard 
                icon='/img/s5.webp'
                name='UI and UX'
                description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'
            />
            </div>   


             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" >
            <ServiceCard 
                icon='/img/s2.webp'
                name='Web and Mobile App'
                description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'
            />
            </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" >
            <ServiceCard 
                icon='/img/s3.webp'
                name='Design & Creative'
                description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'
            />
            </div>

            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400" >
            <ServiceCard 
                icon='/img/s4.webp'
                name='Development'
                description='Designing interfaces that are intuitive, efficient, and enjoyable to use.'
            />
            </div>
    </div>
    </div>
  )
}

export default Services