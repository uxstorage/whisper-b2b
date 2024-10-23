import React from 'react';
import networkImage from '../assets/network-image.png';
import smartContractImage from '../assets/smart-contract-image.png';
import assetManagementImage from '../assets/asset-management-image.png';
import './WalletSection.scss';

function WalletSection() {
    return (
        <section className="wallet">
            <div className="container">
                <button className="section-tag">Wallet</button>
                <h2 className="section-title">
                    안전하고 편리한<br />
                    <span>디지털 자산 관리</span>
                </h2>
                <p className="section-description">
                    블록체인 기술로 자산을 안전하고 효율적으로 관리하세요
                </p>
                <div className="wallet-features">
                    <div className="feature-main">
                        <h4>다양한 블록체인 네트워크 지원</h4>
                        <p>이더리움, 바이낸스를 포함한 블록체인을 지원하여, 사용자가 자산을 다양한 네트워크에서 자유롭게 관리하고 이동할 수 있습니다. 이를 통해 자산의 유연한 활용과 안전한 관리를 동시에 실현할 수 있습니다.</p>
                        <img src={networkImage} alt="다양한 블록체인 네트워크" />
                    </div>
                    <div className="feature-side">
                        <div className="feature">
                            <h4>스마트 컨트랙트 기반 안전한 거래</h4>
                            <p>탈중앙화된 방식으로 토큰을 교환하고, 마트한 코드를 통한 결제를 지원합니다. 사용자는 스마트 계약을 통해 안전하게 자산을 교환하고 거래할 수 있습니다.</p>
                            <img src={smartContractImage} alt="스마트 컨트랙트" />
                        </div>
                        <div className="feature">
                            <h4>디지털 자산의 효율적 관리</h4>
                            <p>사용자는 NFT를 쉽게 발행하고 전송할 수 있으며, 실물 자산을 포인트로 토큰화하여 관리할 수 있습니다. 스마트 컨트랙트를 통해 든 자산이 자동화됩니다.</p>
                            <img src={assetManagementImage} alt="지털 자산 관리" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WalletSection;
