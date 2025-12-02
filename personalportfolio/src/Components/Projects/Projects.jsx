import './Project.css';

const ProjectDisplay = ()=>{
    return(
        <div>
            <div className="projects">
                <button className="project-tab-button">
                    <img src="/projectTab.svg" alt="Project Tab" />
                </button>
            </div>
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
            <div className ="blog">
                <button className = 'blogs'>
                    <img src="/blognew.svg" alt="Blog" />
                </button>
            </div>
            <div className ="guitar">
                <button className = 'guitar'>
                    <img src="/guitar.svg" alt="Guitar" />
                </button>
            </div>
            <div className ="aboutme">
                <button className = 'about'>
                    <img src="/cafename.svg" alt="About" />
                </button>
            </div>
            <div className="favquote">
                <button className="quote">
                <img src="/coffeetable.svg" alt="About" />
                </button>

            </div>

        </div>
    )
}

export default ProjectDisplay;