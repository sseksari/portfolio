import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Chatbot from './Chatbot'

export default function FullPage() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const sidebar = document.querySelector('#sidebar');
                    if (!sidebar) return;
                    
                    const sidebarItems = sidebar.querySelectorAll('li');
                    sidebarItems.forEach(item => item.classList.remove('active'));
                    
                    const activeItem = sidebar.querySelector(`[data-menuanchor="${sectionId}"]`);
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sections-container">
            {/* Home Section */}
            <section id="home" className="section" ref={el => sectionsRef.current[0] = el}>
                <div className="hero">
                    <div className="content-section">
                        <h1 className="name">Shrishti Seksaria</h1>
                        <h2 className="title">Full Stack Developer</h2>
                        <div className="about-text">
                            <p>
                            A passionate data enthusiast and software engineer with an entrepreneurial and growth-driven mindset. 
                            I believe in harnessing the power of data and AI to drive smart, impactful decisions that fuel business success.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <a href="/Shrishti-Resume.pdf" className="cta-button">Download CV</a>
                            <button onClick={() => scrollToSection('contact')} className="cta-button outline">Contact Me</button>
                        </div>
                    </div>
                    <div className="profile-section">
                        <Image
                            src="/profilepic.JPG"
                            alt="Shrishti Seksaria"
                            width={400}
                            height={400}
                            className="profile-image"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section" ref={el => sectionsRef.current[1] = el}>
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-item">
                            <span className="about-emoji">👋</span>
                            <div className="about-text-content">
                                <h3 className="about-card-title">Hello, I'm Shrishti!</h3>
                                <p className="about-card-content">
                                    I’m driven by curiosity and a desire to solve real-world problems through tech. 
                                    I enjoy diving into complex challenges, understanding user needs, and building solutions - using skills I have or picking up new ones along the way. 
                                    Long term, I’m excited to build something of my own and grow alongside the people I work with.
                                </p>
                            </div>
                        </div>
                        <div className="about-item">
                            <span className="about-emoji">🎓</span>
                            <div className="about-text-content">
                                <h3 className="about-card-title">Education & Growth</h3>
                                <p className="about-card-content">
                                    International Student in the USA from Calcutta, India. 
                                    <br></br>
                                    <br></br>
                                    Major in Data Science and Minor in Economics from University of California, San Diego.
                                    <br></br>
                                    <br></br>
                                    #Triton2024
                                </p>
                            </div>
                        </div>
                        <div className="about-item">
                            <span className="about-emoji">💡</span>
                            <div className="about-text-content">
                                <h3 className="about-card-title">Passion & Purpose</h3>
                                <p className="about-card-content">
                                I believe that data and AI are powerful tools to drive smarter, more meaningful decisions in every industry.
                                My passion lies in creating impactful solutions that not only solve problems but also empower people.
                                With an entrepreneurial mindset and a love for continuous learning, my purpose is to innovate, build, and uplift those around me.
                                </p>
                            </div>
                        </div>
                        <div className="about-item">
                            <span className="about-emoji">🎨</span>
                            <div className="about-text-content">
                                <h3 className="about-card-title">Beyond Code</h3>
                                <p className="about-card-content">
                                    When I'm not coding, I'm exploring life's adventures! 
                                    <br /><br />
                                    ✍️ Poetry | 🍳 Cooking | ✈️ Travel | 💪 Fitness & Health
                                    <br /><br />
                                    <a href="/diary" className="diary-link">
                                        📖 Click here for my digital diary
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section" ref={el => sectionsRef.current[2] = el}>
                <div className="container">
                    <h2>Experience</h2>
                    <div className="experience-content">
                        <div className="experience-card">
                            <div>
                                <h3 className="experience-title">Software Engineer @ Amgen</h3>
                                <p className="experience-description">
                                    Working on developing and maintaining enterprise-level applications, 
                                    focusing on creating efficient and scalable solutions for biotech operations.
                                </p>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div>
                                <h3 className="experience-title">Data Engineer Intern @ Callaway Golf</h3>
                                <p className="experience-description">
                                    Developed and optimized data pipelines, working with large datasets 
                                    to improve data processing efficiency and analytics capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section" ref={el => sectionsRef.current[3] = el}>
                <div className="container">
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div>
                                <h3 className="project-title">MedDash</h3>
                                <p className="project-description">
                                    Collaborated with multiple departments and clinics to create a medical dashboard that improves patient care by
                                    integrating and visualizing sensitive patient data from multiple sources.
                                </p>
                                <a href="#" className="project-link">Learn More</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <div>
                                <h3 className="project-title">Data Visualization and Analysis</h3>
                                <p className="project-description">
                                    Conducted an analysis of a sales dataset, employed feature engineering to unveil key sales metrics which are helpful to make
                                    informed decisions, and enhanced data digestion through interactive visualizations on a custom-built website.
                                </p>
                                <a href="#" className="project-link">Learn More</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <div>
                                <h3 className="project-title">Power Outage Cause Predictor</h3>
                                <p className="project-description">
                                    Processed and refined a dataset of 1500+ power outages, conducting univariate-bivariate analyses and hypothesis tests.
                                    Trained a 90% accurate Random Forest Classifier to predict the causes of power outages.
                                </p>
                                <a href="#" className="project-link">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" ref={el => sectionsRef.current[4] = el}>
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-content">
                        <p>Feel free to connect with me on social media or reach out via email.</p>
                        <div className="social-icons">
                            <a href="https://instagram.com/__shrishti__" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shrishti-seksaria-4746b8212/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:shrishseksa@gmail.com" className="social-icon">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Chatbot />
        </div>
    );
} 