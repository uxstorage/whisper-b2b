import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Toast.scss';

function Toast({ message, type = 'success' }) {
    return (
        <div className={`toast ${type}`}>
            <span className="icon"><FaCheckCircle /></span>
            <span className="message">{message}</span>
        </div>
    );
}

export default Toast;
