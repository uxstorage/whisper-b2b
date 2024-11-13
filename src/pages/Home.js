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
    const [usecases, setUsecases] = useState([]);
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
        import('../data/usecase.json').then(module => {
            setUsecases(module.default);
        });
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
        console.log('Opening modal with usecase:', usecase);
        setSelectedUsecase(usecase);
        setModalOpen(true);
    };

    const closeModal = () => {
        const basePath = process.env.NODE_ENV === 'production' ? '/whisper-b2b' : '';
        setModalOpen(false);
        setSelectedUsecase(null);
        window.history.pushState(null, '', `${basePath}/home`);
    };

    const handleOpenModal = (usecase) => {
        console.log('Opening modal with usecase:', usecase);
        setSelectedUsecase(usecase);
        setModalOpen(true);
        const basePath = process.env.NODE_ENV === 'production' ? '/whisper-b2b' : '';
        window.history.pushState(null, '', `${basePath}/home/modal-usecase-${usecase.id}`);
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
                        <div className="modal-content">
                            <h2 className="modal-title">{selectedUsecase.title}</h2>
                            {selectedUsecase.content.map((item, index) => {
                                switch (item.type) {
                                    case 'text':
                                        return <p key={index} className="modal-description">{item.value}</p>;
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
