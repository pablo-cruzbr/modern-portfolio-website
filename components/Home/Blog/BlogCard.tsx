import React from 'react'
import Blog from './Blog';

interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="bg-[#02050a] pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-300">Blogs</span>
      </h1>

      
    </div>
  )
}

export default BlogCard