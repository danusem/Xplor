import React, { Component } from 'react';

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    render () {
        return (
            <form>
                <fieldset>
                    <legend>Signup Form</legend>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" value={this.state.name}/>

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={this.state.email}/>

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" value={this.state.password}/>

                    <label htmlFor="passwordConf">Password Confirmation</label>
                    <input id="passwordConf" name="passwordConf" type="password" value={this.state.passwordConf}/>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default SignupForm;