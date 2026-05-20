import React, { useState } from 'react'

const AdminPortfolio = () => {
    const [projects, setProjects] = useState([
        { id: 1, title: 'Finance', category: 'Web development', image: '/assets/images/project-1.jpg' },
        { id: 2, title: 'Orizon', category: 'Web development', image: '/assets/images/project-2.png' },
        { id: 3, title: 'Fundo', category: 'Web design', image: '/assets/images/project-3.jpg' },
    ])

    const [showModal, setShowModal] = useState(false)

    const handleSave = () => {
        alert('Portfolio saved! (Demo mode)')
    }

    return (
        <div>
            <div className="admin-card">
                <div className="admin-card-header">
                    <h3 className="admin-card-title">Projects</h3>
                    <button className="admin-btn-primary" onClick={() => setShowModal(true)}>
                        <ion-icon name="add-outline"></ion-icon>
                        Add Project
                    </button>
                </div>
                <div className="admin-table">
                    <table>
                        <thead><tr><th>Image</th><th>Title</th><th>Category</th><th>Actions</th></tr></thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td><img src={project.image} alt={project.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} /></td>
                                    <td>{project.title}</td>
                                    <td>{project.category}</td>
                                    <td>
                                        <div style={{ display: "flex" }}>
                                            <button className="admin-btn-secondary admin-btn-sm">Edit</button>
                                            <button className="admin-btn-danger admin-btn-sm" style={{ marginLeft: '5px' }}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className="admin-modal">
                    <div className="admin-modal-content">
                        <div className="admin-modal-header">
                            <h3>Add New Project</h3>
                            <span className="admin-modal-close" onClick={() => setShowModal(false)}>&times;</span>
                        </div>
                        <div className="admin-modal-body">
                            <div className="form-group">
                                <label>Project Title</label>
                                <input type="text" placeholder="Enter project title" />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select>
                                    <option>Web design</option>
                                    <option>Web development</option>
                                    <option>Applications</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="text" placeholder="Enter image URL" />
                            </div>
                        </div>
                        <div className="admin-modal-footer">
                            <button className="admin-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="admin-btn-primary" onClick={() => { setShowModal(false); alert('Project added (Demo)'); }}>Add Project</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminPortfolio