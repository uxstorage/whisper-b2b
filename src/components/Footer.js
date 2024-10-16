import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import twitterIcon from '../assets/twitter-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import footerImage from '../assets/footer-whisper-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-top">
                        <p>블록체인 기술로 서비스를 업그레이드하고 싶으신가요</p>
                        <Link to="/contact" className="btn footer-btn">
                            <span>문의하기</span>
                        </Link>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <img src={footerImage} alt="WHISPER 로고" />
                            </div>
                            <div className="footer-social">
                                <a href="#" className="social-icon"><img src={twitterIcon} alt="Twitter" /></a>
                                <a href="#" className="social-icon"><img src={facebookIcon} alt="Facebook" /></a>
                                <a href="#" className="social-icon"><img src={instagramIcon} alt="Instagram" /></a>
                            </div>
                            <p className="footer-copyright">©2024 Whisper. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;