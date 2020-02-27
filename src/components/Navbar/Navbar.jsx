import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <h1>Xplor</h1>
            <ul>
                <li>Destinations</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    );
}

export default Navbar;