import './AboutMeModal.css';

const AboutMeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const description1 = `
Hey there, welcome to my digital café! I'm thrilled to have you here. A bit about me: I'm a tech enthusiast with a passion for exploring new areas of technology, and a lover of coffee who enjoys trying its many delightful variants. I blend creativity with technical expertise to create digital experiences that can make an impact. 
`
  const description2 = `When I'm not coding, you'll often find me reading a good book, learning a new song on guitar, or savoring a cup of coffee while brainstorming the next big idea. I hope your experience here feels as cozy and inspiring as a visit to your favorite café. As you navigate this café and get to know a bit about me, I hope you settle in with your favorite coffee and feel energized—you’ve got this, and we’re in it together`

 const description3 = `If you have read this far, thank you so much again! And finally, here are a couple of little nuggets of wisdom before you sip your coffee. First, if you ever find yourself overthinking, remember what Paulo Coelho said: "Turtles all the way down." And second, if a problem ever feels overwhelming, you can remember this little insight from me:
 `;

  const quote = "When life gives you lemons🍋, set that aside and make some coffee☕";

  return (
    <div className="about-me-modal-overlay" onClick={onClose}>
      <div className="about-me-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="about-me-modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="about-me-modal-header">
          <h2 className="about-me-modal-title">A Bit About Me</h2>
        </div>

        <div className="about-me-modal-body">
          <div className="about-me-content-wrapper">
            <div className="about-me-description">
              <p className="about-me-text">{description1}</p><br/>
              <p className="about-me-text">{description2}</p><br/>
              <p className="about-me-text">{description3}</p>
            </div>
            
            <div className="about-me-image-container">
              <img 
                src="/Mypic.jpg" 
                alt="Profile"
                className="about-me-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                }}
              />
            </div>
          </div>

          <div className="about-me-quote-section">
            <p className="about-me-quote">"{quote}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;

