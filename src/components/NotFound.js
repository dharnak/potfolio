import React from 'react';
import '../App.css';

const FreelanceServices = () => {
  const services = [
    {
      id: '01',
      title: 'Web Development',
      description: 'Custom and responsive websites built using modern frameworks like React.js and Next.js.',
      icon: 'fa-laptop-code',
    },
    {
      id: '02',
      title: 'Backend Development',
      description: 'Robust server-side solutions using Node.js, Express.js, and MongoDB for scalable applications.',
      icon: 'fa-server',
    },
    {
      id: '03',
      title: 'E-commerce Development',
      description: 'Complete e-commerce platforms with payment integrations, product management, and more.',
      icon: 'fa-shopping-cart',
    },
    {
      id: '04',
      title: 'Web App Optimization',
      description: 'Improving performance, SEO, and accessibility of existing web applications.',
      icon: 'fa-tools',
    },
    {
      id: '05',
      title: 'Shop Business Solutions',
      description: 'Tailored solutions for shop owners, including inventory management systems and online presence.',
      icon: 'fa-store',
    },
  ];

  return (
    <div className='services-container'>
      <div className='services-header'>
        <h1 className='services-title'>My Quality Services</h1>
        <h5 className='services-subtitle'>
          Transforming your ideas into unique web projects that inspire both you and your customers.
        </h5>
      </div>
      <div className='services-list'>
        {services.map((service) => (
          <div className='service-box' key={service.id}>
            <div className='service-icon'>
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h1 className='service-id'>{service.id}</h1>
            <h2 className='service-title'>{service.title}</h2>
            <p className='service-description'>{service.description}</p>
            <div className='service-link'>
              <i className='fa-solid fa-arrow-right'></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelanceServices;
