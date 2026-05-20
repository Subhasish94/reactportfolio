import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalBlogPosts: 0,
    totalMessages: 0,
    totalClients: 0,
    totalTodos: 0,
    completedTodos: 0,
    pendingTodos: 0
  })

  const [recentActivities, setRecentActivities] = useState([])
  const [loading, setLoading] = useState(true)

  // ================= Todo State =================
  const initialState = {
    name: "",
    task: "",
    description: "",
    priority: "medium",
    dueDate: ""
  }
  const [formData, setFormData] = useState(initialState)
  const [todos, setTodos] = useState([])
  const [editingTodo, setEditingTodo] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // ডাটা লোড করা
  useEffect(() => {
    fetchDashboardData()
    fetchTodos()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const pagesRes = await axios.get('http://localhost:5000/pages')
      const sectionsRes = await axios.get('http://localhost:5000/sections')
      const todosRes = await axios.get('http://localhost:5000/todos')

      const todosData = todosRes.data.data || []
      const completedCount = todosData.filter(t => t.status === 'completed').length
      const pendingCount = todosData.filter(t => t.status !== 'completed').length

      setStats({
        totalProjects: pagesRes.data.data?.length || 0,
        totalBlogPosts: sectionsRes.data.data?.filter(s => s.name === 'Blog Section').length || 0,
        totalMessages: 24,
        totalClients: sectionsRes.data.data?.filter(s => s.name === 'Testimonial Section').length || 0,
        totalTodos: todosData.length,
        completedTodos: completedCount,
        pendingTodos: pendingCount
      })

      setRecentActivities([
        { action: 'Added new portfolio project', time: '2 hours ago', user: 'Admin' },
        { action: 'Updated about section', time: 'Yesterday', user: 'Admin' },
        { action: 'Published new blog post', time: '2 days ago', user: 'Admin' },
        { action: `Completed ${completedCount} tasks`, time: 'Recently', user: 'Admin' },
      ])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  // ================= Todo API Functions =================
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos')
      setTodos(response.data.data || [])
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const clearForm = () => {
    setFormData(initialState)
    setEditingTodo(null)
    setShowModal(false)
  }

  const openCreateModal = () => {
    setEditingTodo(null)
    setFormData(initialState)
    setShowModal(true)
  }

  const openEditModal = (todo) => {
    setEditingTodo(todo)
    setFormData({
      name: todo.name,
      task: todo.task,
      description: todo.description,
      priority: todo.priority || 'medium',
      dueDate: todo.dueDate || ''
    })
    setShowModal(true)
  }

  const saveTodo = async () => {
    if (!formData.name.trim() || !formData.task.trim() || !formData.description.trim()) {
      alert("Please fill all the fields (Name, Task & Description)")
      return
    }

    try {
      if (editingTodo) {
        // Update todo
        const response = await axios.put(`http://localhost:5000/todos/${editingTodo._id}`, {
          name: formData.name,
          task: formData.task,
          description: formData.description,
          priority: formData.priority,
          dueDate: formData.dueDate
        })
        if (response.data.success) {
          alert("Task updated successfully!")
        }
      } else {
        // Create todo
        const response = await axios.post('http://localhost:5000/todos', {
          name: formData.name,
          task: formData.task,
          description: formData.description,
          priority: formData.priority,
          dueDate: formData.dueDate,
          status: 'pending'
        })
        if (response.data.success) {
          alert("Task created successfully!")
        }
      }
      fetchTodos()
      fetchDashboardData()
      clearForm()
    } catch (error) {
      console.error('Error saving todo:', error)
      alert('Error saving task')
    }
  }

  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        const response = await axios.delete(`http://localhost:5000/todos/${id}`)
        if (response.data.success) {
          alert("Task deleted!")
          fetchTodos()
          fetchDashboardData()
        }
      } catch (error) {
        console.error('Error deleting todo:', error)
        alert('Error deleting task')
      }
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(`http://localhost:5000/todos/${id}/status`, {
        status: newStatus
      })
      if (response.data.success) {
        fetchTodos()
        fetchDashboardData()
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'low': return '#10b981'
      default: return '#6b7280'
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return <span className="badge-success">✅ Completed</span>
      case 'in-progress': return <span className="badge-warning">🔄 In Progress</span>
      default: return <span className="badge-pending">⏳ Pending</span>
    }
  }

  if (loading) return <div className="loading">Loading dashboard...</div>

  return (
    <div>
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><ion-icon name="folder-open-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Total Projects</h3>
            <div className="stat-number">{stats.totalProjects}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ion-icon name="newspaper-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Blog Posts</h3>
            <div className="stat-number">{stats.totalBlogPosts}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ion-icon name="mail-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Messages</h3>
            <div className="stat-number">{stats.totalMessages}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ion-icon name="people-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Clients</h3>
            <div className="stat-number">{stats.totalClients}</div>
          </div>
        </div>
      </div>

      {/* Second Row Stats */}
      <div className="stats-grid" style={{ marginTop: '20px' }}>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#3b82f6' }}><ion-icon name="checkbox-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Total Tasks</h3>
            <div className="stat-number">{stats.totalTodos}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#10b981' }}><ion-icon name="checkmark-circle-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Completed</h3>
            <div className="stat-number">{stats.completedTodos}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#f59e0b' }}><ion-icon name="time-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Pending</h3>
            <div className="stat-number">{stats.pendingTodos}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#8b5cf6' }}><ion-icon name="trending-up-outline"></ion-icon></div>
          <div className="stat-info">
            <h3>Completion Rate</h3>
            <div className="stat-number">
              {stats.totalTodos > 0 ? Math.round((stats.completedTodos / stats.totalTodos) * 100) : 0}%
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Recent Activities</h3>
          <button className="admin-btn-secondary admin-btn-sm">View All</button>
        </div>
        <div className="admin-table">
          <table className="admin-table">
            <thead>
              <tr><th>Action</th><th>Time</th><th>User</th></tr>
            </thead>
            <tbody>
              {recentActivities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.action}</td>
                  <td>{activity.time}</td>
                  <td>{activity.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Quick Actions</h3>
        </div>
        <div className="admin-btn-group">
          <button className="admin-btn-primary" onClick={openCreateModal}>
            <ion-icon name="add-outline"></ion-icon> Add New Task
          </button>
          <button className="admin-btn-primary" onClick={() => alert('Create Blog Post - Coming Soon!')}>
            <ion-icon name="create-outline"></ion-icon> Create Blog Post
          </button>
          <button className="admin-btn-primary" onClick={fetchTodos}>
            <ion-icon name="refresh-outline"></ion-icon> Refresh Data
          </button>
          <button className="admin-btn-primary" onClick={() => alert('Export Data - Coming Soon!')}>
            <ion-icon name="download-outline"></ion-icon> Export Data
          </button>
        </div>
      </div>

      {/* Todo List Section */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Task Management</h3>
          <button className="admin-btn-primary" onClick={openCreateModal}>
            <ion-icon name="add-outline"></ion-icon> New Task
          </button>
        </div>

        <div className="admin-table">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Task</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  <td><strong>{todo.name}</strong></td>
                  <td>{todo.task}</td>
                  <td>{todo.description?.substring(0, 40)}...</td>
                  <td>
                    <span style={{
                      background: getPriorityColor(todo.priority || 'medium'),
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '11px'
                    }}>
                      {todo.priority || 'medium'}
                    </span>
                  </td>
                  <td>
                    <select
                      value={todo.status || 'pending'}
                      onChange={(e) => updateStatus(todo._id, e.target.value)}
                      className="admin-select"
                      style={{ padding: '4px', fontSize: '12px' }}
                    >
                      <option value="pending">⏳ Pending</option>
                      <option value="in-progress">🔄 In Progress</option>
                      <option value="completed">✅ Completed</option>
                    </select>
                  </td>
                  <td>{todo.dueDate || 'No due date'}</td>
                  <td>
                    <button className="admin-btn-secondary admin-btn-sm" onClick={() => openEditModal(todo)} style={{ marginRight: '5px' }}>
                      Edit
                    </button>
                    <button className="admin-btn-danger admin-btn-sm" onClick={() => deleteTodo(todo._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {todos.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center' }}>No tasks yet. Click "New Task" to create your first task!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Create/Edit Task */}
      {showModal && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingTodo ? 'Edit Task' : 'Create New Task'}</h3>
              <span className="admin-modal-close" onClick={clearForm}>&times;</span>
            </div>
            <div className="admin-modal-body">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Task Name *</label>
                <input
                  type="text"
                  name="task"
                  value={formData.task}
                  onChange={handleChange}
                  placeholder="Enter task name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>
                  <select name="priority" value={formData.priority} onChange={handleChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn-secondary" onClick={clearForm}>Cancel</button>
              <button className="admin-btn-primary" onClick={saveTodo}>
                {editingTodo ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard