import React from 'react';
import web3BrowserImage from '../assets/web3-browser.png';
import wallet from '../assets/wallet.png';
import privacy from '../assets/privacy.png';
import directory from '../assets/directory.png';
import './BrowserSection.scss';

function BrowserSection() {
    return (
        <section className="browser">
            <div className="container">
                <div className="title-container">
                    <button className="section-tag">Browser</button>
                    <h2 className="section-title">
                        Web3 지원<br />
                        <span>탈중앙화 브라우저</span>
                    </h2>
                    <p className="section-description">
                        안전하고 프라이버시 중심의 dApp 브라우저로 탈중앙화 애플리케이션의 세계를 탐험하세요. <br />
                        다양한 Web3 서비스에 원활하게 접근할 수 있습니다.
                    </p>
                </div>
                <img src={web3BrowserImage} alt="Web3 브라우저" className="web3-browser-image" />
                <div className="features">
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={wallet} alt="Whisper 월렛 통합" />
                            <div className="text-content">
                                <h3>Whisper 월렛 통합</h3>
                                <p>통합된 암호화폐 월렛으로 Web3 서비스에 쉽게 연결할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={privacy} alt="프라이버시 중심 브라우징" />
                            <div className="text-content">
                                <h3>프라이버시 중심 브라우징</h3>
                                <p>추적이나 데이터 수집 없이 향상된 사용자 개인정보 보호를 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={directory} alt="DApp 디렉토리" />
                            <div className="text-content">
                                <h3>DApp 디렉토리</h3>
                                <p>인기 있고 신뢰할 수 있는 탈중앙화 애플리케이션의 큐레이션 목록을 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrowserSection;