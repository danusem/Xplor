import React from 'react';

// import styles from './Destinations.module.css';

import DestinationForm from '../../components/DestinationForm/DestinationForm';

const Destinations = (props) => {
    return (
        <main>
            <h1>Destinations</h1>
            <DestinationForm {...props} />
        </main>
    );
};

export default Destinations;