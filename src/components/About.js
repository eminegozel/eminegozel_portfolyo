import React from 'react';
import '../styles/About.css';

import profile_img from '../image/profile_img.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2 className="section-title">Ben Kimim?</h2>
                <div className="about-grid">
                    <div className="about-image">
                        <img src={profile_img} alt="Emine Gözel" />
                        <div className="image-border"></div>
                    </div>
                    <div className="about-text">
                        <div className="text-content">
                            <p>
                                Balıkesir Üniversitesi'nde bilgisayar mühendisliği okuyorum. 
                                En çok HTML-CSS ile arayüz kurmak ve Python'la prototip 
                                geliştirmekten keyif alıyorum; PyQt5'le masaüstü uygulamaları 
                                denemek, kod ile tasarımın buluştuğu noktayı keşfetmemi sağlıyor.
                            </p>
                            <p>
                                C#'ta temel bilgilere sahibim, Java'yı ise yeni yeni öğreniyorum. 
                                Dil fark etmeksizin algoritma mantığını kavramaya odaklanıyor ve 
                                her çözdüğüm hatayla, eklediğim her yeni özellikle ilerlediğimi 
                                görmekten motive oluyorum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="info-item">
                        <span className="info-label">Eğitim:</span>
                        <span className="info-value">Bilgisayar Mühendisliği</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Üniversite:</span>
                        <span className="info-value">Balıkesir Üniversitesi</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Odak:</span>
                        <span className="info-value">Front-end tasarımı & masaüstü araçlar & algoritma çalışmaları</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Programlama Dilleri:</span>
                        <span className="info-value">HTML-CSS & PYTHON & C#</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 