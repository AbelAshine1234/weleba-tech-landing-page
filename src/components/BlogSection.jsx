import React from 'react'
import './BlogSection.css'

const BlogSection = () => {
  const posts = [
    {
      title: "How Hotel Booking Software is Transforming Ethiopia's Hospitality Industry",
      description: 'Discover how modern booking platforms are helping Ethiopian hotels increase occupancy rates, streamline operations, and provide better guest experiences in the digital age.',
      author: 'Weleba Tech Team'
    },
    {
      title: 'The Future of Education Management in Ethiopia: Digital Transformation',
      description: 'Learn how education management systems are revolutionizing how schools and universities in Ethiopia handle student data, course management, and administrative tasks.',
      author: 'Weleba Tech',
      role: 'Product Team'
    },
    {
      title: "NFC Technology: The Next Step in Ethiopia's Payment Revolution",
      description: 'Explore how NFC solutions are making payments faster, more secure, and more convenient for businesses and customers across Ethiopia.',
      author: 'Weleba Tech',
      role: 'Technology Team'
    }
  ]

  return (
    <section className="blog-section section">
      <div className="container">
        <div className="blog-header">
          <h2>Latest insights and updates</h2>
          <a href="/blog" className="view-all-link">view all</a>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <a key={index} href="/blog" className="blog-card">
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


