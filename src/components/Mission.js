import React from 'react';
import './Mission.css';

function Mission() {
  return (
    <section className="mission-section">
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
      <button className="explore-btn">Explore User Roles</button>
    </section>
  );
}

export default Mission;