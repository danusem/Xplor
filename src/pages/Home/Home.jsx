import React from 'react';
import island from './island.jpg';

import styles from './Home.module.css';

const Home = (props) => {
    return (
        <main className={styles.home}>
            <h1>Featured Destination</h1>
            {
                props.featuredDestinations.map(({city, _id}) => (
                    <section key={_id}>
                        <h2>{city}</h2>
                    </section>

                ))
            }
            <img className={styles.pic} src={island} alt="island"/>
        </main>
    );
};

export default Home;