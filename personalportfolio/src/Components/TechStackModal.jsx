import { useState, useEffect } from 'react';
import './TechStackModal.css';

const TechStackModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className.includes('tech-modal-backdrop')) {
      onClose();
    }
  };

  const techStack = {
    languages: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    devTools: [
      { name: 'AWS S3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'API Integration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    frameworks: [
      { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'ThreeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
      { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
      { name: 'OpenGL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
      { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'ExpressJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
    aiTools: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    ],
  };

  return (
    <div 
      className={`tech-modal-backdrop ${isVisible ? 'visible' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`tech-modal-container ${isVisible ? 'visible' : ''}`}>
        <button className="tech-close-button" onClick={onClose} aria-label="Close modal" />
        
        <h1 className="tech-modal-title">My Tech Flavours</h1>
        
        <div className="shelves-grid">
          {/* Languages Shelf - Top Left */}
          <div className="shelf-container languages">
            <div className="shelf-label">Languages</div>
            <div className="shelf-board">
              <div className="jar-row">
                {techStack.languages.map((tech, index) => (
                  <div key={index} className="coffee-jar">
                    <div className="jar-container">
                      <img src={tech.icon} alt={tech.name} className="jar-icon" />
                    </div>
                    <div className="jar-label">{tech.name}</div>
                    <div className="jar-shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Developer Tools Shelf - Top Right */}
          <div className="shelf-container devtools">
            <div className="shelf-label">Developer Tools</div>
            <div className="shelf-board">
              <div className="jar-row">
                {techStack.devTools.map((tech, index) => (
                  <div key={index} className="coffee-jar">
                    <div className="jar-container">
                      <img src={tech.icon} alt={tech.name} className="jar-icon" />
                    </div>
                    <div className="jar-label">{tech.name}</div>
                    <div className="jar-shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Libraries & Frameworks Shelf - Bottom Left */}
          <div className="shelf-container frameworks">
            <div className="shelf-label">Libraries & Frameworks</div>
            <div className="shelf-board">
              <div className="jar-row">
                {techStack.frameworks.map((tech, index) => (
                  <div key={index} className="coffee-jar">
                    <div className="jar-container">
                      <img src={tech.icon} alt={tech.name} className="jar-icon" />
                    </div>
                    <div className="jar-label">{tech.name}</div>
                    <div className="jar-shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI/ML Tools Shelf - Bottom Right */}
          <div className="shelf-container aitools">
            <div className="shelf-label">AI / ML Tools</div>
            <div className="shelf-board">
              <div className="jar-row">
                {techStack.aiTools.map((tech, index) => (
                  <div key={index} className="coffee-jar">
                    <div className="jar-container">
                      <img src={tech.icon} alt={tech.name} className="jar-icon" />
                    </div>
                    <div className="jar-label">{tech.name}</div>
                    <div className="jar-shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TechStackModal;