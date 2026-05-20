import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = ({ onLogin }) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin(true)
      navigate('/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Admin Login</h2>
          <p>Enter your credentials to access dashboard</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          {error && <p style={{ color: '#ff4444', marginBottom: '15px' }}>{error}</p>}
          <button type="submit" className="admin-btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '12px' }}>
          Demo credentials: admin / admin123
        </p>
      </div>
    </div>
  )
}

export default AdminLogin