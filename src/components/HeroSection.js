import React from 'react';
import HomepageGhost from '../assets/homepage_ghost.gif';
import './HeroSection.scss';

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>기업을 위한 안전한<br /><span>Web3 솔루션, 위스퍼</span></h1>
                <div className="lottie-container">
                    <dotlottie-player
                        src="https://lottie.host/fedda1ef-d8b7-4ed3-92b7-f26ce77e31dc/iH8td5w8Tx.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '50%', height: '50%' }}
                        direction="1"
                        playMode="normal"
                        loop
                        autoplay
                    ></dotlottie-player>
                    <img src={HomepageGhost} alt="Homepage Ghost" className="homepage-ghost" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

