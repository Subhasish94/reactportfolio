import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminRegister = ({ onLogin }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }

        try {
            const response = await axios.post('http://localhost:5000/auth/register', {
                username: formData.username,
                password: formData.password,
                name: formData.name
            })

            if (response.data.success) {
                onLogin(true)
                navigate('/admin/dashboard')  // ← '/dashboard' না, '/admin/dashboard'
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Admin Registration</h2>
                    <p>Create a new admin account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p style={{ color: '#ff4444', marginBottom: '15px' }}>{error}</p>}

                    <button type="submit" className="admin-btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    Already have an account?{' '}
                    <button
                        onClick={() => navigate('/admin/login')}  // ← ঠিক করা
                        style={{ color: '#667eea', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Login here
                    </button>
                </p>
            </div>
        </div>
    )
}

export default AdminRegister 