"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="sidebar">
			<ul id="sidebar" className="sidebar-list">
				<li data-menuanchor="home" className="active">
					<button onClick={() => scrollToSection('home')} aria-label="Home">
						<FontAwesomeIcon icon={faHome} className="sidebar-icon" />
					</button>
				</li>
				<li data-menuanchor="about">
					<button onClick={() => scrollToSection('about')} aria-label="About">
						<FontAwesomeIcon icon={faUser} className="sidebar-icon" />
					</button>
				</li>
				<li data-menuanchor="experience">
					<button onClick={() => scrollToSection('experience')} aria-label="Experience">
						<FontAwesomeIcon icon={faBriefcase} className="sidebar-icon" />
					</button>
				</li>
				<li data-menuanchor="projects">
					<button onClick={() => scrollToSection('projects')} aria-label="Projects">
						<FontAwesomeIcon icon={faFolderOpen} className="sidebar-icon" />
					</button>
				</li>
				<li data-menuanchor="contact">
					<button onClick={() => scrollToSection('contact')} aria-label="Contact">
						<FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;