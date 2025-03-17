import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
                                A passionate developer focused on creating elegant and efficient solutions. 
                                I specialize in web development and enjoy building meaningful applications that make a difference.
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <a href="/resume.pdf" className="cta-button">Download CV</a>
                            <button onClick={() => scrollToSection('contact')} className="cta-button outline">Contact Me</button>
                        </div>
                    </div>
                    <div className="profile-section">
                        <Image
                            src="/profilepic.jpg"
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
                        <p>
                            Hello! I'm Shrishti Seksaria, a passionate developer with a keen interest in creating elegant and efficient solutions. 
                            I love working with modern technologies and am constantly learning and growing in the field of software development.
                        </p>
                        <p>
                            My journey in technology has been driven by my curiosity and desire to build meaningful applications that make a difference. 
                            I specialize in web development and enjoy the challenge of solving complex problems while creating user-friendly experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section" ref={el => sectionsRef.current[2] = el}>
                <div className="container">
                    <h2>Experience</h2>
                    <div className="experience-content">
                        {/* Add your experience items here */}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section" ref={el => sectionsRef.current[3] = el}>
                <div className="container">
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                        {/* Add your projects here */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" ref={el => sectionsRef.current[4] = el}>
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-content">
                        <p>Feel free to contact me if you have any questions or just want to say hi.</p>
                        <a href="mailto:your.email@example.com" className="contact-email">
                            your.email@example.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
} 