import React, { useState } from 'react';

import styles from './Destinations.module.css';

import DestinationForm from '../../components/DestinationForm/DestinationForm';

const Destinations = (props) => {
    console.log("this is props >>>> ", props)
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main className={styles.destinations}>
            <h1>Destinations</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                formVisible
                &&
                <DestinationForm {...props} />
            }
            {
                props.destinations.map(({_id, city, country}) => (
                <section key={_id}>
                    <h1>{city}</h1>
                    <p>Country: {country}</p>
                    {/* <small>Added By: {addedBy.name}</small> */}
                </section>
                ))
            }
        </main>
    );
};

export default Destinations;