 import React from 'react'
 import { blogPosts } from '../blogPosts'
 import './BlogSection.css'
 
 const BlogSection = () => {
  return (
    <section className="blog-section section" id="blog">
      <div className="container">
        <div className="blog-header">
          <h2>Latest insights and updates</h2>
          <a href="#/blog" className="view-all-link">view all</a>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a key={post.slug} href={`#/blog/${post.slug}`} className="blog-card">
              <h3>{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-author">
                <span className="author-name">{post.author}</span>
                {post.role && <span className="author-role">{post.role}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection


