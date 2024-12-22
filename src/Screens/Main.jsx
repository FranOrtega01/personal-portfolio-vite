import React, { useState, useEffect } from 'react'
import { Navbar } from '../Components/Navbar/Navbar';
import { BlobContainer } from '../Components/Background/BlobContainer';
import { Home } from './Home/Home';
import {About } from './About/About';
import {Projects} from './Projects/Projects'
import {Contact} from './Contact/Contact.jsx'

export const Main = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleScroll = () => {
        const sectionElements = document.querySelectorAll('section');
        let currentSection = null;

        sectionElements.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= (window.innerHeight / 2 - 100)) {
                currentSection = section.id;
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {/* <BlobContainer /> */}
            <Navbar scroll={scrollToSection} active={activeSection} />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>

    );
}
