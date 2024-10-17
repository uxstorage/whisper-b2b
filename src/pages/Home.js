import React, { useEffect } from 'react';
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
import './Home.scss';

function Home() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

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

    return (
        <main>
            <HeroSection />
            <ClientsSection />
            <UsecaseSection />
            <WalletSection />
            <MessengerSection />
            <DexSection />
            <DappSection />
            <BlockExplorerSection />
            <BrowserSection />
            <WhiteLabelSection />
        </main>
    );
}

export default Home;
