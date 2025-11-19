import React from 'react';
import heroImage from '../assets/hero-image-ski.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-image-container">
                    <img src={heroImage} alt="Portrait" className="hero-image" />
                </div>

                <div className="hero-right">
                    <h1>&lt;coder&gt;</h1>
                    <p>eveloper who writes clean, elegant and efficient code.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
