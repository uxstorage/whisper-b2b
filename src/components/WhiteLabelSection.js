import React, { useMemo } from 'react';
import whitelabel from '../assets/whitelabel.png';
import './WhiteLabelSection.scss';

const FeatureList = React.memo(({ features }) => (
    <ul className="feature-list">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
    </ul>
));

function WhiteLabelSection() {
    const features = useMemo(() => [
        "Whisper의 모든 기능 도입 가능",
        "고객사 브랜딩 맞춤 디자인 제공",
        "인프라 관리 및 기술 업데이트"
    ], []);

    return (
        <section className="solution">
            <div className="container">
                <div className="title-container">
                    <button className="section-tag">White label</button>
                    <h2 className="section-title">
                        블록체인 서비스 개발로 인해<br />
                        <span>비즈니스 성장 및 고객확보에<br />
                            전념하지 못하고 계시나요?</span>
                    </h2>
                    <p className="section-description">
                        Whisper의 화이트라벨 솔루션 도입하고 더 중요한 업무에 집중하세요!
                    </p>
                </div>
                <div className="content-container">
                    <div className="image-container">
                        <img src={whitelabel} alt="화이트라벨 솔루션" className="whitelabel-image" />
                    </div>
                    <div className="feature-list-container">
                        <FeatureList features={features} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(WhiteLabelSection);
