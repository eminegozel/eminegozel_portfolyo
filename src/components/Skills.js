import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);

    const skills = [
        { name: 'HTML', level: 90, icon: 'fab fa-html5' },
        { name: 'CSS', level: 85, icon: 'fab fa-css3-alt' },
        { name: 'Python', level: 65, icon: 'fab fa-python' },
        { name: 'C#', level: 46, icon: 'fab fa-microsoft' },
        { name: 'Java', level: 40, icon: 'fab fa-java' },
        { name: 'React', level: 53, icon: 'fab fa-react' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Tüm progress barları seç ve animasyonu başlat
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach((bar, index) => {
                        const level = skills[index].level;
                        setTimeout(() => {
                            bar.style.transition = 'width 1.5s ease-in-out';
                            bar.style.width = `${level}%`;
                        }, index * 200); // Her bar için kademeli başlangıç
                    });
                    observer.unobserve(entry.target); // Bir kez çalıştıktan sonra gözlemi durdur
                }
            });
        }, {
            threshold: 0.2 // Bölümün %20'si görünür olduğunda tetikle
        });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, [skills]);

    return (
        <section id="skills" className="skills-section" ref={skillsRef}>
            <div className="skills-content">
                <h2 className="section-title">Neler Yapabilirim?</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <i className={skill.icon}></i>
                            <h3>{skill.name}</h3>
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress"
                                    style={{ width: '0%' }}
                                >
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 