import { useState, useEffect, useRef } from 'react';
import './Layout.css';
import ProjectModal from '../ProjectModal';
import AboutMeModal from '../AboutMeModal';
import ExperienceModal from '../ExperienceModal';
import TechStackModal from '../TechStackModal';
import { useTour } from '@reactour/tour';

const Display = ()=>{
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
    const [isTechStackModalOpen, setIsTechStackModalOpen] = useState(false);
    const { setIsOpen } = useTour();
    const isFirstVisit = useRef(true); // Track if this is the first visit

    // Open AboutMe modal ONLY on first visit (welcome message)
    useEffect(() => {
        if (isFirstVisit.current) {
            setIsAboutMeModalOpen(true);
        }
    }, []);

    // Handle closing the AboutMe modal
    const handleAboutMeClose = () => {
        setIsAboutMeModalOpen(false);
        
        // Start tour ONLY if this was the first visit
        if (isFirstVisit.current) {
            setTimeout(() => {
                setIsOpen(true);
            }, 400); // Adjust to match your modal's close animation duration
            
            // Mark that first visit is complete
            isFirstVisit.current = false;
        }
    };

    return(
        <div>
            <div className="projects">
                <button 
                    className="project-tab-button tour-projects"
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
                <button 
                className = 'experience tour-experience'
                onClick={() => setIsExperienceModalOpen(true)}
                >
                    <img src="/experience.svg" alt="Experience" />
                </button>
            </div>
            <ExperienceModal 
                isOpen={isExperienceModalOpen} 
                onClose={() => setIsExperienceModalOpen(false)} 
            />

            <div className="contact">
                <button 
                    className = 'contact'
                >
                    <img src="/contactme (2).svg" alt="Contact" />
                </button>
            </div>

            <div className="skills">
                <button className = 'skillset tour-skills'
                onClick={() => setIsTechStackModalOpen(true)}>
                    <img src="/skillssachets.svg" alt="Skills" />
                </button>
            </div>
            <TechStackModal 
                isOpen={isTechStackModalOpen} 
                onClose={() => setIsTechStackModalOpen(false)} 
            />
            
            <div className ="guitar">
                <button className = 'guitar'>
                    <img src="/guitar.svg" alt="Guitar" />
                </button>
            </div>
            <div className ="about me">
                <button 
                    className = 'about tour-about'
                    onClick={() => setIsAboutMeModalOpen(true)}
                >
                    <img src="/cafename.svg" alt="About" />
                </button>
            </div>
            <AboutMeModal 
                isOpen={isAboutMeModalOpen} 
                onClose={handleAboutMeClose}
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