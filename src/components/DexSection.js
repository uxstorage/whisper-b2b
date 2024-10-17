import React from 'react';
import dexImage from '../assets/dex.png';
import './DexSection.scss';

function DexSection() {
    return (
        <section className="dex-solution">
            <div className="container">
                <div className="content">
                    <h2 className="section-title">분산형 거래소<br /><span>DEX 솔루션</span></h2>
                    <p className="section-description">중앙화된 중개자 없이 안전하고 투명한 암호화폐 거래를 지원합니다. 이 솔루션은 블록체인 기반으로 사용자들이 직접 자산을 교환하고 거래할 수 있는 환경을 제공합니다.</p>
                    <ul className="feature-list">
                        <li>자동화된 마켓 메이킹</li>
                        <li>크로스체인 스왑</li>
                        <li>토큰화 기능</li>
                        <li>거래소 유동성</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={dexImage} alt="DEX 솔루션 이미지" />
                </div>
            </div>
        </section>
    );
}

export default DexSection;