import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
    return (
        <main>
            <LoginForm {...props} />
        </main>
    );
};

export default Login;