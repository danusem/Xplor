import React, { useState } from 'react';

import styles from './Destinations.module.css';

import DestinationForm from '../../components/DestinationForm/DestinationForm';

const Destinations = (props) => {
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main className={styles.destinations}>
            <h1>Destinations</h1>
            <p>Current Temp: {props.temp}&deg;</p><p>{props.icon && (
            <img
              src={`https://openweathermap.org/img/w/${props.icon}.png`}
              alt="Current Conditions"
            />
            )}
            </p>
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
                    <h2>{city}</h2>
                    <p>Country: {country}</p>
                    {/* <small>Added By: {addedBy.name}</small> */}
                </section>
                ))
            }
        </main>
    );
};

export default Destinations;