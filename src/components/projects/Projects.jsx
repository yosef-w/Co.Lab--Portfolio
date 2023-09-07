import React from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: '/assets/healthandwellness.png',
    externalLink: 'https://github.com/yosef-w/Health-and-Wellness',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: '/assets/weather.png',
    externalLink: 'https://github.com/yosef-w/Weather-App',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
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
