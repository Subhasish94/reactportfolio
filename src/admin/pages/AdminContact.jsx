import React, { useState } from 'react'

const AdminContact = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Great portfolio!', date: '2024-01-15', status: 'Unread' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Would love to work with you', date: '2024-01-14', status: 'Read' },
  ])

  const [settings, setSettings] = useState({
    email: 'richard@example.com',
    phone: '+1 (213) 352-2795',
    location: 'Sacramento, California, USA'
  })

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Contact Settings</h3>
          <button className="admin-btn-primary">Save Settings</button>
        </div>
        <div className="admin-form">
          <div className="form-group">
            <label>Contact Email</label>
            <input type="email" value={settings.email} onChange={(e) => setSettings({...settings, email: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" value={settings.phone} onChange={(e) => setSettings({...settings, phone: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Location Address</label>
            <input type="text" value={settings.location} onChange={(e) => setSettings({...settings, location: e.target.value})} />
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Contact Messages</h3>
        </div>
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message.substring(0, 40)}...</td>
                  <td>{msg.date}</td>
                  <td>
                    <span className={`admin-badge ${msg.status === 'Unread' ? 'admin-badge-unread' : 'admin-badge-read'}`}>
                      {msg.status}
                    </span>
                  </td>
                  <td>
                    <button className="admin-btn-secondary admin-btn-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminContact