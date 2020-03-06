import React from 'react';
import island from './island.jpg';

import styles from './Home.module.css';

const Home = (props) => {
    return (
        <main className={styles.home}>
            <img className={styles.pic} src={island} alt="island"/>
        </main>
    );
};

export default Home;