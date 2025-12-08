import "./ProjectModal.css"
import { useTour } from '@reactour/tour';

const Navbar = () => {
    const { setIsOpen } = useTour();

    const handleTourClick = () => {
        setIsOpen(true);
    };

    return (
        <div className="project-links" style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            padding: '20px 24px', 
            marginLeft: '30px',
            gap: '16px'
            }}>
            <button 
                className='project-link live-link'
                onClick={handleTourClick}
                
            >
                🗺️ GET GUIDED TOUR
            </button>
            
            <a className='project-link live-link' 
                href='https://drive.google.com/file/d/16-ZxrKPTfsIaH-CbkxRrSVe3V6JMLGMn/view?usp=sharing'
                target="_blank" 
                rel="noopener noreferrer"
            > 
                ☕︎ FOR THE RECRUITER
            </a>
        </div>
    );
};

export default Navbar;