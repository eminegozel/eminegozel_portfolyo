import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <h1 className="name-text">Emine Gözel</h1>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Ben Kimim?</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Neler Yapabilirim?</a></li>
                <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolyo</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>İletişim</a></li>
            </ul>
        </nav>
    );
};

export default Navbar; 