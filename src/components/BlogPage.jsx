import React from 'react'
import { blogPosts } from '../blogPosts'
import './BlogPage.css'

const BlogPage = () => {
  return (
    <section className="blog-page section">
      <div className="container">
        <div className="blog-page-header">
          <h2>Blog</h2>
          <a href="#/" className="blog-page-back">Back to Home</a>
        </div>

        <div className="blog-page-grid">
          {blogPosts.map((post) => (
            <a key={post.slug} href={`#/blog/${post.slug}`} className="blog-page-card">
              <h3>{post.title}</h3>
              <p className="blog-page-description">{post.description}</p>
              <div className="blog-page-meta">
                <span className="blog-page-author">{post.author}</span>
                {post.role && <span className="blog-page-role">{post.role}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPage
