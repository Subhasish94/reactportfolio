import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHeader = ({ currentPage }) => {
  const navigate = useNavigate()

  const pageTitles = {
    dashboard: 'Dashboard',
    about: 'About Section Management',
    resume: 'Resume Section Management',
    portfolio: 'Portfolio Section Management',
    blog: 'Blog Section Management',
    contact: 'Contact Section Management'
  }

  const handleLogout = () => {
    window.location.href = '/dashboard'
  }

  return (
    <div className="admin-header">
      <h1>{pageTitles[currentPage] || 'Dashboard'}</h1>
      <div className="admin-user">
        <div className="admin-user-info">
          <div className="admin-user-name">Admin User</div>
          <div className="admin-user-role">Administrator</div>
        </div>
        <div className="admin-avatar" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader