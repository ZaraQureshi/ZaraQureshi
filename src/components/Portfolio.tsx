// src/components/Portfolio.js
import  { useState, useEffect } from 'react';
import zara from '../../public/info.json';
import './Portfolio.css';

const Portfolio = () => {
    const { about, projects, name, title, contact, skills, experience } = zara.zara;

    // 1. State to manage the mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize state based on user preference or local storage
        const savedMode = localStorage.getItem('theme');
        return savedMode === 'dark';
    });

    // 2. Effect to apply the class and save preference
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // 3. Toggle function
    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Helper component for social links (unchanged)
    const SocialLink = ({ href, text }: { href: any; text: any; }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
        >
            <span className="social-link-text">{text}</span>
        </a>
    );

    return (
        <>
            {/* Mode Toggle Button */}
            <button onClick={toggleMode} className="mode-toggle-button">
                {isDarkMode ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
            </button>

            <div className="portfolio-container">

                {/* Header / Introduction */}
                <header className="header-section">
                    <h1 className="header-name">{name}</h1>
                    <h2 className="header-title">{title}</h2>
                    <p className="header-about">{about}</p>
                </header>
{/* Projects Section (Now a Card) */}
                <section className="section-card"> {/* 👈 New Card Class */}
                    <h3 className="section-title">Selected Projects</h3>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <h4 className="project-name">{project.projectName}</h4>
                                <p className="project-tech">{Array.isArray(project.techStack) ? project.techStack.join(' • ') : project.techStack}</p>
                                <p className="project-description">{project.projectDescription}</p>
                                <div className="project-links">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Code
                                    </a>
                                    {project.projectLink && (
                                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                 {/* Experience Section (Now a Card) */}
                <section className="section-card"> {/* 👈 New Card Class */}
                    <h3 className="section-title">Experience</h3>
                    <div className="experience-list">
                        {experience.map((job, index) => (
                            <div key={index} className="job-card">
                                <div className="job-header">
                                    <p className="job-company">{job.companyName}</p>
                                    <h4 className="job-title">{job.title}</h4>
                                    <span className="job-years">{job.years}</span>
                                </div>
                                <div>
                                    {job.description.map((desc) => <p className="job-description">{desc}</p>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
 {/* Skills Section (Now a Card) */}
                <section className="section-card"> {/* 👈 New Card Class */}
                    <h3 className="section-title">Skills & Technologies</h3>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
                {/* Social Links / Connect (Now a Card) */}
                <section className="section-card"> {/* 👈 New Card Class */}
                    <h3 className="section-title">Connect</h3>
                    <div className="contact-links-list">
                        {
                            contact.map((item, i) => <SocialLink key={i} href={item.link} text={item.name} />)
                        }
                    </div>
                </section>

               

               
                

                {/* Footer */}
                <footer className="footer">
                    &copy; {new Date().getFullYear()} {name}. Built with React and CSS.
                </footer>
            </div>
        </>
    );
};

export default Portfolio;