import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import IgaoLogo from '../assets/igao-logo.png';
import FavIcon from '../assets/igao-logo.png';
import { TiThMenu } from 'react-icons/ti';
import { MdWorkHistory } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { IoIosCloseCircleOutline } from 'react-icons/io'; // Import do ícone de close

const HeaderPage = () => {
    document.title = "DevIgaoooo | Portfólio"

     useEffect(() => {
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            favicon.href = FavIcon;
        }
    }, [])
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.headerPage}>
            <div className={styles.headerContainer}>
            <p className={styles.headerTitle} data-text="DevIgaoooo.">
                    Dev.Igaoooo
                </p>
                <img src={IgaoLogo} className={styles.igaoLogo} alt='igaoLogo' />
                <p className={styles.headerSubtitle} onClick={() => scrollToSection('home')}>
                <FaHome />
                    Home
                </p>
                <p className={styles.headerSubtitle} onClick={() => scrollToSection('about-me')}>
                <FaUserGraduate />
                    Sobre mim
                </p>
                <p className={styles.headerSubtitle} onClick={() => scrollToSection('projetos')}>
                <MdWorkHistory />
                    Projetos
                </p>
                <p className={styles.headerSubtitle} onClick={() => scrollToSection('contact')}>
                <GrContact />
                    Contato
                </p>
                <div>
                    <p className={styles.menuIcon} onClick={toggleSidebar}>
                        <TiThMenu />
                    </p>
                    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                        {/* Conteúdo da sidebar */}
                        <div className={styles.sideBarTitleContainer}>
                        <p className={styles.sideBarTitle} onClick={toggleSidebar}>
                            <IoIosCloseCircleOutline />
                        </p>
                        </div>
                        
                        <ul className={styles.sideBarList}>
                            <div className={styles.iconContainer}>
                                <li className={styles.sidebarIcon}>
                                    <FaHome />
                                </li>
                                <a className={styles.iconParagraph} href='#home' onClick={toggleSidebar}>
                                    Home
                                </a>
                            </div>
                            <div className={styles.iconContainer}>
                                <li className={styles.sidebarIcon}>
                                    <FaUserGraduate />
                                </li>
                                <a className={styles.iconParagraph} href='#about-me' onClick={toggleSidebar}>
                                    Sobre mim
                                </a>
                            </div>
                            <div className={styles.iconContainer}>
                                <li className={styles.sidebarIcon}>
                                    <MdWorkHistory />
                                </li>
                                <a className={styles.iconParagraph} href='#projetos' onClick={toggleSidebar}>
                                    Projetos
                                </a>
                            </div>
                            <div className={styles.iconContainer}>
                                <li className={styles.sidebarIcon}>
                                    <GrContact />
                                </li>
                                <a className={styles.iconParagraph} href='#contact' onClick={toggleSidebar}>
                                    Contato
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPage;

