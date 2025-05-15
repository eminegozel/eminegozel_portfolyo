import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'Soru Bankası Programı',
            description: 'PyQt5 ile geliştirilmiş, öğrencilerin soru çözüp kaydetmelerine olanak sağlayan bir masaüstü uygulaması.',
            image: 'https://raw.githubusercontent.com/eminegozel/soru_bankasi_programi/main/preview.png',
            technologies: ['Python', 'PyQt5', ],
            link: 'https://github.com/eminegozel/soru_bankasi_programi'
        },
        {
            title: 'Text Edit Uygulaması',
            description: 'Python ve PyQt5 kullanılarak geliştirilen, temel metin düzenleme işlevlerine sahip bir masaüstü uygulaması.',
            image: 'https://raw.githubusercontent.com/eminegozel/text-edit-uygulamasi/main/preview.png',
            technologies: ['Python', 'PyQt5'],
            link: 'https://github.com/eminegozel/text-edit-uygulamasi'
        },
        {
            title: 'Karakter Testi',
            description: 'Kullanıcıların kişilik özelliklerini analiz eden interaktif bir test uygulaması.',
            image: 'https://raw.githubusercontent.com/eminegozel/KarakterTesti/main/preview.png',
            technologies: ['Python', 'PyQt5', 'UI Design'],
            link: 'https://github.com/eminegozel/KarakterTesti'
        }
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-content">
                <h2 className="section-title">Projelerim</h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-card">
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="view-project" target="_blank" rel="noopener noreferrer">
                                        GitHub'da İncele
                                    </a>
                                </div>
                                <div className="portfolio-title">
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 