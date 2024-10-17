import React from 'react';
import adoption1 from '../assets/adoption1.png';
import adoption2 from '../assets/adoption2.png';
import adoption3 from '../assets/adoption3.png';
import './UsecaseSection.scss';

function UsecaseSection() {
    return (
        <section className="usecase">
            <div className="container">
                <h2 className="section-title">Usecase</h2>
                <p className="section-subtitle">
                    서비스에 바로 적용할  있는<br />
                    <span>Whipser 도입 사례를 확인 해보세요</span>
                </p>
                <div className="usecase-items">
                    <div className="usecase-item">
                        <img src={adoption1} alt="Web3 Payments" />
                        <h3>스테이블 코인 기반 온라인 상품 결제</h3>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="usecase-item">
                        <img src={adoption2} alt="NFT Vouchers" />
                        <h3>NFT 상품권 및 자동정산 컨트랙트</h3>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                    <div className="usecase-item">
                        <img src={adoption3} alt="Scan to Payments" />
                        <h3>실물 자산 기반 포인트 토큰 충전 및 결제</h3>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsecaseSection;