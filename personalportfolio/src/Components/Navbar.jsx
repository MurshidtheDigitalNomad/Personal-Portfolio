import "./ProjectModal.css"

const Navbar = () => {
    return (
        <div className="project-links" style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            padding: '20px 24px', 
            marginLeft: '30px' 
            }}>
            <a className='project-link live-link' 
            href='https://drive.google.com/file/d/16-ZxrKPTfsIaH-CbkxRrSVe3V6JMLGMn/view?usp=sharing'
            target="_blank" 
            rel="noopener noreferrer"> 
            ☕︎ FOR THE RECRUITER
            </a>
            
        </div>
    );
};

export default Navbar;