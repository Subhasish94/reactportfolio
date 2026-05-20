import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    pageId: '',
    sectionId: '',
    slug: '',
    category: '',
    featuredImage: '',
    author: 'Admin',
    status: 'draft',
    tags: ''
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [blogsRes, pagesRes, sectionsRes] = await Promise.all([
        axios.get('http://localhost:5000/blogs'),
        axios.get('http://localhost:5000/pages'),
        axios.get('http://localhost:5000/sections')
      ]);
      setBlogs(blogsRes.data.data || []);
      setPages(pagesRes.data.data || []);
      setSections(sectionsRes.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCreateModal = () => {
    setEditingBlog(null);
    setFormData({
      pageId: '',
      sectionId: '',
      slug: '',
      category: '',
      featuredImage: '',
      author: 'Admin',
      status: 'draft',
      tags: ''
    });
    setShowModal(true);
  };

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    setFormData({
      pageId: blog.pageId || '',
      sectionId: blog.sectionId || '',
      slug: blog.slug || '',
      category: blog.category || '',
      featuredImage: blog.featuredImage || '',
      author: blog.author || 'Admin',
      status: blog.status || 'draft',
      tags: blog.tags?.join(', ') || ''
    });
    setShowModal(true);
  };

  const saveBlog = async () => {
    try {
      if (editingBlog) {
        await axios.put(`http://localhost:5000/blogs/${editingBlog._id}`, {
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim())
        });
        alert('Blog updated successfully!');
      } else {
        await axios.post('http://localhost:5000/blogs', {
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim())
        });
        alert('Blog created successfully!');
      }
      setShowModal(false);
      fetchAllData();
    } catch (error) {
      alert('Error: ' + error.response?.data?.message);
    }
  };

  const deleteBlog = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      alert('Blog deleted!');
      fetchAllData();
    }
  };

  const updateStatus = async (id, status) => {
    await axios.patch(`http://localhost:5000/blogs/${id}/status`, { status });
    fetchAllData();
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="admin-card">
        <div className="admin-card-header">
          <h3 className="admin-card-title">Blog Posts</h3>
          <button className="admin-btn-primary" onClick={openCreateModal}>
            <ion-icon name="add-outline"></ion-icon> New Blog Post
          </button>
        </div>

        <div className="admin-table">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog._id}>
                  <td>{blog.title || blog.pageData?.Title}</td>
                  <td>{blog.category || 'Uncategorized'}</td>
                  <td>
                    <select
                      value={blog.status}
                      onChange={(e) => updateStatus(blog._id, e.target.value)}
                      className="admin-select"
                    >
                      <option value="draft">📝 Draft</option>
                      <option value="published">✅ Published</option>
                      <option value="archived">📦 Archived</option>
                    </select>
                  </td>
                  <td>{blog.views || 0}</td>
                  <td>
                    <button className="admin-btn-secondary admin-btn-sm" onClick={() => openEditModal(blog)}>Edit</button>
                    <button className="admin-btn-danger admin-btn-sm" onClick={() => deleteBlog(blog._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr><td colSpan="5" style={{ textAlign: 'center' }}>No blogs yet. Create your first blog!</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h3>
              <span className="admin-modal-close" onClick={() => setShowModal(false)}>&times;</span>
            </div>
            <div className="admin-modal-body">
              <div className="form-group">
                <label>Select Page (for blog content)</label>
                <select name="pageId" value={formData.pageId} onChange={handleChange} required>
                  <option value="">Select a page</option>
                  {pages.map(page => (
                    <option key={page.PageId} value={page.PageId}>{page.PageName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Section (for blog body)</label>
                <select name="sectionId" value={formData.sectionId} onChange={handleChange} required>
                  <option value="">Select a section</option>
                  {sections.map(section => (
                    <option key={section.id} value={section.id}>{section.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Slug (URL)</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="my-blog-post" required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Technology, Design, etc." />
              </div>
              <div className="form-group">
                <label>Featured Image URL</label>
                <input type="text" name="featuredImage" value={formData.featuredImage} onChange={handleChange} placeholder="https://example.com/image.jpg" />
              </div>
              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="react, nodejs, mongodb" />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="admin-btn-primary" onClick={saveBlog}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;