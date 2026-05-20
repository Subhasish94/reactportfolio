import React, { useState } from 'react'
import './Pages.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectOpen, setSelectOpen] = useState(false)

  const filters = ['All', 'Web design', 'Applications', 'Web development']

  const projects = [
    { id: 1, title: "Finance", category: "Web development", image: "src/assets/images/project-1.jpg" },
    { id: 2, title: "Orizon", category: "Web development", image: "src/assets/images/project-2.png" },
    { id: 3, title: "Fundo", category: "Web design", image: "src/assets/images/project-3.jpg" },
    { id: 4, title: "Brawlhalla", category: "Applications", image: "src/assets/images/project-4.png" },
    { id: 5, title: "DSM.", category: "Web design", image: "src/assets/images/project-5.png" },
    { id: 6, title: "MetaSpark", category: "Web design", image: "src/assets/images/project-6.png" },
    { id: 7, title: "Summary", category: "Web development", image: "src/assets/images/project-7.png" },
    { id: 8, title: "Task Manager", category: "Applications", image: "src/assets/images/project-8.jpg" },
    { id: 9, title: "Arrival", category: "Web development", image: "src/assets/images/project-9.png" }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase())

  const handleFilter = (filter) => {
    setActiveFilter(filter.toLowerCase())
    setSelectOpen(false)
  }

  const getSelectValue = () => {
    if (activeFilter === 'all') return 'Select category'
    return activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)
  }

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop filter buttons */}
        <ul className="filter-list">
          {filters.map((filter) => (
            <li className="filter-item" key={filter}>
              <button
                className={activeFilter === filter.toLowerCase() ? 'active' : ''}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile filter select */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">{getSelectValue()}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          {selectOpen && (
            <ul className="select-list">
              {filters.map((filter) => (
                <li className="select-item" key={filter}>
                  <button onClick={() => handleFilter(filter)}>{filter}</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li className="project-item active" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300' }} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio