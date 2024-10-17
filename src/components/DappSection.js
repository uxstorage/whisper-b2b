import React from 'react';
import browseDappImage from '../assets/browse-dapp.png';
import './DappSection.scss';

function DappSection() {
    return (
        <section className="dapp-browsing">
            <div className="container">
                <div className="image">
                    <img src={browseDappImage} alt="DApp 브라우징 이미지" />
                </div>
                <div className="content">
                    <h2 className="section-title">다양한<br /> <span>DApp 브라우징</span></h2>
                    <p className="section-description">탈중앙화 애플리케이션(DApp)을 쉽고 안전하게 사용 경험하세요. 우리 플랫폼은 블록체인 기반으로 다양하고 안전한 수많은 DApp 서비스를 제공하여 사용자 경험을 향상시킵니다.</p>
                    <ul className="feature-list">
                        <li>원클릭 DApp 실행</li>
                        <li>크로스 체인 지원</li>
                        <li>DApp 큐레이션</li>
                        <li>통합적인 거버넌스</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default DappSection;