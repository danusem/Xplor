import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
    return (
        <main>
            <h1>Login</h1>
            <LoginForm {...props} />
        </main>
    );
};

export default Login;