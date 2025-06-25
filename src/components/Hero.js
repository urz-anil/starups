import React from 'react';
import './Hero.css';
import Button from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import AnilImg from './anilimg.jpeg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <div className="hero-title-line">Empowering</div>
            <div className="hero-title-line">Education</div>
            <div className="hero-title-line">Through</div>
            <div className="hero-title-line">Innovation</div>
          </h1>
          
          <p className="hero-description">
            STARUPS is a comprehensive<br />
            platform connecting students,<br />
            colleges, faculty, and professionals<br />
            to foster skill development, research<br />
            motivation, and career opportunities.
          </p>
          
          <div className="hero-buttons">
            <Button className="get-started-btn">Get Started</Button>
            <Button className="explore-features-btn">Explore Features</Button>
          </div>
          
          <div className="user-icons">
            <div className="icon icon-a">A</div>
            <div className="icon icon-n">N</div>
            <div className="icon icon-i">I</div>
            <div className="icon icon-l">L</div>
            <p className="user-count">Join 10,000+ users already on the platform</p>
          </div>
        </div>
        
        <Card className="profile-card">
          <CardContent>
            <div className="profile-header">
              <div className="profile-image-container">
                <img src={AnilImg} alt="Anil Rachamalla" className="profile-image" />
                <div>
                  <h2>ANIL RACHAMALLA</h2>
                  <p>Information Technology <span className="star-points">⭐ 1250</span></p>
                </div>
              </div>
            </div>
            <div className="skill-box">
              <p className="skill-title">🎓 AI & Machine Learning</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '66%'}}></div>
              </div>
            </div>
            <div className="skill-box">
              <p className="skill-title">💻 Full Stack Development</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="projects-box">
              <p className="skill-title">📦 Projects Published</p>
              <p className="projects-count">12 projects with 350+ likes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Hero;