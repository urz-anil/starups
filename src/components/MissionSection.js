import React from 'react';
import './MissionSection.css';
import Button from "./ui/Button";

function MissionSection() {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          To bridge the gap between academic learning and industry requirements by creating 
          a unified platform where students can showcase their skills, colleges can monitor 
          and guide their progress, faculty can provide mentorship, and professionals can 
          discover talent and share expertise.
        </p>
        <p>
          Through our STAR points system, we encourage continuous learning, project-based 
          skill development, and research contributions that benefit both the students and 
          the larger community.
        </p>
        <Button className="explore-btn">Explore User Roles</Button>
      </div>
      
      <div className="how-it-works-card">
        <h3>How STARUPS Works</h3>
        <p>
          Watch our quick overview of how the STARUPS ecosystem connects students, 
          colleges, faculty, and professionals to create a seamless educational experience.
        </p>
      </div>
    </div>
  );
}

export default MissionSection;