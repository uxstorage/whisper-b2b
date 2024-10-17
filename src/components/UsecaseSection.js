import React, { useState } from 'react';
import adoption1 from '../assets/adoption1.png';
import adoption2 from '../assets/adoption2.png';
import adoption3 from '../assets/adoption3.png';
import Modal from './Modal';
import './UsecaseSection.scss';

function UsecaseSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUsecase, setSelectedUsecase] = useState(null);

    const usecases = [
        {
            title: "스테이블 코인 기반 온라인 상품 결제",
            image: adoption1,
            description: "모바일 앱 Memble은 글로벌 멤버십 마켓플레이스입니다. 프라이빗 멤버십 상품을 NFT로 발급받아 실사용까지 할 수 있는 서비스입니다. Memble은 결제 수단에 USDT, USDC와 같은 스테이블 코인을 사용할 수 있는 'Web3 pay'를 추가했습니다. 가상화폐를 보유한 고객들에게 실물 멤버십을 추고자 하는 목표와, 전세계 유저들이 결제 과정에서 환메기 당라 겪는 어려움에 대한 해결책이 되었습니다. 이를 위해 Memble은 서비스 내에 직접 지갑 기능을 개발 해야 하는 우려와, 그로 인 서비스의 기능이 복잡해질 걱정이 있었습니다. 이때 서비스 내에 Whisper의 지갑 기능을 도입함에 개발 과정에서 든든한 리소스를 절약하면서도 안정적인 서비스 관리를 할 수 있게 되었습니다. 이와 같은 Whisper 지갑 도입을 통해 서비스 내 가상화폐 소유 유저들의 편의성을 높여보세요!"
        },
        {
            title: "NFT 상품권 및 자동정산 컨트랙트",
            image: adoption2,
            description: "NFT 상품권 및 자동정산 컨트랙트에 대한 상세 설명..."
        },
        {
            title: "실물 자산 기반 포인트 토큰 충전 및 결제",
            image: adoption3,
            description: "실물 자산 기반 포인트 토큰 충전 및 결제에 대한 상세 설명..."
        }
    ];

    const openModal = (usecase) => {
        setSelectedUsecase(usecase);
        setModalOpen(true);
    };

    return (
        <section className="usecase">
            <div className="container">
                <h2 className="section-title">Usecase</h2>
                <p className="section-subtitle">
                    서비스에 바로 적용할 수 있는<br />
                    <span>Whipser 도입 사례를 확인해보세요</span>
                </p>
                <div className="usecase-items">
                    {usecases.map((usecase, index) => (
                        <div className="usecase-item" key={index}>
                            <img src={usecase.image} alt={usecase.title} />
                            <h3>{usecase.title}</h3>
                            <button className="read-more" onClick={() => openModal(usecase)}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {selectedUsecase && (
                    <div className="modal-usecase">
                        <img src={selectedUsecase.image} alt={selectedUsecase.title} className="modal-image" />
                        <h2 className="modal-title">{selectedUsecase.title}</h2>
                        <p className="modal-description">{selectedUsecase.description}</p>
                    </div>
                )}
            </Modal>
        </section>
    );
}

export default UsecaseSection;
