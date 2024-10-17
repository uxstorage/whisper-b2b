import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.scss';
import clients1 from '../assets/clients1.png';
import clients2 from '../assets/clients2.png';
import clients3 from '../assets/clients3.png';
import clients4 from '../assets/clients4.png';
import adoption1 from '../assets/adoption1.png';
import adoption2 from '../assets/adoption2.png';
import adoption3 from '../assets/adoption3.png';
import networkImage from '../assets/network-image.png';
import smartContractImage from '../assets/smart-contract-image.png';
import assetManagementImage from '../assets/asset-management-image.png';
import HomepageGhost from '../assets/homepage_ghost.gif';
import e2ee from '../assets/e2ee.png';
import groupMessage from '../assets/group-message.png';
import sendMoney from '../assets/send-money.png';
import dexImage from '../assets/dex.png';
import browseDappImage from '../assets/browse-dapp.png';
import web3BrowserImage from '../assets/web3-browser.png';
import wallet from '../assets/wallet.png';
import privacy from '../assets/privacy.png';
import directory from '../assets/directory.png';
import whitelabel from '../assets/whitelabel.png';
import '../pages/Home.scss';

function Home() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
        script.type = "module";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

return (
    <main>
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
        <section className="clients">
            <div className="container">
                <h2 className="section-title">Clients</h2>
                <p className="section-subtitle">
                    다양한 기업들이<br />
                    <span>위스퍼 솔루션과</span> 함께하고 있어요
                </p>
                <div className="client-logos">
                    <img src={clients1} alt="Client 1" />
                    <img src={clients2} alt="Client 2" />
                    <img src={clients3} alt="Client 3" />
                    <img src={clients4} alt="Client 4" />
                </div>
            </div>
        </section>
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
        <section className="wallet">
            <div className="container">
                <h2 className="section-title">Wallet</h2>
                <h3 className="section-subtitle">
                    안전하고 편리한<br />
                    <span>디지털 자산 관리</span>
                </h3>
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
        <section className="web3-features">
            <div className="container">
                <h2 className="section-title">Messenger</h2>
                <p className="section-subtitle">
                    안전한 Web3<br /> <span>커뮤니케이션</span>
                </p>
                <p className="section-description">
                    암호화 기술로 보호되는 메시지를 통해 비즈니스 솔루션을 제공할 수 있어요
                </p>
                <div className="features">
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={e2ee} alt="종단간 암호화 메시지" />
                            <div className="text-content">
                                <h3>종단간 암호화 메시지</h3>
                                <p>Whisper 프로토콜을 사용해, 오직 발신자와 수신자만 메시지를 볼 수 있어요.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={groupMessage} alt="일대다 그룹 메시징" />
                            <div className="text-content">
                                <h3>일대다 그룹 메시징</h3>
                                <p>그룹 채팅을 통해 여러 사용자와 한 번에 민감한 정보도 안전하게 주고받을 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={sendMoney} alt="채팅 내 간편 송금" />
                            <div className="text-content">
                                <h3>채팅 내 간편 송금</h3>
                                <p>채팅 중에 바로 암호화폐를 송금할 수 있어요. 간단한 클릭으로 안전하게 자산을 전송할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                        <ul className="feature-list">
                            <li>Whisper의 모든 기능 도입 가능</li>
                            <li>고객사 브랜딩 맞춤 디자인 제공</li>
                            <li>인프라 관리 및 기술 업데이트</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
);
}

export default Home;
