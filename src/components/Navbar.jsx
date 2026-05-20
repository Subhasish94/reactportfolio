import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navItems = [
    { path: '/', name: 'About' },
    { path: '/resume', name: 'Resume' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar