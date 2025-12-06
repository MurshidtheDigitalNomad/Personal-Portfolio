import React, { useState, useEffect, useRef } from 'react';
import './ExperienceModal.css';


const ExperienceModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollQuotes, setScrollQuotes] = useState([]);
  const modalContainerRef = useRef(null);

  // Define scroll-triggered quotes with their positions
  const quotePositions = [
    { top: 200, text: "Starting the journey..." },
    { top: 500, text: "Learning & Growing" },
    { top: 900, text: "Trying new things..." },
    { top: 1100, text: "Brewing ideas..." },
    { top: 1200, text: "Mastering the craft.." },
    { top: 2200, text: "Evolving continuously!" }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!modalContainerRef.current) return;

      const scrollTop = modalContainerRef.current.scrollTop;
      const scrollHeight = modalContainerRef.current.scrollHeight;
      const clientHeight = modalContainerRef.current.clientHeight;

      // Calculate which quotes should be visible based on scroll position
      const visibleQuotes = quotePositions.map((quote, index) => {
        const quotePosition = quote.top;
        const windowTop = scrollTop;
        const windowBottom = scrollTop + clientHeight;
        
        // Show quote when it's in the middle third of the viewport
        const middleThirdStart = windowTop + clientHeight * 0.3;
        const middleThirdEnd = windowTop + clientHeight * 0.7;
        
        const isVisible = quotePosition >= middleThirdStart && quotePosition <= middleThirdEnd;
        
        return {
          ...quote,
          visible: isVisible,
          index
        };
      });

      setScrollQuotes(visibleQuotes);
    };

    if (modalContainerRef.current) {
      modalContainerRef.current.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    }

    return () => {
      if (modalContainerRef.current) {
        modalContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className.includes('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal-backdrop ${isVisible ? 'visible' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="steam-container">
        <div className="steam steam-1"></div>
        <div className="steam steam-2"></div>
        <div className="steam steam-3"></div>
      </div>
      
      <div 
        ref={modalContainerRef}
        className={`modal-container ${isVisible ? 'visible' : ''}`}
      >
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        
        <h1 className="modal-title">My Journey Timeline</h1>
        
        <div className="roadmap-timeline">
          <div className="timeline-line"></div>
          
          {/* Scroll-triggered quote boxes */}
          {scrollQuotes.map((quote) => (
            <div 
              key={quote.index}
              className={`scroll-quote ${quote.visible ? 'visible' : 'hidden'}`}
              style={{ top: `${quote.top}px` }}
            >
              <div className="scroll-quote-text">{quote.text}</div>
            </div>
          ))}
          
          {/* 2020-2023 Experience */}
          <div className="timeline-section">
            <div className="year-marker">
              <div className="year-node">
                <span className="year-text">2020 - 2023</span>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="card-content">
                <h2 className="experience-title">DanaMelo - A social non-profit organization </h2>
                <span className="checkpoint-date">Co-Founder & Chief Technical Officer(CTO)</span>
                <div className="experience-layout">
                  <div className="experience-image">
                    <img src="/experience1.png" alt="Experience 2020-2023" />
                  </div>
                  <div className="experience-description">
                    <p>
                      Dana Melo is a youth-led nonprofit organization dedicated to advancing social impact through community projects in women’s empowerment, education, and environmental awareness. Founded with the vision of creating meaningful, grassroots change, the organization mobilized volunteers and resources to uplift underserved communities. A few key lessons that I learned from this experience are:
                    </p>
                    <ul>
                      <li>Founded and led this organization for 2.5 years, building and managing a team of 53 volunteers to deliver community-driven initiatives across women's rights, education, and environmental sustainability.</li>
                      <li>Organized and executed 10+ large-scale social impact projects, including winter clothing drives, charity fundraisers, book donations with partner NGOs, and nationwide online awareness campaigns.</li>
                      <li>Delivered measurable, high-reach impact, supporting 2,000+ beneficiaries and raising 300,000+ BDT through strategic planning, partnership building, event coordination, and volunteer leadership.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2024 Experience */}
          <div className="timeline-section">
            <div className="year-marker">
              <div className="year-node">
                <span className="year-text">2024</span>
              </div>
            </div>
            
            {/* Early 2024 - Barista */}
            <div className="mini-checkpoint">
              <div className="checkpoint-node">
                <img src="/barista.png" alt="Barista" className="checkpoint-icon" />
              </div>
              <div className="checkpoint-content">
                <h3 className="checkpoint-title">Self-Made Barista</h3>
                <span className="checkpoint-date">Early 2024</span>
                <p className="checkpoint-description">
                  As a self-taught barista, I spent countless hours experimenting with the fundamentals—counting milk-boil cycles, adjusting bitterness levels, and refining the perfect sugar-milk-coffee ratio. I shared each batch with friends, gathering honest feedback and keeping mental notes of what worked. Life gave me lemons, so I learned to brew the perfect cup of coffee instead.
                </p>
              </div>
            </div>
            
            {/* Late 2024 - Guitarist */}
            <div className="mini-checkpoint">
              <div className="checkpoint-node">
                <img src="/guitar.png" alt="Guitar" className="checkpoint-icon" />
              </div>
              <div className="checkpoint-content">
                <h3 className="checkpoint-title">Critically Criticized Guitarist</h3>
                <span className="checkpoint-date">Late 2024</span>
                <p className="checkpoint-description">
                  I picked up my dusty-yet-new guitar and struck the E-minor chord, then progressed with basic chords and my first full(and favourite) song, “Kobitar Gaan.” From there, I explored my favorite Bangla band tracks and the timeless melodies of 60s Bollywood classics, and continue to do so.
                </p>
              </div>
            </div>
          </div>
          
          {/* 2025 Experiences */}
          <div className="timeline-section">
            <div className="year-marker">
              <div className="year-node">
                <span className="year-text">2025</span>
              </div>
            </div>
            
            {/* March 2025 */}
            <div className="experience-card">
              <div className="card-content">
                <h2 className="experience-title">HackNSU Season-5 Finalist</h2>
                <span className="experience-date">Team Lead | March 2025</span>
                <div className="experience-layout">
                  <div className="experience-image">
                    <img src="/exp2025a.png" alt="Experience March 2025" />
                  </div>
                  <div className="experience-description">
                   <p>
                      This was my first hackathon and in many ways, my firsts of many lessons. For this hackathon, I and my team built "HealthPulse" within 8 hours. HealthPulse is a mobile app designed to detect early disease outbreaks and alert users, enabling real-time public health monitoring. What I learned and accomplished:
                    </p>
                    <ul>
                      <li>Designed the UI/UX of the mobile app, learning how to create intuitive interfaces for real-world users. Built the prototype using Flutter,for which I had to learn a new programming language, "Dart", in just 3 days. </li>
                      <li>Worked with Firebase technologies, including Realtime Database and Firebase Storage, to implement real-time alerts and cloud storage.</li>
                      <li>Gained perspective on rapid development and collaboration under intense time constraints, and how delivering under pressure truly humbled me</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* August 2025 */}
            <div className="experience-card">
              <div className="card-content">
                <h2 className="experience-title">NASA Space-Apps Challenge 2025</h2>
                <span className="experience-date">Team Lead | August - September 2025</span>
                <div className="experience-layout">
                  <div className="experience-image">
                    <img src="/exp2025b.png" alt="Experience August 2025" />
                  </div>
                  <div className="experience-description">
                    <p>
                      For this prestigious hackathon, we built PlantDex, an educational farming simulation that teaches sustainable agriculture using NASA datasets (NDVI, SMAP, GPI) and a custom AI model, PlantDex AI. In addition, PlantDex was my first experience leading a team to build a real-world educational simulation. Some key lessons I took way:
                    </p>
                    <ul>
                      <li>Team Leadership & Management: PlantDex was my first experience leading a team to build a real-world educational simulation. I managed a 6-member team using a Kanban board on GitHub, tracking and assigning tasks to ensure smooth collaboration.</li>
                      <li>NASA Datasets & Game Design: Integrated NDVI, SMAP, and GPI datasets to create realistic farming scenarios, where each dataset influenced sustainable actions such as crop choice, irrigation, and soil management, teaching players how data-driven decisions impact crop yield and sustainability.</li>
                      <li>PlantDex AI: Built a custom AI model trained on 28+ parameters, using XGBoost, Random Forest, and other algorithms, to provide actionable recommendations within the game. Learned how large-scale environmental datasets can be transformed into predictive, decision-making tools for interactive education.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* End Node */}
          <div className="timeline-end">
            <div className="end-node">
              <span className="end-text">To Be Continued...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ExperienceModal; 
                