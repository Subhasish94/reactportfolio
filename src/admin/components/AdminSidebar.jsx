import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const AdminSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: 'grid-outline', path: '/admin/dashboard' },
    { id: 'about', name: 'About Section', icon: 'person-outline', path: '/admin/about' },
    { id: 'resume', name: 'Resume Section', icon: 'document-text-outline', path: '/admin/resume' },
    { id: 'portfolio', name: 'Portfolio Section', icon: 'images-outline', path: '/admin/portfolio' },
    { id: 'blog', name: 'Blog Section', icon: 'newspaper-outline', path: '/admin/blog' },
    { id: 'contact', name: 'Contact Section', icon: 'mail-outline', path: '/admin/contact' },
  ]

  const handleNavigation = (path) => {
    navigate(path)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <div className="admin-logo">
          Portfolio Admin
          <span>Content Management</span>
        </div>
      </div>
      <nav className="admin-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`admin-nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => handleNavigation(item.path)}
          >
            <ion-icon name={item.icon}></ion-icon>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default AdminSidebar