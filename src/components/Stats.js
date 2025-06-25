import React from 'react';
import './Stats.css';
import { GraduationCap, School, Handshake } from 'lucide-react';

function Stats() {
  return (
    <section className="stats-section">
      <h2>Transforming Education Through Connectivity</h2>
      <p>
        STARUPS is revolutionizing how students develop skills, pursue research,
        and connect with industry professionals through our integrated ecosystem.
      </p>
      
      <div className="stats-cards-container">
        {/* Students Card */}
        <div className="stat-card">
          <div className="stat-icon students-icon">
            <GraduationCap size={32} />
          </div>
          <h3>10,000+</h3>
          <p>Students Actively Engaged</p>
        </div>

        {/* Institutions Card */}
        <div className="stat-card">
          <div className="stat-icon institutions-icon">
            <School size={32} />
          </div>
          <h3>250+</h3>
          <p>Partner Educational Institutions</p>
        </div>

        {/* Professionals Card */}
        <div className="stat-card">
          <div className="stat-icon professionals-icon">
            <Handshake size={32} />
          </div>
          <h3>500+</h3>
          <p>Industry Professionals & Recruiters</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;