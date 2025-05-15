import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1 className="gradient-text">
                    Merhaba!
                    <span className="highlight-text">Ben Emine Gözel</span>
                </h1>
                <p>Bilgisayar Mühendisliği Öğrencisi</p>
                <p className="sub-text">Yazılım Geliştirici Adayı</p>
                <div className="social-links">
                    <a href="https://github.com/eminegozel" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/?locale=tr_TR" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home; 