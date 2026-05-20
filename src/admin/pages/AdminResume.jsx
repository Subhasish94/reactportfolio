import React, { useState } from 'react'

const AdminResume = () => {
  const [education, setEducation] = useState([
    { id: 1, title: 'University school of the arts', period: '2007 — 2008', text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti.' },
    { id: 2, title: 'New york academy of art', period: '2006 — 2007', text: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus.' }
  ])

  const [experience, setExperience] = useState([
    { id: 1, title: 'Creative director', period: '2015 — Present', text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti.' },
    { id: 2, title: 'Art director', period: '2013 — 2015', text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti.' }
  ])

  const [skills, setSkills] = useState([
    { id: 1, name: 'Web design', value: 80 },
    { id: 2, name: 'Graphic design', value: 70 },
    { id: 3, name: 'Branding', value: 90 },
    { id: 4, name: 'WordPress', value: 50 }
  ])

  const handleSave = () => {
    alert('Resume section saved! (Demo mode)')
  }

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Education</h3>
          <button className="admin-btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
        <div className="admin-table">
          <table>
            <thead><tr><th>Title</th><th>Period</th><th>Description</th><th>Actions</th></tr></thead>
            <tbody>
              {education.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.period}</td>
                  <td>{item.text.substring(0, 50)}...</td>
                  <td><button className="admin-btn-secondary admin-btn-sm">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Experience</h3>
          <button className="admin-btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
        <div className="admin-table">
          <table>
            <thead><tr><th>Title</th><th>Period</th><th>Description</th><th>Actions</th></tr></thead>
            <tbody>
              {experience.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.period}</td>
                  <td>{item.text.substring(0, 50)}...</td>
                  <td><button className="admin-btn-secondary admin-btn-sm">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Skills</h3>
          <button className="admin-btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
        <div className="admin-table">
          <table>
            <thead><tr><th>Skill Name</th><th>Percentage</th><th>Actions</th></tr></thead>
            <tbody>
              {skills.map(skill => (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{skill.value}%</td>
                  <td><button className="admin-btn-secondary admin-btn-sm">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminResume