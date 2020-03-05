import React, { Component } from 'react';

// import userService from '../../utils/userService';

import styles from './DestinationForm.module.css';

class DestinationForm extends Component {

    state = this.getInitialState();

    getInitialState() {
        return {
            city: '',
            country: '',
            error: ''
        };
    }

    isFormValid = () => {
        return (
            this.state.city && 
            this.state.country
        );
    }

    handleChange = e => {
        this.setState({
            error: '', 
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;

        try {
            const { city, country } = this.state;
            
            this.setState(this.getInitialState(), () => {

                this.props.history.push('/destinations');

            });

        } catch (error) {
            this.setState ({
                city: '',
                country: '',
                error: error.message
            });
        }
        
    }

    render () {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            <form onSubmit={this.handleSubmit} >
                <fieldset>
                    <legend>New Destination Form</legend>

                    <label htmlFor="city">City</label>
                    <input 
                        id="city" 
                        name="city" 
                        type="city" 
                        value={this.state.city}
                        onChange={this.handleChange}
                        />

                    <label htmlFor="country">Country</label>
                    <input 
                        id="country" 
                        name="country" 
                        type="country" 
                        value={this.state.country}
                        onChange={this.handleChange}
                        />

                    <button disabled={!this.isFormValid()} type="submit">Add Destination</button>
                </fieldset>
            </form>

            </section>  
        );
    }
}

export default DestinationForm;