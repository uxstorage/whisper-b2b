import React, { useMemo } from 'react';
import './BlockExplorerSection.scss';

const FeatureList = React.memo(({ features }) => (
    <ul className="feature-list">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
    </ul>
));

function BlockExplorerSection() {
    const features = useMemo(() => [
        "실시간 트랜잭션 추적",
        "멀티체인 지원",
        "고급 검색 기능",
        "데이터 시각화 도구"
    ], []);

    return (
        <section className="block-explorer">
            <div className="container">
                <button className="section-tag">Block Explorer</button>
                <h2 className="section-title">
                    블록체인 트랜잭션 뷰어<br />
                    <span>블록 익스플로러</span>
                </h2>
                <p className="section-description">
                    강력한 블록 탐색로 블록체인 트랜잭션의 완전한 투명성을 확보하세요.<br />
                    여러 네트워크에서 트랜잭션을 추적, 분석 및 확인할 수 있습니다.
                </p>
                <FeatureList features={features} />
            </div>
        </section>
    );
}

export default React.memo(BlockExplorerSection);
