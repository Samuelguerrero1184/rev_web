'use client'

import React, { useEffect } from 'react';
import styles from "./components.module.css";

export default function CustomNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`) as HTMLElement;
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 20) { // Cambia 10 por el porcentaje de desplazamiento deseado
        if (header) {
          header.classList.add(styles.scrolled);
        }
      } else {
        if (header) {
          header.classList.remove(styles.scrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo}>REV CONTRACTORS LLC</a>
      <nav className={styles.navBar}>
        <a href='/home'>Home</a>
        <a href='/services'>Services</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  );
} 