import { useState, useEffect } from 'react';
import './Layout.css';
import ProjectModal from '../ProjectModal';
import AboutMeModal from '../AboutMeModal';

const Display = ()=>{
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

    // Open AboutMe modal when component mounts (welcome message)
    useEffect(() => {
        setIsAboutMeModalOpen(true);
    }, []);

    return(
        <div>
            <div className="projects">
                <button 
                    className="project-tab-button"
                    onClick={() => setIsProjectModalOpen(true)}
                >
                    <img src="/projectTab.svg" alt="Project Tab" />
                </button>
            </div>
            <ProjectModal 
                isOpen={isProjectModalOpen} 
                onClose={() => setIsProjectModalOpen(false)} 
            />
            
            <div className="readingbooks">
                <button className = 'readingbooks'>
                    <img src="/readingbooks.svg" alt="Reading Book" />
                </button>
            </div>
            <div className="experience">
                <button className = 'experience'>
                    <img src="/experience.svg" alt="Experience" />
                </button>
            </div>
            <div className="contact">
                <button className = 'contact'>
                    <img src="/contactme (2).svg" alt="Contact" />
                </button>
            </div>
            <div className="skills">
                <button className = 'skillset'>
                    <img src="/skillssachets.svg" alt="Skills" />
                </button>
            </div>
            {/* <div className ="blog">
                <button className = 'blogs'>
                    <img src="/blognew.svg" alt="Blog" />
                </button>
            </div> */}
            <div className ="guitar">
                <button className = 'guitar'>
                    <img src="/guitar.svg" alt="Guitar" />
                </button>
            </div>
            <div className ="about me">
                <button 
                    className = 'about'
                    onClick={() => setIsAboutMeModalOpen(true)}
                >
                    <img src="/cafename.svg" alt="About" />
                </button>
            </div>
            <AboutMeModal 
                isOpen={isAboutMeModalOpen} 
                onClose={() => setIsAboutMeModalOpen(false)} 
            />
            <div className="favquote">
                <button className="quote">
                    <img src="/coffeetable.svg" alt="About" />
                </button>

            </div>

        </div>
    )
}

export default Display;