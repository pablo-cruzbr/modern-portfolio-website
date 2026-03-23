import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className="bg-[#02050a] pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-300">Blogs</span>
      </h1>

      {/* Grid responsivo: 1 coluna mobile, 2 tablet, 3 desktop */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <BlogCard 
            image="/images/b1.jpg" 
            title="Learn how to build an amazing portfolio website using next js" 
          />
        </div>
        <div>
          <BlogCard 
            image="/images/b2.jpg" 
            title="Learn how to build an amazing Blog website using next js" 
          />
        </div>
        <div>
          <BlogCard 
            image="/images/b3.jpg" 
            title="Learn how to build an amazing Social Media website using next js" 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog