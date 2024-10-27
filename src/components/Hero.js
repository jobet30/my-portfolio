import React from 'react';
import { Link } from 'gatsby';
import './styles/Hero.css';

const Hero = () => {
    return(
        <header className="hero">
            <div className="hero-content">
                <img src='/images/profile.jpg' alt="Profile" className='profile-pic'/>
                <div className='text-content'>
                    <h1 className='fade-in'>Jobet Casquejo</h1>
                    <h2 className='fade-in-up'>Salesforce Developer</h2>
                    <p className='fade-in-up'>I am a Salesforce and Java Developer dedicated to building scalable applications and delivering high-quality software solutions. 
                    I excel at designing efficient systems on the Salesforce platform and developing robust backend services with Java.</p>
                    <nav className='cta-buttons'>
                        <Link to="/projects" className="btn">View My Work</Link>
                        <Link to="/contact" className="btn contact-btn">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Hero;