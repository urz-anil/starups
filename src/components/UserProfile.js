import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="profile-container">
      <div className="user-profile">
        <div className="profile-header">
          <h2>As</h2>
        </div>
        <div className="profile-content">
          <h3>Aditya Singh</h3>
          <p>Computer Science</p>
          <div className="skills">
            <span>AI & Machine Learning</span>
            <span>Full Stack Development</span>
          </div>
          <div className="projects">
            <p>Projects Published</p>
            <p>12 projects with 350+ likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;