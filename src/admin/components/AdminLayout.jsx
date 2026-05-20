import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import './AdminStyles.css'

const AdminLayout = ({ children }) => {
  const location = useLocation()
  
  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/admin/dashboard') return 'dashboard'
    if (path === '/admin/about') return 'about'
    if (path === '/admin/resume') return 'resume'
    if (path === '/admin/portfolio') return 'portfolio'
    if (path === '/admin/blog') return 'blog'
    if (path === '/admin/contact') return 'contact'
    return 'dashboard'
  }

  console.log('Current path:', location.pathname)

  return (
    <div className="admin-wrapper">
      <AdminSidebar />
      <div className="admin-main">
        <AdminHeader currentPage={getCurrentPage()} />
        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout