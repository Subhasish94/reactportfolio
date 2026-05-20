import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = ({ onLogin }) => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username: credentials.username,
        password: credentials.password
      })

      if (response.data.success) {
        onLogin(true)
        navigate('/admin/dashboard')  // ← '/dashboard' না, '/admin/dashboard'
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password')
    } finally {
      setLoading(false)
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

          <button type="submit" className="admin-btn-primary" style={{ width: '100%' }} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/admin/register')}  // ← ঠিক করা
            style={{ color: '#667eea', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Register here
          </button>
        </p>

        <p style={{ textAlign: 'center', marginTop: '10px', color: '#666', fontSize: '12px' }}>
          Demo: admin / admin123
        </p>
      </div>
    </div>
  )
}

export default AdminLogin 