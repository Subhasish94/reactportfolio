import React, { useState } from 'react'

const AdminAbout = () => {
  const [aboutData, setAboutData] = useState({
    name: 'Richard Hanrick',
    title: 'Web developer',
    bio1: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    bio2: "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.",
    email: 'richard@example.com',
    phone: '+1 (213) 352-2795',
    birthday: 'June 23, 1982',
    location: 'Sacramento, California, USA'
  })

  const [services, setServices] = useState([
    { id: 1, title: 'Web design', text: 'The most modern and high-quality design made at a professional level.', icon: 'icon-design.svg' },
    { id: 2, title: 'Web development', text: 'High-quality development of sites at the professional level.', icon: 'icon-dev.svg' },
    { id: 3, title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.', icon: 'icon-app.svg' },
    { id: 4, title: 'Photography', text: 'I make high-quality photos of any category at a professional level.', icon: 'icon-photo.svg' }
  ])

  const handleSave = () => {
    alert('About section data saved successfully!')
    console.log('Saved Data:', aboutData)
  }

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Personal Information</h3>
          <button className="admin-btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
        <div className="admin-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={aboutData.name}
              onChange={(e) => setAboutData({...aboutData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              value={aboutData.title}
              onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Bio Paragraph 1</label>
            <textarea 
              rows="3"
              value={aboutData.bio1}
              onChange={(e) => setAboutData({...aboutData, bio1: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Bio Paragraph 2</label>
            <textarea 
              rows="5"
              value={aboutData.bio2}
              onChange={(e) => setAboutData({...aboutData, bio2: e.target.value})}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={aboutData.email}
                onChange={(e) => setAboutData({...aboutData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="text" 
                value={aboutData.phone}
                onChange={(e) => setAboutData({...aboutData, phone: e.target.value})}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Birthday</label>
              <input 
                type="text" 
                value={aboutData.birthday}
                onChange={(e) => setAboutData({...aboutData, birthday: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                value={aboutData.location}
                onChange={(e) => setAboutData({...aboutData, location: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Services</h3>
          <button className="admin-btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
        <div className="admin-table">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Icon</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.title}</td>
                  <td>{service.text.substring(0, 60)}...</td>
                  <td>{service.icon}</td>
                  <td>
                    <button className="admin-btn-secondary admin-btn-sm">Edit</button>
                    <button className="admin-btn-danger admin-btn-sm" style={{marginLeft: '8px'}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{padding: '16px'}}>
          <button className="admin-btn-success">Add New Service</button>
        </div>
      </div>
    </div>
  )
}

export default AdminAbout