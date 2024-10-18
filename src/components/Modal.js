import React, { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Modal.scss';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { ReactComponent as ShareIcon } from '../assets/share-icon.svg';
import { ReactComponent as LinkIcon } from '../assets/link-icon.svg';
import Toast from './Toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, children, usecaseId, selectedUsecase }) {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const location = useLocation();
    const navigate = useNavigate();

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen && usecaseId) {
            navigate(`#modal-usecase-${usecaseId}`, { replace: true });
        } else if (!isOpen) {
            navigate('', { replace: true });
        }
    }, [isOpen, navigate, usecaseId]);

    useEffect(() => {
        console.log('Selected Usecase:', selectedUsecase);
    }, [selectedUsecase]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
            navigate('', { replace: true });
        }
    };

    const handleShare = () => {
        if (navigator.share && isMobile) {
            navigator.share({
                title: 'Whisper',
                text: '안전한 Web3 솔루션, 위스퍼를 확인해보세요!',
                url: window.location.href,
            }).then(() => {
                console.log('공유 성공');   
            }).catch((error) => {
                console.log('공유 실패:', error);
            });
        } else {
            handleCopyLink();
        }
    };

    const handleCopyLink = () => {
        const currentUrl = usecaseId 
            ? `${window.location.origin}${window.location.pathname}#modal-usecase-${usecaseId}`
            : window.location.href;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(currentUrl).then(() => {
                setToast({ show: true, message: '링크가 클립보드에 복사되었습니다.', type: 'success' });
                setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
            }).catch((err) => {
                console.error('링크 복사 실패:', err);
                setToast({ show: true, message: '링크 복사에 실패했습니다.', type: 'error' });
                setTimeout(() => setToast({ show: false, message: '', type: 'error' }), 3000);
            });
        } else {
            // 클립보드 API를 지원하지 않는 경우 대체 방법
            const textArea = document.createElement("textarea");
            textArea.value = currentUrl;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setToast({ show: true, message: '링크가 클립보드에 복사되었습니다.', type: 'success' });
            } catch (err) {
                console.error('링크 복사 실패:', err);
                setToast({ show: true, message: '링크 복사에 실패했습니다.', type: 'error' });
            }
            document.body.removeChild(textArea);
        }
    };

    const handleClose = () => {
        onClose();
        navigate('', { replace: true });
    };

    return (
        <div className={`modal-overlay ${isDarkMode ? 'dark-mode' : ''}`} onClick={handleOverlayClick}>
            <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="modal-header">
                    <button className="modal-theme-toggle" onClick={toggleDarkMode}>
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                    <button className="modal-share" onClick={handleShare}>
                        {isMobile ? <ShareIcon /> : <LinkIcon />}
                    </button>
                    <button className="modal-close" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-body">
                    {selectedUsecase && (
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
                            <h2>{selectedUsecase.title}</h2>
                            {selectedUsecase.content.map((item, index) => {
                                if (item.type === 'text') {
                                    return <p key={index}>{item.value}</p>;
                                } else if (item.type === 'image') {
                                    return (
                                        <img 
                                            key={index}
                                            src={process.env.PUBLIC_URL + item.value} 
                                            alt={item.caption || ''} 
                                            className="modal-image"
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                    {children}
                </div>
            </div>
            {toast.show && <Toast message={toast.message} type={toast.type} />}
        </div>
    );
}

export default Modal;
