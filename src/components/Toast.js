import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import './Toast.scss';

function Toast({ message }) {
    return (
        <div className="toast">
            <span className="icon"><FaExclamationCircle /></span>
            <span className="message">{message}</span>
        </div>
    );
}

export default Toast;
