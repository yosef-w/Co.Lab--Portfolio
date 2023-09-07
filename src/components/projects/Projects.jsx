import React from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Health and Wellness',
    description: 'Health and Wellness is a system that enables users to investigate symptoms, explore nutritional remedies for their ailments, and locate nearby healthcare providers and specialists.',
    imageUrl: '/assets/healthandwellness.png',
    externalLink: 'https://github.com/yosef-w/Health-and-Wellness',
  },
  {
    id: 2,
    title: 'Weather',
    description: 'Weather is a user-friendly application that provides real-time weather updates for various cities, keeping users informed about current weather conditions effortlessly.',
    imageUrl: '/assets/weather.png',
    externalLink: 'https://github.com/yosef-w/Weather-App',
  },
  {
    id: 3,
    title: 'Star Map',
    description: 'Star Map is an interactive application that enables users to explore and discover various constellations while offering educational insights to deepen their celestial knowledge.',
    imageUrl: '/assets/starmap.png',
    externalLink: 'https://github.com/yosef-w/Star-Map',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.externalLink}
            className="project-card"
            target="_blank" // To open the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
          >
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
