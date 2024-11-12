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
    const [isClosing, setIsClosing] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.paddingRight = '';
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
            window.history.pushState(null, '', `/#modal-usecase-${usecaseId}`);
        } else if (!isOpen && !isClosing) {
            window.history.pushState(null, '', '/');
        }
    }, [isOpen, usecaseId, isClosing]);

    useEffect(() => {
        console.log('Selected Usecase:', selectedUsecase);
    }, [selectedUsecase]);

    if ((!isOpen && !isClosing) || !selectedUsecase) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleShare = (e) => {
        e.preventDefault(); // 기본 이벤트 동작 방지
        const baseUrl = window.location.href.split('#')[0];
        const currentUrl = usecaseId
            ? `${baseUrl}#modal-usecase-${usecaseId}`
            : window.location.href;

        if (navigator.share && isMobile) {
            navigator.share({
                title: 'Whisper',
                text: '안전한 Web3 솔루션, 위스퍼를 확인해보세요!',
                url: currentUrl,
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
        const baseUrl = window.location.origin + window.location.pathname;
        const currentUrl = usecaseId
            ? `${baseUrl}#modal-usecase-${usecaseId}`
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
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
            window.history.pushState(null, '', window.location.pathname);
        }, 500);
    };

    return (
        <div className={`modal-overlay ${isDarkMode ? 'dark-mode' : ''} ${isClosing ? 'closing' : ''}`} onClick={handleOverlayClick} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
            <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''} ${isClosing ? 'closing' : ''}`}>
                <div className="modal-header">
                    <button className="modal-theme-toggle" onClick={toggleDarkMode}>
                        {isDarkMode ? '🌙' : '☀️'}
                    </button>
                    <button onClick={handleShare} className="modal-share">
                        {isMobile ? <ShareIcon /> : <LinkIcon />}
                    </button>
                    <button className="modal-close" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-body">
                    {selectedUsecase && (
                        <div className="modal-usecase">
                            <div className="modal-content">
                                <h2 className="modal-title">{selectedUsecase.title}</h2>
                                {selectedUsecase.content.map((item, index) => {
                                    switch(item.type) {
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
                                        case 'image':
                                            const isLastItem = index === selectedUsecase.content.length - 1;
                                            return (
                                                <div 
                                                    key={index} 
                                                    style={{ 
                                                        marginBottom: isLastItem ? '40px' : '20px',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <img 
                                                        src={process.env.PUBLIC_URL + item.url}
                                                        alt={item.alt} 
                                                        className="modal-image" 
                                                        onContextMenu={(e) => e.preventDefault()}
                                                        style={{ pointerEvents: 'none' }}
                                                        onError={(e) => {
                                                            console.error('Image load error:', e);
                                                            console.error('Failed to load image:', process.env.PUBLIC_URL + item.url);
                                                            e.target.style.display = 'none';
                                                            e.target.insertAdjacentHTML('afterend', `<p>이미지를 불러올 수 없습니다: ${item.alt}</p>`);
                                                        }} 
                                                    />
                                                </div>
                                            );
                                        case 'video':
                                            if (item.isYoutube) {
                                                const videoId = item.url.split('v=')[1];
                                                return (
                                                    <div className="modal-video-container" key={index}>
                                                        <iframe
                                                            width="100%"
                                                            height="315"
                                                            src={`https://www.youtube.com/embed/${videoId}`}
                                                            title={item.alt}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
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
