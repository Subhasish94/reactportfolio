import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Loader from './components/Loader';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import AdminApp from './admin/AdminApp';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* শুধু এখানে পরিবর্তন: /dashboard/* থেকে /admin/* */}
      <Route path="/admin/*" element={<AdminApp />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;