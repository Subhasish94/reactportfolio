import React, { useState, useEffect } from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false)

  const words = ["Web Designer", "Web Developer", "React Developer"]
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    let speed = isDeleting ? 50 : 200

    if (!isDeleting && text === currentWord) {
      speed = 1000
      setIsDeleting(true)
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      speed = 500
    }

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="src/assets/images/my-avatar.png"
            alt="Richard hanrick"
            width="80"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/80' }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name">Subhasish karmakar</h1>

          {/* ✅ Replace static title with typing */}
          <p className="title typing-text">
            {text}
            <span className="cursor">|</span>
          </p>
        </div>

        <button className="info_more-btn" onClick={() => setIsActive(!isActive)}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      {/* Internal CSS */}
      <style>
        {`

        
        `}
      </style>

      {/* Rest of your code unchanged */}
      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar