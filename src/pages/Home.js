import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import UsecaseSection from '../components/UsecaseSection';
import WalletSection from '../components/WalletSection';
import MessengerSection from '../components/MessengerSection';
import DexSection from '../components/DexSection';
import DappSection from '../components/DappSection';
import BlockExplorerSection from '../components/BlockExplorerSection';
import BrowserSection from '../components/BrowserSection';
import WhiteLabelSection from '../components/WhiteLabelSection';
import Modal from '../components/Modal';
import './Home.scss';
import usecasesData from '../data/usecase.json';

function Home() {
    const location = useLocation();
    const [usecases, setUsecases] = useState(usecasesData);
    const [selectedUsecase, setSelectedUsecase] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    useEffect(() => {
        const hash = location.hash;
        if (hash.includes('modal-usecase-')) {
            const usecaseId = parseInt(hash.split('-').pop());
            const usecase = usecasesData.find(u => u.id === usecaseId);
            if (usecase) {
                setSelectedUsecase(usecase);
                setModalOpen(true);
            }
        } else {
            setModalOpen(false);
            setSelectedUsecase(null);
        }
    }, [location.hash]);

    // UsecaseSection에 props로 전달할 함수들
    const openModal = (usecase) => {
        setSelectedUsecase(usecase);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUsecase(null);
    };

    return (
        <main>
            <HeroSection />
            <ClientsSection />
            <UsecaseSection 
                modalOpen={modalOpen} 
                selectedUsecase={selectedUsecase} 
                openModal={openModal} 
                closeModal={closeModal}
            />
            <WalletSection />
            <MessengerSection />
            <DexSection />
            <DappSection />
            <BlockExplorerSection />
            <BrowserSection />
            <WhiteLabelSection />
            {modalOpen && selectedUsecase && (
                <Modal isOpen={modalOpen} onClose={closeModal} usecaseId={selectedUsecase.id}>
                    <div className="modal-usecase">
                        <img 
                            src={`${process.env.PUBLIC_URL}${selectedUsecase.thumbnail}`} 
                            alt={selectedUsecase.title} 
                            className="modal-thumbnail" 
                            onError={(e) => {
                                console.error('Image load error:', e);
                                e.target.src = `${process.env.PUBLIC_URL}/fallback-image.png`; // 대체 이미지 경로
                            }}
                        />
                        <div className="modal-content">
                            <h2 className="modal-title">{selectedUsecase.title}</h2>
                            {selectedUsecase.content.map((item, index) => {
                                switch(item.type) {
                                    case 'text':
                                        return <p key={index} className="modal-description">{item.value}</p>;
                                    case 'image':
                                        return (
                                            <figure key={index}>
                                                <img 
                                                    src={`${process.env.PUBLIC_URL}${item.value}`}
                                                    alt={item.caption} 
                                                    className="modal-image" 
                                                    onError={(e) => {
                                                        console.error('Image load error:', e);
                                                        e.target.src = `${process.env.PUBLIC_URL}/fallback-image.png`; // 대체 이미지 경로
                                                    }}
                                                />
                                            </figure>
                                        );
                                    case 'list':
                                        return (
                                            <ul key={index} className="modal-list">
                                                {item.value.map((listItem, listIndex) => (
                                                    <li key={listIndex}>{listItem}</li>
                                                ))}
                                            </ul>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </div>
                </Modal>
            )}
        </main>
    );
}

export default Home;
