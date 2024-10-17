import React from 'react';
import './BlockExplorerSection.scss';

function BlockExplorerSection() {
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
                <ul className="feature-list">
                    <li>실시간 트랜잭션 추적</li>
                    <li>멀티체인 지원</li>
                    <li>고급 검색 기능</li>
                    <li>데이터 시각화 도구</li>
                </ul>
            </div>
        </section>
    );
}

export default BlockExplorerSection;