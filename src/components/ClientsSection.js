import React from 'react';
import clients1 from '../assets/clients1.png';
import clients2 from '../assets/clients2.png';
import clients3 from '../assets/clients3.png';
import clients4 from '../assets/clients4.png';
import './ClientsSection.scss';

function ClientsSection() {
    return (
        <section className="clients">
            <div className="container">
                <h2 className="section-title">Clients</h2>
                <p className="section-subtitle">
                    다양한 기업들이<br />
                    <span>위스퍼 솔루션과</span> 함께하고 있어요
                </p>
                <div className="client-logos">
                    <img src={clients1} alt="Client 1" />
                    <img src={clients2} alt="Client 2" />
                    <img src={clients3} alt="Client 3" />
                    <img src={clients4} alt="Client 4" />
                </div>
            </div>
        </section>
    );
}

export default ClientsSection;