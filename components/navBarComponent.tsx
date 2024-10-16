'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Hook to get current route
import styles from './components.module.css';

export default function CustomNavbar() {
  const [activeSection, setActiveSection] = useState('home'); // To track the active section
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]'); // Get all sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId); // Update the active section based on the current view
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Cleanup on unmount
      });
    };
  }, []);

  // Determine the background based on both the current path and the active section
  const navbarClass = `${styles.header} 
    ${activeSection === 'services' ? styles.servicesBg : ''}
    ${activeSection === 'about' ? styles.aboutBg : ''}
    ${activeSection === 'contact' ? styles.contactBg : ''}
    ${pathname === '/proyects' ? styles.projectsBg : ''}`; // Add background for the projects page

  return (
    <header className={navbarClass}>
      <a href='/' className={styles.logo}>REV CONTRACTORS LLC</a>
      <nav className={styles.navBar}>
        <a href='/home'>Home</a>
        <a href='/services'>Services</a>
        <a href='/proyects'>Projects</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  );
}
