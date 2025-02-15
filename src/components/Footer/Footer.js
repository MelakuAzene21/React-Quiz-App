<<<<<<< HEAD
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <div style={styles.footer}>
            <h1 style={styles.title}>Developed By Melaku Azene</h1>
            <p style={styles.subtitle}>Passionate about building amazing web experiences</p>

            <div style={styles.socialLinks}>
                <a href="https://github.com/MelakuAzene21" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/melaku-azene-1ba3012b5" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    <FaLinkedin size={24} />
                </a>
                <a href="mailto:melakuazene623@gmail.com" style={styles.link}>
                    <FaEnvelope size={24} />
                </a>
            </div>

            <p style={styles.copyright}>
                &copy; {new Date().getFullYear()} Melaku Azene. All rights reserved.
            </p>
        </div>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#282c34',
        color: '#fff',
        borderTop: '1px solid #444',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#aaa',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
    },
    link: {
        color: '#fff',
        transition: 'color 0.3s ease',
    },
    linkHover: {
        color: '#61dafb',
    },
    copyright: {
        fontSize: '14px',
        color: '#888',
    },
};

=======
const Footer = () => {
    return (
        <div style={{ textAlign: "center", marginBottom: 10 }}>
            <h1>Made by PAVAN KUMAR YALAMARTHY</h1>
        </div>
    );
};
>>>>>>> fbb9a19555c0bbec51ed6ad2128705d60bde9a3f
export default Footer;