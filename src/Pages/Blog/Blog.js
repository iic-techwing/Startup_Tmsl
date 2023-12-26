import React from 'react'
import Blog_Card from './Blog_Components/blog_card'
import './Blog.css'
const Blog = () => {
  return (
    <>
      <div>
        <h1 className='heading'>Blog</h1>
        <div className='cards'>
          <Blog_Card></Blog_Card>
          <Blog_Card></Blog_Card>
          <Blog_Card></Blog_Card>
        </div>
      </div>
    </>

  )
}

export default Blog