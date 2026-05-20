import React, { useState, useEffect } from 'react'
import './Pages.css'

const About = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Daniel lewis",
      avatar: "src/assets/images/avatar-1.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      id: 2,
      name: "Jessica miller",
      avatar: "src/assets/images/avatar-2.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      id: 3,
      name: "Emily evans",
      avatar: "src/assets/images/avatar-3.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      id: 4,
      name: "Henry william",
      avatar: "src/assets/images/avatar-4.png",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    }
  ]

  const services = [
    { icon: "src/assets/images/icon-design.svg", title: "Web design", text: "The most modern and high-quality design made at a professional level." },
    { icon: "src/assets/images/icon-dev.svg", title: "Web development", text: "High-quality development of sites at the professional level." },
    { icon: "src/assets/images/icon-app.svg", title: "Mobile apps", text: "Professional development of applications for iOS and Android." },
    { icon: "src/assets/images/icon-photo.svg", title: "Photography", text: "I make high-quality photos of any category at a professional level." }
  ]

  const clients = [1, 2, 3, 4, 5, 6]

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTestimonial(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/40' }} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li className="testimonials-item" key={testimonial.id}>
              <div className="content-card" onClick={() => openModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/60' }} />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text.substring(0, 150)}...</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {modalOpen && selectedTestimonial && (
        <div className="modal-container active">
          <div className="overlay active" onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} width="80" />
              </figure>
              <img src="src/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
              <div>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client) => (
            <li className="clients-item" key={client}>
              <a href="#">
                <img src={`src/assets/images/logo-${client}-color.png`} alt="client logo"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/100x50' }} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About