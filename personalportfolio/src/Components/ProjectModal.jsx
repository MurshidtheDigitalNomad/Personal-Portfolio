import { useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projects = [
    {
      id: 1,
      title: "ShebaDao",
      description: "ShebaDao features a resume-driven AI skill evaluation engine that increased job–candidate fit accuracy by 65% in pilot tests. It uses a scoring model analyzing logical reasoning, English communication, and technical depth across 15+ metrics to generate detailed reports. A recommendation engine then maps these scores to relevant jobs and personalized courses for instant upskilling pathways.",
      techStack: ["Tensorflow", "AWS S3", "React", "Express", "Supabase"],
      image: "/ShebaDaoCover.png", // Image from public folder
      githubLink: "https://github.com/MurshidtheDigitalNomad/ShebaDao",
      liveLink: "https://sheba-dao-dw8e.vercel.app/"
    },
    {
      id: 2,
      title: "SkillPlanner",
      description: "SkillPlanner is an intelligent skill-planning platform that generates personalized roadmaps and improves learning consistency through structured task and milestone tracking with rich visualizations. It includes a social community module with posts, likes, and comments to boost peer engagement, and a Resource Hub organizing 50+ user and platform resources across 5 roadmaps and 15+ milestone goals for improved discoverability.",
      techStack: ["React", "Framer Motion", "Express", "PostgreSQL"],
      image: "/SkillplannerCover.png", // Image from public folder - note the correct filename
      githubLink: "https://github.com/MurshidtheDigitalNomad/SkillPlanner",
      liveLink: "https://github.com/MurshidtheDigitalNomad/SkillPlanner"
    },
    {
      id: 3,
      title: "BRACU Extracurricular Activity Management System(BEMS)",
      description: "BEMS is a full-stack platform built to manage operations for 20+ BRACU clubs, streamlining workflows through efficient membership approvals, event scheduling, and role-based access. It automates club and event creation pipelines, faculty approval flows, and member management. The platform boosts engagement by enabling 150+ users to browse events, explore clubs, and RSVP seamlessly, including guest access for greater transparency.",
      techStack: ["React", "Express", "PostgreSQL"],
      image: "/BEMSCover.png", // You can add more project images to public folder
      githubLink: "https://github.com/MurshidtheDigitalNomad/bracu-eca-management-system",
      liveLink: "https://project3-demo.com"
    }
  ];

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="project-modal-header">
          <h2 className="project-modal-title">MY PROJECTS</h2>
          <p className="project-modal-subtitle">Brewed with passion, served with excellence</p>
        </div>

        <div className="project-modal-body">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  <span className="tech-stack-label">Tech Stack:</span>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    GitHub
                  </a>
                  <span className="project-link-separator">|</span>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

