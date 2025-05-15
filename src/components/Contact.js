import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada form gönderme işlemi yapılacak
        console.log('Form data:', formData);
        alert('Mesajınız gönderildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <h2 className="section-title">İletişim</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <h3>E-posta</h3>
                            <p>gozelemine34@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Konum</h3>
                            <p>Balıkesir, Türkiye</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <h3>Telefon</h3>
                            <p>+90 546 XXX XX XX</p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-posta</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesaj</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 