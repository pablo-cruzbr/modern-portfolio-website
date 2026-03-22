import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-white">
            A small selection of recent <span className="text-cyan-200"> projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div>
                <Image
                    src="/img/p1.webp"
                    alt='img'
                    width={800}
                    height={650}
                    className="rounded-lg"
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Modern Finance Dashboard</h1>
                <h1 className="pt-2 font-medium text-white">Apps, UI/UX</h1>
            </div>

            <div>
                <Image
                    src="/img/p2.webp"
                    alt='img'
                    width={800}
                    height={650}
                    className="rounded-lg"
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">MPortfolio Website for Creatives</h1>
                <h1 className="pt-2 font-medium text-white">Bradning , Motion</h1>
            </div>

            <div>
                <Image
                    src="/img/p3.webp"
                    alt='img'
                    width={800}
                    height={650}
                    className="rounded-lg"
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Brand Identity for Startups</h1>
                <h1 className="pt-2 font-medium text-white">Branding , UI/UX</h1>
            </div>

            <div>
                <Image
                    src="/img/p4.webp"
                    alt='img'
                    width={800}
                    height={650}
                    className="rounded-lg"
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    SaaS Dashboard Development
                </h1>
                <h1 className="pt-2 font-medium text-white">Apps ,UI/UX</h1>
            </div>
        </div>

        
    </div>
  )
}

export default Projects