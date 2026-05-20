import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Design conferences in 2022",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-1.jpg",
      excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      content: `
        <p>Design conferences are a great way to stay updated with the latest trends in the industry. In 2022, we saw a resurgence of in-person events after the pandemic forced many to go virtual.</p>
        <p>The most notable conferences included Adobe MAX, Figma Config, and Awwwards Conference. These events brought together designers from around the world to share insights, network, and learn from industry leaders.</p>
        <h4>Key Takeaways from 2022 Conferences</h4>
        <ul>
          <li>The rise of AI-powered design tools</li>
          <li>Increased focus on accessibility and inclusive design</li>
          <li>Design systems becoming essential for scaling products</li>
          <li>Remote collaboration tools improving dramatically</li>
        </ul>
        <p>Looking ahead to 2023, expect to see even more hybrid events that combine the best of both in-person and virtual experiences.</p>
      `,
      author: "Richard Hanrick",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best fonts every designer",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-2.jpg",
      excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      content: `
        <p>Typography is the cornerstone of great design. Choosing the right font can make or break your project's visual appeal and readability.</p>
        <p>Here are the essential fonts that every designer should have in their toolkit:</p>
        <h4>Serif Fonts</h4>
        <ul>
          <li><strong>Playfair Display</strong> - Perfect for elegant, sophisticated designs</li>
          <li><strong>Merriweather</strong> - Excellent for long-form reading</li>
          <li><strong>Cormorant Garamond</strong> - Classic and timeless</li>
        </ul>
        <h4>Sans-Serif Fonts</h4>
        <ul>
          <li><strong>Inter</strong> - Modern and highly readable</li>
          <li><strong>Montserrat</strong> - Bold and geometric</li>
          <li><strong>Open Sans</strong> - Versatile and clean</li>
        </ul>
        <h4>Display Fonts</h4>
        <ul>
          <li><strong>Poppins</strong> - Popular for headings</li>
          <li><strong>DM Sans</strong> - Low-contrast and friendly</li>
        </ul>
        <p>Remember: Less is often more when it comes to typography. Stick to 2-3 fonts maximum per project for the best results.</p>
      `,
      author: "Richard Hanrick",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Design digest #80",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-3.jpg",
      excerpt: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      content: `
        <p>Welcome to the 80th edition of our Design Digest! This week brings exciting updates from the design world.</p>
        <h4>Tool of the Week: Penpot</h4>
        <p>Penpot continues to gain traction as the leading open-source alternative to Figma. Recent updates include improved prototyping features and better performance.</p>
        <h4>Design System Spotlight</h4>
        <p>Google's Material Design 3 has introduced new theming capabilities that make it easier than ever to create customized, branded experiences while maintaining accessibility standards.</p>
        <h4>Inspiration Corner</h4>
        <p>Check out the newly redesigned website of Awwwards, featuring stunning micro-interactions and smooth animations that set a new standard for portfolio sites.</p>
        <p>That's all for this week. Stay creative!</p>
      `,
      author: "Richard Hanrick",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "UI interactions of the week",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-4.jpg",
      excerpt: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      content: `
        <p>Great UI interactions delight users and make products memorable. Here are the most inspiring interactions we've seen this week.</p>
        <h4>1. Magnetic Buttons</h4>
        <p>Buttons that subtly follow the cursor create a playful, engaging experience. This works especially well for call-to-action buttons on landing pages.</p>
        <h4>2. Morphing Navigation</h4>
        <p>When the menu icon transforms into a close button while simultaneously revealing navigation items, it creates a seamless transition that feels magical.</p>
        <h4>3. Scroll-Triggered Animations</h4>
        <p>Elements that fade, slide, or transform as users scroll keep them engaged and provide visual feedback about their progress through content.</p>
        <h4>4. Hover States with Purpose</h4>
        <p>Beyond simple color changes, consider adding scale transforms, shadow effects, or micro-copy that appears on hover to provide additional context.</p>
        <p>Remember: interactions should enhance usability, not just look pretty. Always test with real users!</p>
      `,
      author: "Richard Hanrick",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The forgotten art of spacing",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-5.jpg",
      excerpt: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content: `
        <p>White space, negative space, breathing room - whatever you call it, spacing is one of the most overlooked yet crucial elements of good design.</p>
        <h4>Why Spacing Matters</h4>
        <p>Proper spacing improves readability, creates visual hierarchy, and guides users through your content naturally. Without it, even the most beautiful design feels cluttered and overwhelming.</p>
        <h4>The 8px Grid System</h4>
        <p>Many designers use an 8px grid system where all spacing is a multiple of 8. This creates consistency and makes responsive design much easier to implement.</p>
        <h4>Common Spacing Mistakes</h4>
        <ul>
          <li>Inconsistent padding between similar elements</li>
          <li>Cramped line height in body text</li>
          <li>Uneven margins around form elements</li>
          <li>Forgetting spacing on mobile views</li>
        </ul>
        <h4>Tools to Help</h4>
        <p>Figma's auto-layout, Tailwind CSS spacing utilities, and CSS Grid can all help maintain consistent spacing across your projects.</p>
        <p>Take time to review your spacing - it's often the difference between amateur and professional design.</p>
      `,
      author: "Richard Hanrick",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Design digest #79",
      category: "Design",
      date: "Feb 23, 2022",
      image: "src/assets/images/blog-6.jpg",
      excerpt: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
      content: `
        <p>Design Digest #79 is here with the latest news, tools, and resources for creative professionals.</p>
        <h4>News: Adobe Acquires Figma?</h4>
        <p>The design world was shocked by Adobe's announced acquisition of Figma. While the deal faces regulatory scrutiny, it has sparked important conversations about competition and innovation in the design tools space.</p>
        <h4>New Resource: Humaaans 2.0</h4>
        <p>Pablo Stanley's popular illustration library has been completely redesigned with new poses, diverse characters, and an improved editing interface.</p>
        <h4>Article Worth Reading</h4>
        <p>"Designing for Trust" by Julie Zhuo explores how small design decisions can build or erode user confidence in your product.</p>
        <h4>Podcast Recommendation</h4>
        <p>Check out "Design Details" episode 400, which features a retrospective on 10 years of design evolution.</p>
        <p>Have a great week, designers!</p>
      `,
      author: "Richard Hanrick",
      readTime: "6 min read"
    }
  ]

  return (
    <article className="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <li className="blog-post-item" key={post.id}>
              <Link to={`/blog/${post.id}`}>
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy"
                       onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250' }} />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{post.date}</time>
                    <span className="dot"></span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Blog