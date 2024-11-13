import React from 'react';
import e2ee from '../assets/e2ee.png';
import groupMessage from '../assets/group-message.png';
import sendMoney from '../assets/send-money.png';
import './MessengerSection.scss';

function MessengerSection() {
    return (
        <section className="web3-features">
            <div className="container">
                <button className="section-tag">Messenger</button>
                <h2 className="section-title">
                    안전한 Web3<br /> <span>커뮤니케이션</span>
                </h2>
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
                                <p>그룹 채팅을 통해 여러 사용자와 대화를 안전하게 주고받을 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="feature">
                            <img src={sendMoney} alt="채팅 내 간편 송금" />
                            <div className="text-content">
                                <h3>채팅 내 간편 송금</h3>
                                <p>채팅 중에 바로 자산을 송금할 수 있어요. 간단하고 안전합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MessengerSection;
