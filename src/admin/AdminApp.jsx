import React, { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import AdminAbout from './pages/AdminAbout'
import AdminResume from './pages/AdminResume'
import AdminPortfolio from './pages/AdminPortfolio'
import AdminBlog from './pages/AdminBlog'
import AdminContact from './pages/AdminContact'
import AdminLogin from './pages/AdminLogin'

const AdminApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // টেস্টের জন্য true
  const location = useLocation()

  console.log('AdminApp - Current path:', location.pathname)

  if (!isLoggedIn) {
    return <AdminLogin onLogin={setIsLoggedIn} />
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AdminAbout />} />
        <Route path="resume" element={<AdminResume />} />
        <Route path="portfolio" element={<AdminPortfolio />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="contact" element={<AdminContact />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminApp