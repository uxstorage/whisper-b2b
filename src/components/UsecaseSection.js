import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import './UsecaseSection.scss';
import usecasesData from '../data/usecase.json';
import adoption1 from '../assets/adoption1.png';
import adoption2 from '../assets/adoption2.png';
import adoption3 from '../assets/adoption3.png';

function UsecaseSection({ modalOpen, selectedUsecase, openModal, closeModal }) {
    const location = useLocation();
    const usecases = usecasesData.map(usecase => ({
        ...usecase,
        thumbnail: usecase.id === 1 ? adoption1 : usecase.id === 2 ? adoption2 : adoption3
    }));

    const handleOpenModal = (usecase) => {
        console.log('Opening modal with usecase:', usecase);
        openModal(usecase);
        window.history.pushState(null, '', `#modal-usecase-${usecase.id}`);
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
                    {usecases.map((usecase) => (
                        <div className="usecase-item" key={usecase.id}>
                            <img src={usecase.thumbnail} alt={usecase.title} />
                            <h3>{usecase.title}</h3>
                            <p className="usecase-description">{usecase.content[0].value.split('.').slice(0, 2).join('.') + '.'}</p>
                            <button className="read-more" onClick={() => handleOpenModal(usecase)}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && selectedUsecase && (
                <Modal 
                    key={selectedUsecase.id}
                    isOpen={modalOpen} 
                    onClose={closeModal} 
                    usecaseId={selectedUsecase.id} 
                    selectedUsecase={selectedUsecase}
                >
                    {/* Modal content */}
                </Modal>
            )}
        </section>
    );
}

export default UsecaseSection;
