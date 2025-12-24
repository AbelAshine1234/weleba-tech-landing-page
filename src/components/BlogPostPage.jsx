import React from 'react'
import { blogPosts } from '../blogPosts'
import './BlogPostPage.css'

const BlogPostPage = ({ slug }) => {
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="blog-post-page section">
        <div className="container">
          <div className="blog-post-header">
            <h2>Blog</h2>
            <a href="#/blog" className="blog-post-back">Back to Blog</a>
          </div>
          <p>Post not found.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-post-page section">
      <div className="container">
        <div className="blog-post-header">
          <a href="#/blog" className="blog-post-back">Back to Blog</a>
        </div>

        <div className="blog-post-card">
          <h2 className="blog-post-title">{post.title}</h2>
          <div className="blog-post-meta">
            <span className="blog-post-author">{post.author}</span>
            {post.role && <span className="blog-post-role">{post.role}</span>}
          </div>
          <p className="blog-post-content">{post.content}</p>
        </div>
      </div>
    </section>
  )
}

export default BlogPostPage
