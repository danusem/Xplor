import React from 'react';

// import styles from './Destinations.module.css';

import DestinationForm from '../../components/DestinationForm/DestinationForm';

const Destinations = (props) => {
    return (
        <main>
            <h1>Destinations</h1>
            {
                props.destinations.map(({_id, city, country}) => (
                <section key={_id}>
                    <h1>{city}</h1>
                    <p>Country: {country}</p>
                    {/* <small>Added By: {addedBy.name}</small> */}
                </section>
                ))
            }
            <DestinationForm {...props} addDestination={props.handleAddDestination}/>
        </main>
    );
};

export default Destinations;