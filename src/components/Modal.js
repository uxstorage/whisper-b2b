import React, { useEffect } from 'react';
import './Modal.scss';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <CloseIcon />
                </button>
                {children}
                <button className="modal-close-mobile" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Modal;
